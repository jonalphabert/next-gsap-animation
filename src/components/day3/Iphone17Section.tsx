"use client";

import VideoPlayerGsap from "./ComponentGsap/VideoPlayerGsap";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import style from "./Iphone17Section.module.css";

export default function Iphone17Section() {
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
        <section id="iphone-section" className="bg-white">
            <div id="iphone-section" className="container mx-auto md:pt-24 lg:pt-12 relative h-fit">
                {/* Hero Content */}
                <div className="relative py-12">
                    <h2 className={`${style["iphone-17-color"]} text-3xl md:text-7xl font-bold text-gray-500 font-inter text-center mb-4 iphone-17-color`} ref={titleRef} id="iphone-17">iPhone 17</h2>
                    <p ref={descriptionRef} className=" text-xl md:text-2xl font-bold text-gray-500 font-inter text-center max-w-[640px] px-8 py-4 mx-auto">
                        Even more delightful. Even more durable. Our best display ever with ProMotion up to 120Hz and the new Ceramic Shield 2 on the front. An advanced 48MP Dual Fusion camera system. And the new Center Stage front camera.
                    </p>
                    <p ref={preOrderRef} className="text-slate-500 font-inter text-center max-w-[640px] px-8 mx-auto">Pre-order starting 5:00 a.m. PT on 9.12</p>
                    <p ref={availableRef} className="text-slate-500 font-inter text-center max-w-[640px] px-8 mx-auto mb-8">Available starting 9.19</p>
                    <div className="flex justify-center items-center gap-4">
                        <button ref={learnMoreRef} className="border border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-4 cursor-pointer">Learn More</button>
                        <button ref={pricingRef} className="border border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-4 cursor-pointer">View Pricing</button>
                    </div>
                </div>

                {/* Video Here */}
                <VideoPlayerGsap 
                    src={"https://www.apple.com/105/media/us/home/2025/fddcb96f-3455-4785-9873-42f96cabe984/anim/twist/large_2x.mp4"} 
                    classContainer="relative w-[75%] mx-auto z-10"
                    classVideo="w-full h-full object-cover object-top block" showControl={false} loop={false}/>
            </div>
        </section>
    )
}