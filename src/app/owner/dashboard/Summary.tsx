"use client"
import DashboardCard from '@/app/ui/elements/DashboardCard'
import { OwnerStore } from '@/lib/store/ownerStore'
import { ProductsStore } from '@/lib/store/productsStore'
import { FormatRupiah } from '@arismun/format-rupiah'
import React, { ReactNode } from 'react'
import { RestaurantMenu, AttachMoney, Sell, Category } from '@mui/icons-material';
import PageTitle from '@/app/ui/elements/PageTitle'

type CardData = {
    heading: string | ReactNode
    icon: ReactNode
    description: string
}

export default function Summary() {
    const { products } = ProductsStore()
    const { ownerData } = OwnerStore()

    const cardData: CardData[] = [
        {
            heading: `${products.length}`,
            icon: <RestaurantMenu className="text-owner-purple text-base" />,
            description: "Total Provides Menu",
        },
        {
            heading: <FormatRupiah value={ownerData?.income} />,
            icon: <AttachMoney className="text-owner-purple text-base" />,
            description: "Total Current Income",
        },
        {
            heading: `${ownerData?.sale}`,
            icon: <Sell className="text-owner-purple text-base" />,
            description: "Total Sold Menu",
        },
        {
            heading: `${ownerData?.categories}`,
            icon: <Category className="text-owner-purple text-base" />,
            description: "Menu Categories"
        }
    ]

    return (
        <section className='w-full h-fit mt-2 sm:mt-7 flex flex-col justify-start gap-3 sm:gap-5'>
            <PageTitle>
                <PageTitle.SubTitle>
                    Summary
                </PageTitle.SubTitle>
            </PageTitle>
            <div className="flex justify-evenly sm:justify-start flex-wrap gap-2 sm:gap-5">
                {
                    cardData.map((card: CardData, index: number) => (
                        <DashboardCard
                            key={index}
                            heading={card.heading}
                            icon={card.icon}
                            description={card.description}
                            className='shadow-md shadow-gray-500 hover:scale-105 hover:shadow-lg hover:shadow-owner-purple duration-300'
                        />
                    ))
                }
            </div>
        </section>
    )
}
