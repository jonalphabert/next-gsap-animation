"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UnsplashImage {
    urls: {
        regular: string;
    }
}

gsap.registerPlugin(ScrollTrigger);

export default function GalleryGridCol({ columnImage }: { columnImage: UnsplashImage[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (containerRef.current == null || containerRef.current == undefined) {
            return
        }

        const items = containerRef.current.querySelectorAll(".gallery-image");

        gsap.from(items, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        const proxy = { skew: 0 };
        const skewSetter = gsap.quickSetter(items, "skewY", "deg");

        let clamp = gsap.utils.clamp(-5, 5);

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew),
                });
                }
            },
        });
    })

    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" ref={containerRef}>
        {columnImage.map((image, index) => (
            <img key={image.urls.regular} src={image.urls.regular} alt={`Image ${index}`} className="gallery-image w-full h-full object-cover rounded" />
        ))}
    </div>;
}