import PropTypes from 'prop-types';
import defaultCardImage from "/images/assets/default.webp"
import { FormatRupiah } from '@arismun/format-rupiah';

function PreviewProductCard({ image, name, price }) {
    return (
        <section className="h-64 lg:h-72 w-44 lg:w-48 bg-white relative flex flex-col items-center border border-gray-700 rounded-md">
            <div className="w-full">
                <img src={image || defaultCardImage} alt={`${name} Image`} loading="lazy" className="w-full rounded-md aspect-square" />
            </div>
            <div className="w-full h-20 lg:h-32 flex flex-col items-center text-xs sm:text-sm md:text-base">
                <div className="w-full h-8 flex items-center justify-center">
                    {name}
                </div>
                <div className="w-full h-fit sm:h-3/5 flex justify-around items-center text-2xs xs:text-xs md:text-sm">
                    <FormatRupiah value={price} />
                </div>
            </div>
        </section>
    )
}

PreviewProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default PreviewProductCard
