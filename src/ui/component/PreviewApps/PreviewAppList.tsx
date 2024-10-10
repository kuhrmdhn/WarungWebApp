import React from 'react'
import PreviewCard, { PreviewCardProps } from './PreviewCard'
import AOVFadeInUp from '../../framer-motion/Animate On View/AOVFadeInUp'

export default function PreviewAppList() {
    return (
        <div className='w-full h-full flex flex-wrap justify-center items-center gap-4'>
            {
                appsData.map((app: PreviewCardProps, index: number) => (
                    <AOVFadeInUp key={index} delay={(index + 1) / 10}>
                        <PreviewCard
                            icon={app.icon}
                            link={app.link}
                            name={app.name}
                            description={app.description}
                        />
                    </AOVFadeInUp>
                ))
            }
        </div>
    )
}


const appsData: PreviewCardProps[] = [
    {
        icon: "/images/cashier-app.webp",
        name: "Cashier App",
        link: "/cashier",
        description: "Streamline orders, process payments, and connect effortlessly with the kitchen—all from the cashier's app!"
    },
    {
        icon: "/images/chef-app.webp",
        name: "Chef App",
        link: "/chef",
        description: "Receive and manage orders in real time, track progress, and streamline your kitchen workflow effortlessly!"
    },
    {
        icon: "/images/owner-app.webp",
        name: "Owner App",
        link: "/owner",
        description: "Oversee business performance, manage staff, and access key insights to grow your restaurant—all in one place!"
    }
]