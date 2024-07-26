import React from 'react'
import { motion } from "framer-motion"

type ToggleMenuProps = {
    toggleMenu: (e: React.MouseEvent) => void
    menuOpen: boolean
    className?: string
}

const Path = (props: any) => {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="currentColor"
            strokeLinecap="round"
            {...props}
        />
    )
}

export default function ToggleButton({ toggleMenu, menuOpen, className }: ToggleMenuProps) {
    return (
        <button onClick={toggleMenu} className={`left-5 top-5 z-50 fixed ${className} toggle-button`}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    animate={menuOpen ? 'open' : 'closed'}
                    variants={{
                        closed: { d: 'M 2 2.5 L 20 2.5' },
                        open: { d: 'M 3 16.5 L 17 2.5' },
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    animate={menuOpen ? 'open' : 'closed'}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    animate={menuOpen ? 'open' : 'closed'}
                    variants={{
                        closed: { d: 'M 2 16.346 L 20 16.346' },
                        open: { d: 'M 3 2.5 L 17 16.346' },
                    }}
                />
            </svg>
        </button>
    )
}
