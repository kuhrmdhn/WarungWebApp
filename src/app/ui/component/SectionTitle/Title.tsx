import React from 'react'

export default function Title({ children, className }: { children: React.ReactNode, className?: string }) {
    return <h1 className={`${className} text-black text-base sm:text-2xl font-semibold`}>{children}</h1>
}