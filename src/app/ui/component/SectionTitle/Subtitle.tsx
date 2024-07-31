import { ArrowRight } from '@mui/icons-material'
import React from 'react'

export default function SubTitle({ text, className }: { text: string, className?: string }) {
    return (
        <div className={`${className} text-black text-sm sm:text-lg font-semibold flex gap-1 items-center`}>
            <ArrowRight className='text-primary-blue' />
            <h2>{text}</h2>
        </div>
    )
}
