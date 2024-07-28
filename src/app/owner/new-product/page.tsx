import PageTitle from '@/app/ui/elements/PageTitle'
import { Suspense } from 'react'
import NewProductForm from './NewProductForm'
import MovePageButton from '@/app/ui/elements/MovePageButton'
import Loading from '@/app/loading'

export default function NewProduct() {
    return (
        <Suspense fallback={<Loading />}>
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
