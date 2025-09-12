"use client";

import VideoPlayerGsap from "./ComponentGsap/VideoPlayerGsap";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WatchIntroSection() {
    const titleRef = useRef<HTMLImageElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const preOrderRef = useRef<HTMLParagraphElement>(null);
    const availableRef = useRef<HTMLParagraphElement>(null);
    const learnMoreRef = useRef<HTMLButtonElement>(null);
    const pricingRef = useRef<HTMLButtonElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 95%",
            },
        })
        gsap.from(descriptionRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: descriptionRef.current,
                start: "top 95%",
            },
        });
        gsap.from(preOrderRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: preOrderRef.current,
                start: "top 95%",
            },
        });
        gsap.from(availableRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: availableRef.current,
                start: "top 95%",
            },
        });
        gsap.from(learnMoreRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: learnMoreRef.current,
                start: "top 95%",
            },
        });
        gsap.from(pricingRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: pricingRef.current,
                start: "top 95%",
            },
        });
    });

    return (
        <section id="iphone-section" className="bg-white relative min-h-screen">
            <div id="iphone-section" className="w-full mx-auto md:pt-24 lg:pt-12 absolute h-fit z-10 bottom-0">
                {/* Hero Content */}
                <div className="relative py-12">
                    <img ref={titleRef} src={"/watch-series.png"} alt="Watch Series" className="mx-auto block w-[80%] sm:w-[50%] lg:w-[30%] mb-4" />
                    <p ref={descriptionRef} className=" text-xl md:text-2xl font-bold text-white font-inter text-center max-w-[640px] px-8 py-4 mx-auto">
                        All-new essentials for a great value. Now you can track your sleep score. Get richer health insights in the Vitals app. Charge up to 2x faster with new fast charging. And see your info at a glance with the Always‑On display.
                    </p>
                    <p ref={availableRef} className="text-slate-200 font-inter text-center max-w-[640px] px-8 mx-auto mb-8">Available starting 9.19</p>
                    <div className="flex justify-center items-center gap-4">
                        <button ref={learnMoreRef} className="border border-white text-white hover:bg-white hover:text-white rounded-full px-8 py-4 cursor-pointer">Learn More</button>
                        <button ref={pricingRef} className="border border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 cursor-pointer">Pre order</button>
                    </div>
                </div>

                {/* Video Here */}
            </div>
            <VideoPlayerGsap 
                src={"https://www.apple.com/105/media/us/apple-watch-series-11/2025/cb7dae4b-d675-49db-8fe3-d4f635c1a345/anim/hero/large.mp4"} 
                classContainer="relative h-screen mx-auto z-0"
                classVideo="w-full h-full object-cover object-center block" showControl={true} loop={true}/>
        </section>
    )
}