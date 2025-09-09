"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ButtonInteractive() {
    gsap.registerPlugin(useGSAP);

    const ball = useRef<HTMLDivElement>(null);
    const tween = useRef<gsap.core.Tween>(null);

    useGSAP(() => {
        tween.current = gsap.fromTo(
            ball.current,
            { x: 0},
            { 
                x: 750,  
                duration: 3, 
                ease: "back.out", 
                paused: true,
                repeat: -1,
                yoyo: true
            }
        );
    });

    const handleClick = (action: "play" | "pause" | "restart" | "reverse") => {
        if (action === "play") {
            tween.current?.play();
        } else if (action === "pause") {
            tween.current?.pause();
        } else if (action === "restart") {
            tween.current?.restart();
        } else {
            tween.current?.reverse();
        }
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-12 py-12">
            <h2 className="text-3xl font-semibold">Button Interactive</h2>
            <div className="w-full">
                <div ref={ball} className="w-24 h-24 rounded-full bg-amber-400"></div>
            </div>
            <div className="flex justify-center items-center h-screen gap-2">
                <div onClick={() => handleClick("play")}
                    className="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
                >
                    Play
                </div>
                <div onClick={() => handleClick("pause")}
                    className="px-4 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600"
                >
                    Pause
                </div>
                <button
                    onClick={() => handleClick("restart")}
                    className="px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600"
                >
                    Restart
                </button>
                <button
                    onClick={() => handleClick("reverse")}
                    className="px-4 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600"
                >
                    Reverse
                </button>
            </div>
        </div>
    );
}