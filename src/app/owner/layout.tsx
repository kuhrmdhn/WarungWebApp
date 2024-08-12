import Sidebar from '@/ui/component/NavigationBar/Sidebar';
import { Metadata } from 'next';
import React from 'react';

export const metadata:Metadata = {
    title: "Owner"
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <section className='pt-24'>{children}</section>
        </>
    );
};
