import PageTitle from '@/app/ui/elements/PageTitle'
import { Suspense } from 'react'
import NewProductForm from './NewProductForm'
import PrevPageButton from '@/app/ui/elements/PrevPageButton'

export default function NewProduct() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div className='px-7'>
                <PageTitle.Title className='flex items-center gap-5 mb-9'>
                    <PrevPageButton />
                    New Product
                </PageTitle.Title>
                <NewProductForm />
            </div>
        </Suspense>
    )
}
