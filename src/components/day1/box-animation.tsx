"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BoxAnimation() {
    gsap.registerPlugin(useGSAP);

    const container = useRef<HTMLDivElement>(null);
    const box2 = useRef<HTMLDivElement>(null);
    const box4 = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // using GSAP with selector
            gsap.to(".box-1", {x: "80vw", opacity: 0, duration: 2});
            
            // or you can use GSAP with ref
            gsap.to(box2.current, {x: "80vw", rotate:360, duration: 2});

            // Here you can use gsap.from or gsap.fromTo
            gsap.fromTo(".box-3", {x: "0", opacity: 0}, {x: "80vw", opacity: 1, duration: 2});
            gsap.from(box4.current, {x: "80vw", opacity: 0, duration: 2});     
        },
        {
            // Scope indicate which element you want to animate
            scope: container
        } 
    )

    return(
        <div>
            <div className="flex flex-col gap-8" ref={container}>
                <div className="box-1 w-24 h-24 bg-amber-300"></div>
                <div ref={box2} className="box-2 w-24 h-24 bg-blue-300"></div>
                <div className="box-3 w-24 h-24 bg-green-300"></div>
                <div ref={box4} className="box-4 w-24 h-24 bg-red-300"></div>
            </div>
            {/* This will not animate even the class have box-1 */}
            <div className="box-1 w-24 h-24 bg-amber-300 mt-12 flex justify-center items-center text-black text-center">Outside Container</div>
        </div>
    );
}