import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export interface PreviewCardProps {
    icon: string
    name: string
    link: string
    description: string
}

export default function PreviewCard({ icon, name, link, description }: PreviewCardProps) {
    return (
        <section className="w-[320px] h-[260px] group relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow text-gray-900">
            <Image height={100} width={200} className="rounded-t-lg h-full w-full object-cover object-center" src={icon} alt={name} />
            <div className="h-full w-full px-3 flex flex-col justify-center items-center gap-5 text-gray-200 absolute top-full group-hover:top-0 duration-300 bg-gray-700/90">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-sm font-lg">{description}</p>
                <Link href={link}>
                    <Button colorScheme='blue'>Visit</Button>
                </Link>
            </div>
        </section>
    )
}
