import { ArrowDropDown, Delete } from "@mui/icons-material"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import axios from "axios"
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function OrderGroupCard({ orderGroupData }) {
    const setOrderGroupData = useGetApiStore(state => state.setOrderGroupData)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    async function deleteCompleteOrder(id) {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/pesanans/${id}`);
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/pesanans`);
            setOrderGroupData(res.data);
        } catch (error) {
            console.error("Error deleting or fetching orders:", error);
        }
    }

    return (
        <section className="w-full h-72 lg:h-80 pl-3 pt-3 bg-gray-50 flex flex-col gap-5 rounded-md" >
            <div className="h-1/5 w-full flex gap-5 justify-around">
                <span className="h-14 w-14 flex justify-center items-center text-xl rounded-md bg-chef-purple text-white">{orderGroupData.id}</span>
                <div className="w-1/2 flex flex-col justify-center text-sm">
                    <h1>Pembeli : {orderGroupData.buyer}</h1>
                    <p>{orderGroupData.data.length} Item</p>
                </div>
                <div className="h-5">
                    <IconButton
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <ArrowDropDown />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => deleteCompleteOrder(orderGroupData.id)} sx={{ color: "#FF5252" }}>
                            <Delete sx={{ marginRight: "10px" }} />
                            Delete
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            <div className="h-1/2">
                <p className="mb-5">Daftar Pesanan :</p>
                <section className="h-full overflow-y-small text-sm flex flex-col gap-2">
                    {
                        orderGroupData.data.map(data => (
                            <section className="w-4/5 flex justify-between items-center px-5" key={data.id}>
                                <h4>{data.name}</h4>
                                <h5>x {data.quantity}</h5>
                            </section>
                        ))
                    }
                </section>
            </div>
        </section >
    )
}
export default OrderGroupCard
