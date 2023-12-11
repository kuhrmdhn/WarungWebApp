import EditProductForm from "../element/EditProductForm"
import OwnerAppTemplate from "../template/OwnerAppTemplate"

function OwnerApp() {
    return (
        <>
            <main className="h-full w-full">
                <OwnerAppTemplate />
            </main>
            <EditProductForm />
        </>
    )
}

export default OwnerApp
