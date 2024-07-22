"use client"
import React from 'react'
import { motion } from "framer-motion"

interface ScaleHoverProps {
    scaleHover?: number
    scaleTap?: number
    duration?: number
    children: React.ReactNode
    className?: string
}

export default function ScaleHover({ scaleHover = 1.05, scaleTap = 1.05, duration = 0.2, children, className }: ScaleHoverProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale: scaleHover,
                transition: { duration },
            }}
            whileTap={{ scale: scaleTap }}
        >
            {children}
        </motion.div>
    )
}
