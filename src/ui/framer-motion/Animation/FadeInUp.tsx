"use client"
import React from 'react'
import { motion } from "framer-motion"

interface FadeInUpProps {
    children: React.ReactNode
    delay?: number
    className?: string
}

export default function FadeInUp({ children, delay = 0.1, className }: FadeInUpProps) {
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
    }

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>

    )
}
