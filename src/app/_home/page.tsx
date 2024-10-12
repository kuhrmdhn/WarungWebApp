import Header from '@/ui/component/NavigationBar/HomeHeader'
import FadeInUp from '@/ui/framer-motion/Animation/FadeInUp'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import AppList from './AppList'

export default function HomePage() {
    return (
        <main className="w-full h-full text-slate-800 flex flex-col items-center mb-16 bg-white">
            <Header />
            <FadeInUp className="h-[100svh] w-full self-start pl-3 sm:pl-16 flex items-center">
                <section>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
                            Start Your
                            <br /><span className="text-blue-500">Business</span> Journey
                        </h1>
                        <p className="text-sm sm:text-lg font-thin">Create, Manage, and Edit your business product easily.
                            <br />Provide anything for your business management.
                            <br /> Authentication support.
                        </p>
                        <Link className="w-fit h-fit" href="#app-list">
                            <Button colorScheme="blue">Get Started</Button>
                        </Link>
                    </div>
                </section>
            </FadeInUp>
            <section className="h-max w-full flex flex-col gap-10 pt-24" id="app-list">
                {
                    appListsData.map((app, index) => (
                        <AppList
                            key={index}
                            title={app.title}
                            image={app.image}
                            description={app.description}
                            url={app.url}
                            buttonText={app.buttonText}
                            className={index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                        />
                    ))
                }
            </section>
        </main>
    )
}

const appListsData = [
    {
        title: "Cashier App",
        image: "/images/cashier-app.webp",
        description: "The cashier app is designed to streamline the payment process in a restaurant. It allows cashiers to manage customer orders and payment process. The app also tracks sales data in real-time.",
        url: "/cashier",
        buttonText: "Serve Customers",
    },
    {
        title: "Owner App",
        image: "/images/owner-app.webp",
        description: "The owner app provides restaurant owners with a comprehensive overview of their business operations. It displays key metrics such as sales, stocks, and income. Owners can access real-time reports, manage menu items, manage staff, and monitoring income. The app also enables the owner to set permissions for staff.",
        url: "/owner",
        buttonText: "Manage Business",
    },
    {
        title: "Chef App",
        image: "/images/chef-app.webp",
        description: "The chef app is built to assist kitchen staff in managing and preparing orders. It displays orders in real-time and showing order list and quantity. The app helps chefs prioritize tasks during peak hours and reduces errors by providing clear, up-to-date information.",
        url: "/chef",
        buttonText: "Prepare Orders",
    },
]