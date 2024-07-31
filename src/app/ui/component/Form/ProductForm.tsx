import React from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, Select } from '@chakra-ui/react'
import OwnerProductCard from '../ProductList/OwnerProductCard'
import { Product } from '@/types/productInterface'

type ProductFormProps = {
    productData: Product
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    inputFormData: any[]
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    selectFormData: any[]
}

export default function ProductForm({ productData, onSubmit, inputFormData, handleChange, selectFormData }: ProductFormProps) {
    return (
        <section className="flex justify-around w-full h-full">
            <form onSubmit={(e) => onSubmit(e)} className='h-full w-11/12 lg:w-2/5 px-5 pt-10 flex flex-col'>
                {
                    inputFormData.map((data, index: number) => (
                        <InputGroup key={index} className='w-full flex gap-10 mb-3'>
                            <FormLabel className="w-1/5 text-2xs sm:text-base">
                                {data.label}
                            </FormLabel>
                            <Input
                                className="text-2xs sm:text-base"
                                readOnly={data.isReadonly}
                                name={data.name}
                                value={data.value}
                                type={data.type}
                                onChange={(e) => handleChange(e)}
                                required={data.required}
                            />
                        </InputGroup>
                    ))
                }
                {
                    selectFormData.map((select, index) => (
                        <FormControl key={index} className="flex gap-10 mb-3">
                            <FormLabel className="w-1/5 text-2xs sm:text-base">{select.label}</FormLabel>
                            <Select name={select.name} value={select.value} onChange={(e) => handleChange(e)}>
                                {
                                    select.options.map((option: { value: string, text: string }, index: number) => (
                                        <option className="text-2xs sm:text-base" key={index} value={option.value}>{option.text}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    ))
                }
                <Button type="submit" colorScheme='green'>Submit</Button>
            </form>
            <OwnerProductCard
                isPreviewCard={true}
                productData={productData}
            />
        </section>
    )
}
