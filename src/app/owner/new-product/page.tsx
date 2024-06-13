import PageTitle from '@/app/ui/elements/PageTitle'
import { Suspense } from 'react'
import NewProductForm from './NewProductForm'
import MovePageButton from '@/app/ui/elements/MovePageButton'

export default function NewProduct() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div className='px-7'>
                <PageTitle.Title className='flex items-center gap-5 mb-9'>
                    <MovePageButton link='/owner/all-products' />
                    New Product
                </PageTitle.Title>
                <NewProductForm />
            </div>
        </Suspense>
    )
}
