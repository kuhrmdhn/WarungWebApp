import { Suspense } from 'react'
import Loading from '@/app/loading'
import Title from '@/app/ui/component/SectionTitle/Title'
import MovePageButton from '@/app/ui/elements/MovePageButton'
import AddProduct from '@/app/ui/component/Form/AddProduct'

export default function NewProduct() {
    return (
        <Suspense fallback={<Loading />}>
            <div className='px-7'>
                <Title className='flex items-center gap-5 mb-9'>
                    <MovePageButton link='/owner/all-products' />
                    New Product
                </Title>
                <AddProduct />
            </div>
        </Suspense>
    )
}
