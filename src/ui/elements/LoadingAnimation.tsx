"use client"
import React from 'react'
import Bounce from '../framer-motion/Bounce'

export default function LoadingAnimation() {
    const bounceItem = [...Array(3)]
    return (
        <div className="flex gap-2">
            {
                bounceItem.map((_, index) => (
                    <Bounce key={index} delay={index * 2 / 10}>
                        <div className='bg-primary-blue h-3 w-3 rounded-full'>

                        </div>
                    </Bounce>
                ))
            }
        </div>
    )
}
