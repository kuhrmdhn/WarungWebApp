import ScaleHover from "../../framer-motion/ScaleHover";

export default function NavItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <ScaleHover className={`flex w-full h-14 justify-center space-x-3 items-center gap-3 rounded-lg hover:bg-primary-blue duration-150 cursor-pointer ${className}`}>
            <div className="w-full">
                {children}
            </div>
        </ScaleHover>
    )
}