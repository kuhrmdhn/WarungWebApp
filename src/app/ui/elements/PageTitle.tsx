import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function PageTitle({ children, className }: { children: React.ReactElement<HTMLElement>, className?: string }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

function Title({ children, className }: { children: React.ReactNode, className?: string }) {
    return <h1 className={`${className} text-black text-base sm:text-2xl font-semibold`}>{children}</h1>
}

function SubTitle({ text, className }: { text: string, className?: string }) {
    return (
        <div className={`${className} text-black text-sm sm:text-lg font-semibold flex gap-1 items-center`}>
            <ArrowRightIcon className='text-primary-blue' />
            <h3>{text}</h3>
        </div>
    )
}

PageTitle.Title = Title
PageTitle.SubTitle = SubTitle
