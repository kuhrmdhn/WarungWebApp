"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function Bounce({ delay, children }: { delay: number, children: React.ReactNode }) {
    const transitionValues = {
        duration: 1,
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
