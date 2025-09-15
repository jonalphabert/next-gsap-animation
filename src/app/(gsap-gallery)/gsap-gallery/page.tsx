"use client"

import GalleryUnsplashGrid from "@/components/gallery-grid/gallery-grid-unsplash";
import Lenis from "lenis";
import { useEffect } from "react";

export default function GsapGallery() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
        lenis.destroy();
        };
    }, []);
    return (
        <>
            <h1 className="text-4xl font-open-sans font-bold mx-auto my-4 text-center">GSAP Unsplash Gallery</h1>
            <GalleryUnsplashGrid />
        </>
    )
}