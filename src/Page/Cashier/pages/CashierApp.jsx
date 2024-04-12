import CashierTemplate from "../template/CashierTemplate"
import OrderCart from "../template/OrderCart"


function CashierAppLayout() {
    document.title = "Warung Web | Cashier App"
    return (
        <main className='h-full w-full font-raleway'>
            <CashierTemplate />
            <OrderCart />
        </main>
    )
}

export default CashierAppLayout