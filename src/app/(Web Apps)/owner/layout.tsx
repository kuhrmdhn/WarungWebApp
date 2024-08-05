"use client"
import Sidebar from '@/app/ui/component/NavigationBar/(Owner)/Sidebar';
import React from 'react';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Sidebar />
            <section className='pt-24'>{children}</section>
        </main>
    );
};

export default AboutLayout;
