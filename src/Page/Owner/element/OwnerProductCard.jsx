import PropTypes from 'prop-types';
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import { FormatRupiah } from '@arismun/format-rupiah';
import { Autorenew, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useGetApiStore } from '../../../../Zustand/Api/ApiStore';
import Swal from 'sweetalert2';
import { useFormStore } from '../../../../Zustand/Form/FormStore';

function OwnerProductCard({ id, code, name, price, image, isReady, stock, sold, category }) {
  const isSoldOut = stock === 0 || !isReady
  const [resetSoldData, fetchApi] = useGetApiStore(state => [state.resetSoldData, state.fetchApi])
  const [setEditProductForm, setProductData] = useFormStore(state => [state.setEditProductForm, state.setProductData])
  const [addCheckedList, setCheckedList, checkedList, onChecked] = useOwnerFeature(state => [
    state.addCheckedList,
    state.setCheckedList,
    state.checkedList,
    state.onChecked
  ])
  const productData = { id, code, name, price, image, isReady, stock, sold, category }

  function resetData() {
    if (productData.sold <= 0) {
      Swal.fire({
        icon: "warning",
        title: `Tidak dapat me-reset data penjualan ${productData.name}, karena masih kosong  `,
        customClass: { title: "text-lg", footer: "text-sm" }
      })
      return
    }
    Swal.fire({
      icon: "question",
      showDenyButton: true,
      denyButtonText: "Tidak",
      confirmButtonText: "Ya",
      focusDeny: true,
      title: `Yakin me-reset data penjualan ${productData.name}?`,
      footer: "Setelah me-reset data anda bisa mengatur stok di form edit",
      customClass: { title: "text-lg", footer: "text-sm" }
    })
      .then((response) => {
        if (response.isDenied) {
          return
        }
        fetchApi()
        resetSoldData(productData)
      })
  }

  function editProduct() {
    setEditProductForm()
    setProductData(productData)
  }

  function handleOnChange(e) {
    if (e.target.checked) {
      addCheckedList(productData)
    } else {
      checkedList.splice(checkedList.indexOf(productData), 1)
      const removedItem = checkedList
      setCheckedList(removedItem)
    }
  }

  return (
    <section className="w-44 lg:w-56 h-80 lg:h-96 bg-white relative border border-gray-700 duration-200 rounded-md">
      <div className="relative">
        {
          onChecked &&
          <section className="absolute z-10 top-3 right-3">
            <input onChange={handleOnChange} className="h-5 w-5" type="checkbox" name="" id="" />
          </section>
        }
        <section>
          <picture className="w-full h-fit flex justify-center items-center relative">
            <img className="w-full aspect-square" src={image} alt={name} />
            {
              isSoldOut &&
              <div className="h-1/3 w-1/3 flex justify-center items-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black opacity-75 rounded-full text-white">
                Habis
              </div>
            }
          </picture>
          <section className="h-10 w-full flex justify-around items-center text-xs">
            <p>Stok : {stock}</p>
            <p>Terjual : {sold}</p>
          </section>
          <section className="w-full h-20 lg:h-32 flex flex-col items-center text-xs sm:text-sm md:text-base">
            <div className="w-full h-8 flex items-center justify-center">
              {name}
            </div>
            <div className="w-full h-fit sm:h-3/5 flex justify-around items-center text-2xs xs:text-xs md:text-sm">
              <FormatRupiah value={price} />
              <IconButton variant="contained" sx={{ color: "red" }} onClick={resetData} aria-label="reset product sold data button" title="Reset Data Penjualan">
                <Autorenew fontSize="small" />
              </IconButton>
              <IconButton variant="contained" sx={{ color: "#7A1DE0" }} onClick={editProduct} aria-label="edit product button" title="Edit Data Produk">
                <Edit fontSize="small" />
              </IconButton>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

OwnerProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isReady: PropTypes.bool.isRequired,
  stock: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
}

export default OwnerProductCard
