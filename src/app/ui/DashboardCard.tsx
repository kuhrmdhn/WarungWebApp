import React, { ReactNode } from 'react'
import { Card } from '@chakra-ui/react'

type DashboardCardProps = {
    heading: string | ReactNode
    icon?: ReactNode
    description?: string
    backgroundColor?: string
    fontColor?: string
    className?: string
}

export default function DashboardCard({ heading, icon, description, backgroundColor, fontColor, className }: DashboardCardProps) {
    return (
        <Card
            color={fontColor || "#000000"}
            backgroundColor={backgroundColor || "#FFFFFF"}
            className={`w-36 xs:w-40 sm:w-72 h-16 sm:h-24 flex flex-row justify-evenly ${className}`}
        >
            <div className='h-full w-3/5 flex flex-col items-start justify-center'>
                <p className='text-2xs xs:text-xs sm:text-sm font-light'>
                    {description}
                </p>
                <h3 className='text-xs xs:text-sm sm:text-xl font-bold flex justify-between items-center'>
                    {heading}
                </h3>
            </div>
            <div className="h-full w-fit xs:w-1/5 flex justify-center items-center">
                {icon}
            </div>
        </Card>
    )
}
