"use client"
import { OwnerStore } from '@/lib/store/ownerStore'
import { ProductsStore } from '@/lib/store/productsStore'
import { FormatRupiah } from '@arismun/format-rupiah'
import React from 'react'
import { RestaurantMenu, AttachMoney, Sell, Category } from '@mui/icons-material';
import PageTitle from '@/app/ui/elements/PageTitle'
import { SummaryItem } from '@/types/SummaryItemInterface'
import SummaryCardList from '@/app/ui/component/SummaryCardList/SummaryCardList'

export default function Summary() {
    const { products } = ProductsStore()
    const { ownerData } = OwnerStore()

    const summaryData: SummaryItem[] = [
        {
            heading: `${products.length}`,
            icon: <RestaurantMenu className="text-owner-purple text-lg" />,
            description: "Total Provides Menu",
        },
        {
            heading: <FormatRupiah value={ownerData?.income} />,
            icon: <AttachMoney className="text-owner-purple text-lg" />,
            description: "Total Current Income",
        },
        {
            heading: `${ownerData?.sale}`,
            icon: <Sell className="text-owner-purple text-lg" />,
            description: "Total Sold Menu",
        },
        {
            heading: `${ownerData?.categories}`,
            icon: <Category className="text-owner-purple text-lg" />,
            description: "Menu Categories"
        }
    ]

    return (
        <section className='w-full h-fit mt-2 sm:mt-7 flex flex-col justify-start gap-3 sm:gap-5'>
            <PageTitle>
                <PageTitle.SubTitle text='Summary' />
            </PageTitle>
            <SummaryCardList summaryData={summaryData} />
        </section>
    )
}
