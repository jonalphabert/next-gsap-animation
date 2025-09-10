"use client";

import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function HeroSectionGSAP () {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.addLabel("start")
            .fromTo(".hero-cta", 
                { opacity: 0, scale: 0.8, filter: "blur(10px)" }, 
                { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, stagger: 0.1, ease: "back.out(1.7)" }
            )
            .addLabel("description")
            .from("#hero-description", 
                { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" }, "-=0.5"
            )
            .addLabel("button")
            .from(".hero-button", 
                { opacity: 0, y: 20, scale: 0.8, duration: 0.8, ease: "back.out(1.7)", stagger: 0.2 }, "-=0.3"
            )
            .addLabel("image")
            .from(".hero-image", 
                { opacity: 0, filter: "blur(15px)", rotateY: 180, duration: 1, ease: "power3.out" }, "-=0.2"
            )
            .from(".hero-image-2", 
                { opacity: 0, filter: "blur(20px)", rotateY: 180, duration: 1.2, ease: "power3.out"  }
            )
    })
    return <>
        <section className="flex flex-col items-center pt-24">
            <div className="text-center flex gap-8">
                {"Upscale Your Images,".split(" ").map((char, index) => <span key={index} className={`text-7xl font-extrabold mb-4 hero-cta ${index === 2 ? "text-blue-600" : ""}`}>{char}</span>)}
            </div>
            <div className="text-center flex gap-8 mb-8">
                {"Not Your Pixels.".split(" ").map((char, index) => <span key={index} className="text-7xl font-extrabold mb-4 hero-cta">{char}</span>)}
            </div>
            <p id="hero-description" className="text-center text-xl w-4xl mb-8">Transform your low-resolution photos into stunning, high-definition masterpieces instantly with our powerful AI. Perfect for photographers, designers, and everyone in between. And all this magic just on <strong className="text-blue-600">one click!</strong></p>
            <div className="flex justify-center items-center gap-4 mb-24">
                <div className="hero-button cursor-pointer text-white bg-blue-800 rounded-md px-8 py-2">Start Free Trial</div>
                <div className="hero-button cursor-pointer text-white underline rounded-md px-8 py-2">See how this work &rarr;</div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="relative left-12">
                    <Image className="hero-image" src="/blurred-image.png" alt="hero-image" width={300} height={300} />
                </div>
                <div>
                    <Image className="hero-image-2" src="/upscale-image.png" alt="hero-image" width={600} height={600} />
                </div>
            </div>
        </section>
    </>
}