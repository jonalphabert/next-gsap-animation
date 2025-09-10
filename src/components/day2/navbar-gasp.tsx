"use client"

import Image from "next/image"

export default function NavbarGSAP () {
    return <>
        <nav className="container mx-auto">
            <div className="flex justify-between items-center py-8">
                <Image src="/magnify.png" alt="Vercel Logo" width={100} height={24} />
                <div className="flex gap-8 items-center">
                    <div className="cursor-pointer text-white text-lg font-semibold">Home</div>
                    <div className="cursor-pointer text-white text-lg font-semibold">About</div>
                    <div className="cursor-pointer text-white text-lg font-semibold">Pricing</div>
                    <div className="cursor-pointer text-white text-lg font-semibold">FAQ</div>
                    <div className="cursor-pointer text-white text-sm border border-white rounded-md px-8 py-2">Free Trial</div>
                    <div className="cursor-pointer text-white text-sm bg-blue-800 rounded-md px-8 py-2">Login</div>
                </div>
            </div>
        </nav>
    </>
}