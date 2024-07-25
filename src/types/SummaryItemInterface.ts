import { ReactNode } from "react"

export interface SummaryItem {
    heading: string | ReactNode
    icon: ReactNode
    description: string
}