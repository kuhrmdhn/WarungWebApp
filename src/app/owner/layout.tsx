"use client"
import React from 'react';
import NavigationBar from '../ui/elements/NavigationBar';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavigationBar>
                <NavigationBar.OwnerNavbar />
            </NavigationBar>
            <main>{children}</main>
        </>
    );
};

export default AboutLayout;
