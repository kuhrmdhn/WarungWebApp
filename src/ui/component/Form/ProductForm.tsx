import { Product } from '@/types/productInterface'
import { Button, FormControl, FormLabel, Input, InputGroup, Select } from '@chakra-ui/react'
import React from 'react'
import ProductCardImage from '../ProductList/ProductCardImage'

type ProductFormProps = {
    children?: React.ReactNode
    productData: Product
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    inputFormData: any[]
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    selectFormData: any[]
    editable?: boolean
}

export default function ProductForm({ children, productData, onSubmit, inputFormData, handleChange, selectFormData, editable = true }: ProductFormProps) {
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
                                className="text-2xs sm:text-base disabled:text-black disabled:opacity-100"
                                readOnly={data.isReadonly}
                                name={data.name}
                                value={data.value}
                                type={data.type}
                                onChange={(e) => handleChange(e)}
                                required={data.required}
                                disabled={!editable}
                                sx={{
                                    _disabled: {
                                        color: 'black',
                                        opacity: 1
                                    }
                                }}
                            />

                        </InputGroup>
                    ))
                }
                {
                    selectFormData.map((select, index) => (
                        <FormControl key={index} className="flex gap-10 mb-3">
                            <FormLabel className="w-1/5 text-2xs sm:text-base">{select.label}</FormLabel>
                            <Select
                                disabled={!editable}
                                name={select.name}
                                value={select.value}
                                onChange={(e) => handleChange(e)}
                                sx={{
                                    _disabled: {
                                        color: 'black',
                                        opacity: 1
                                    }
                                }}
                            >
                                {
                                    select.options.map((option: { value: string, text: string }, index: number) => (
                                        <option className="text-2xs sm:text-base" key={index} value={option.value}>{option.text}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    ))
                }
                <div className="w-fit flex gap-5">
                    {children}
                    {
                        editable &&
                        <Button className="w-fit" type="submit" colorScheme='green'>Save</Button>
                    }
                </div>
            </form>
            <div className="h-80 w-80">
                <ProductCardImage
                    productData={productData}
                />
            </div>
        </section>
    )
}
