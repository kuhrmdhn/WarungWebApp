"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function Bounce({ delay = 0.2, duration = 1, children }: { delay?: number, duration?: number, children: React.ReactNode }) {
    const transitionValues = {
        duration: duration,
        repeat: Infinity,
        ease: "easeOut"
    }

    return (
        <motion.span
            animate={{
                y: [0, 6, 0]
            }}
            transition={{
                y: {
                    ...transitionValues,
                    delay: delay
                }
            }}
        >
            {children}
        </motion.span>
    )
}
