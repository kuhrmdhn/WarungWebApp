"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    children: React.ReactNode
    className?: string
    scale?: number
}

export default function Clicked({ children, className, scale = 0.90 }: Props) {
    return (
        <motion.div
            className={className}
            whileTap={{
                scale: scale
            }}
        >
            {children}
        </motion.div>
    )
}
