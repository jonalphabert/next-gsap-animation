"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function StaggeredAnimation() {
    gsap.registerPlugin(useGSAP);

    useGSAP(
        () => {
            gsap.fromTo(
                ".staggered-text-animation", 
                {opacity: 0, y: 100},
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "back.out" ,repeat: -1, yoyo: true }
            );
        },
    );

    return (
        <div>
            <h2 className="my-24 text-3xl font-semibold">Staggered Animation</h2>

            <div className="flex justify-center items-center">
                <div className="inline-block overflow-hidden">
                    {"Hello GSAP!".split("").map((char, index) => (
                        char === " " ? 
                            <span key={index} className="staggered-text-animation inline-block w-12">&nbsp;</span> 
                            : <span key={index} className="staggered-text-animation inline-block text-9xl">{char}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}