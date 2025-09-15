 "use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GalleryGridCol from "./gallery-grid-col";

gsap.registerPlugin(ScrollTrigger);

interface UnsplashImage {
    urls: {
        regular: string;
    }
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function GalleryUnsplashGrid() {
    const imageDict : UnsplashImage[] = [
        {urls:{regular:"https://images.unsplash.com/photo-1637088660675-6930e63e51a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1754907107629-ee2b421ff7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755134148020-f4a1508404e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755148500082-8f39dea5dc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755241113952-45f5d3eb8be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755263087492-c9f3cd4d2ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755272853203-1469840c4c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755289445810-bfe6381d51c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755374976691-bee0aaba4be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755398105541-2b7dd65d12ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755502046743-78265e184cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755511268115-a7a68109cc8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755540735845-190aa1cb94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1755603642127-d48faaa51493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1756093035138-7135b07084b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1756197256528-f9e6fcb82b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1756460885456-6678545726f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1756557100636-d8f3a7e16428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1756673737017-e87fbb5c5917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1756880070278-723da6a39b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1757326419177-9f991b714367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1757583012526-0a95b5e5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}},
        {urls:{regular:"https://images.unsplash.com/photo-1757611933690-3012dff2a62f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDQ1MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTc5MTIzODJ8&ixlib=rb-4.1.0&q=80&w=1080"}}
    ];

    const containerRef = useRef<HTMLDivElement>(null)
    const columns = chunkArray(imageDict, 4);

    return (
        <section className="py-12 mx-auto md:px-0 px-4 container">
            <div className="flex justify-between items-center mb-8 flex-col gap-8">
                {columns.map((column, index) => (
                    <GalleryGridCol key={index} columnImage={column} />
                ))}
            </div>
        </section>
    );
}