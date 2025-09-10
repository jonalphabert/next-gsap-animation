"use client"

import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function NavbarGSAP () {
    const logoRef = useRef<HTMLImageElement>(null);

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl
            .addLabel("start")
            .fromTo(
                logoRef.current, 
                {
                    opacity: 0,
                    scale: 0
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.inOut"
                })
            .addLabel("menu")
            .from(
                ".nav-menu", 
                {
                    y: 10, 
                    opacity: 0, 
                    duration: 2, 
                    ease: "elastic.out", 
                    stagger: 0.2
                })
        
    })
    return <>
        <nav className="container mx-auto">
            <div className="flex justify-between items-center py-8">
                <Image src="/magnify.png" alt="Vercel Logo" width={100} height={24} ref={logoRef}/>
                <div className="flex gap-8 items-center">
                    <div className="nav-menu cursor-pointer text-white text-lg font-semibold">Home</div>
                    <div className="nav-menu cursor-pointer text-white text-lg font-semibold">About</div>
                    <div className="nav-menu cursor-pointer text-white text-lg font-semibold">Pricing</div>
                    <div className="nav-menu cursor-pointer text-white text-lg font-semibold">FAQ</div>
                    <div className="nav-menu cursor-pointer text-white text-sm border border-white rounded-md px-8 py-2">Free Trial</div>
                    <div className="nav-menu cursor-pointer text-white text-sm bg-blue-800 rounded-md px-8 py-2">Login</div>
                </div>
            </div>
        </nav>
    </>
}