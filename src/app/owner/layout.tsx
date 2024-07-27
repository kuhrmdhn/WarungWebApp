"use client"
import React from 'react';
import Sidebar from '../ui/component/NavigationBar/Sidebar';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Sidebar />
            <section className='pt-24'>{children}</section>
        </main>
    );
};

export default AboutLayout;
