import Logo from '../Logo/Logo'

export default async function Header() {
    return (
        <header className="w-full h-16 px-16 bg-white flex justify-between items-center fixed top-0 left-0 z-50 border-b-2">
            <Logo />
        </header>
    )
}
