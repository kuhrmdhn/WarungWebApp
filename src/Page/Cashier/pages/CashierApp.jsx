import CashierTemplate from "../template/CashierTemplate"
import OrderCart from "../template/OrderCart"


function CashierAppLayout() {
    return (
        <main className='h-full w-full'>
            <CashierTemplate />
            <OrderCart />
        </main>
    )
}

export default CashierAppLayout