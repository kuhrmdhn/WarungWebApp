import { Metadata } from 'next'
import Navbar from '../../ui/component/NavigationBar/CashierNavbar'

export const metadata: Metadata = {
    title: "Cashier App",
    description: "Warung Web Cashier Web App"
}

type Props = {
    children: React.ReactNode
}

export default function CashierLayout({ children }: Props) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}