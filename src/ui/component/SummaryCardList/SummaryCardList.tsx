import React from 'react'
import FadeInUp from '../../framer-motion/FadeInUp'
import DashboardCard from './SummaryCard'
import { SummaryItem } from '@/types/SummaryItemInterface'

type SummaryListProps = {
    summaryData: SummaryItem[]
}

export default function SummaryCardList({ summaryData }: SummaryListProps) {
    return (
        <div className="flex justify-evenly sm:justify-start flex-wrap gap-2 sm:gap-5">
            {
                summaryData.map((card: SummaryItem, index: number) => (
                    <FadeInUp key={index} delay={index * 0.1}>
                        <DashboardCard
                            heading={card.heading}
                            icon={card.icon}
                            description={card.description}
                        />
                    </FadeInUp>
                ))
            }
        </div>
    )
}
