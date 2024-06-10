"use client"
import React from 'react';
import NavigationBar from './components/NavigationBar';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavigationBar />
            <main>{children}</main>
        </>
    );
};

export default AboutLayout;
