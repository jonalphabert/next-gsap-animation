"use client";

import VideoPlayerGsap from "./ComponentGsap/VideoPlayerGsap";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".hero-description", {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: ".hero-description",
                start: "top bottom",
            },
        });
        gsap.from(".button-cta", {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: ".button-cta",
                start: "top bottom",
            },
        })
    })
    return (
        <section id="hero" className="container mx-auto md:py-24 lg:py-12 relative">
            {/* Video Here */}
            <VideoPlayerGsap src={"https://www.apple.com/105/media/us/home/2025/fddcb96f-3455-4785-9873-42f96cabe984/anim/hero_takeover/large_2x.mp4"} classVideo={"relative -top-12 md:-top-24 w-full md:w-[70%] lg:w-[50%] mx-auto -z-10"} showControl={true}/>
            
            {/* Hero Content */}
            <div className="relative lg:-top-48 md:-top-32 -top-12">
                <p className="hero-description text-xl md:text-2xl font-bold text-gray-500 font-inter text-center max-w-[960px] px-8 py-4 mx-auto mb-8">
                    Get to know the next generation of iPhone — iPhone 17 Pro, iPhone 17, and the all-new iPhone Air. Explore the new AirPods Pro 3 featuring the world’s best in-ear Active Noise Cancellation. And discover the latest Apple Watch family, which provides more powerful health insights than ever.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <button className="button-cta border border-white text-white rounded-full px-8 py-4 cursor-pointer">Watch The Events</button>
                </div>
            </div>
        </section>
    )
}