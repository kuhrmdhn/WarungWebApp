import { Metadata } from 'next'
import React, { ReactElement } from 'react'

export const metadata:Metadata = {
    title: "Owner Profile"
}

export default function OwnerProfileLayout({ children }: { children: ReactElement }) {
    return (
        <div>
            {children}
        </div>
    )
}
