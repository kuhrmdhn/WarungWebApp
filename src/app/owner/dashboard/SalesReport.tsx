"use client";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement, ArcElement } from "chart.js";
import React from 'react'
import { Line, Pie } from "react-chartjs-2";
import { ProductsStore } from "@/lib/store/productsStore";
import { Product, ProductCategory } from "@/types/productInterface";
import { ListItem, Table, Tbody, Td, Tr, UnorderedList } from "@chakra-ui/react";
import SubTitle from "@/ui/component/SectionTitle/Subtitle";
import FadeInUp from "@/ui/framer-motion/Animation/FadeInUp";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, ArcElement);

export default function SalesReport() {
    const { products } = ProductsStore()
    const popularMenu = products.slice().sort((a: Product, b: Product) => b.sold - a.sold)[0]?.name
    const availableMenu = products.slice().filter((product: Product) => product.stock > 0).length
    const unavailableMenu = products.slice().filter((product: Product) => product.stock === 0).length
    const foodMenuCategory = products.filter((product: Product) => product.category === ProductCategory.FOOD).length    
    const drinkMenuCategory = products.filter((product: Product) => product.category === ProductCategory.DRINK).length
    const snackMenuCategory = products.filter((product: Product) => product.category === ProductCategory.SNACK).length
    const categoryList: string[] = ["Food", "Drink", "Snack"]
    const productData = {
        labels: products.map((product: Product) => product.name),
        datasets: [{
            label: "Sales",
            data: products.map((product: Product) => product.sold),
            borderColor: "#56B9F1"
        }]
    }

    const categoryData = {
        labels: categoryList,
        datasets: [{
            label: "Total Menu",
            data: [foodMenuCategory, drinkMenuCategory, snackMenuCategory],
            backgroundColor: ["#56B9F1", "#F86767", "#14BF97"],
        }]
    }

    type StatusMenu = {
        description: string
        value: number | string
    }
    const statusMenuData: StatusMenu[] = [
        {
            description: "Popular Menu",
            value: popularMenu
        },
        {
            description: "Available Menu",
            value: availableMenu
        },
        {
            description: "Unavailable Menu",
            value: unavailableMenu
        }
    ]

    return (
        <section className='mt-7 h-max w-full'>
            <SubTitle text='Sales Report' />
            <div className="h-max xl:h-[80svh] w-full flex flex-col lg:flex-row justify-evenly items-center mt-5 gap-5 lg:gap-0">
                <FadeInUp className="h-auto lg:h-full w-full lg:w-3/5 flex justify-center items-center rounded-lg p-4 bg-white shadow-md shadow-gray-500">
                    <Line data={productData} />
                </FadeInUp>
                <section className="h-max lg:h-full w-full lg:w-1/3 text-black flex flex-col sm:flex-row lg:flex-col justify-between gap-5 lg:gap-0">
                    <FadeInUp className="w-full sm:w-1/2 lg:w-full h-[200px] sm:h-[300px] lg:h-[45%] p-5 rounded-lg bg-white shadow-md shadow-gray-500">
                        <SubTitle text="Status Menu" />
                        <Table>
                            <Tbody>
                                {
                                    statusMenuData.map((statusMenu: StatusMenu, index: number) => (
                                        <Tr className="text-xs sm:text-base" key={index}>
                                            <Td>{statusMenu.description}</Td>
                                            <Td>{statusMenu.value}</Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    </FadeInUp>
                    <FadeInUp className="w-full sm:w-1/2 lg:w-full h-[200px] sm:h-[300px] lg:h-1/2 pt-5 pb-7 pl-5 rounded-lg bg-white shadow-md shadow-gray-500">
                        <SubTitle text="Category Menu" />
                        <section className="flex w-full h-full justify-around">
                            <Pie data={categoryData} />
                            <UnorderedList className="h-full w-full flex flex-col items-center justify-center text-xs sm:text-base">
                                {
                                    categoryList.map((category: string, index: number) => (
                                        <ListItem key={index}>{category}</ListItem>
                                    ))
                                }
                            </UnorderedList>
                        </section>
                    </FadeInUp>
                </section>
            </div>
        </section>
    )
}
