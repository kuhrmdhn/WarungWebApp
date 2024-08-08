"use client"
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import FadeInUp from '../FadeInUp'

export default function AOVFadeInUp({ children, delay = 0.1 }: { children: React.ReactNode, delay?: number }) {
    const AOVContainer = useRef(null)
    const isInView = useInView(AOVContainer, { once: true })
    return (
        <section ref={AOVContainer}>
            {
                isInView && <FadeInUp delay={delay}>{children}</FadeInUp>
            }
        </section>
    )
}
