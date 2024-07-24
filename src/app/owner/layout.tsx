"use client"
import React from 'react';
import OwnerSidebar from '../ui/components/OwnerSidebar';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <OwnerSidebar />
            <section>{children}</section>
        </main>
    );
};

export default AboutLayout;
