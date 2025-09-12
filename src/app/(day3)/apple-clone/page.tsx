"use client";

import AirpodsSection from "@/components/day3/AirpodsSection";
import AppleNavbar from "@/components/day3/AppleNavbar"
import Footer from "@/components/day3/Footer";
import HeroSection from "@/components/day3/HeroSection";
import Iphone17Section from "@/components/day3/Iphone17Section";
import IphoneAirSection from "@/components/day3/IphoneAirSection";
import IphoneSection from "@/components/day3/IphoneSection";
import WatchUltraSection from "@/components/day3/WacthUltraSection";
import WatchIntroSection from "@/components/day3/WatchIntroSection";
import WacthSESection from "@/components/day3/WatchSESection";

import Lenis from "lenis";
import { useEffect } from "react";

export default function dayTwoPage() {
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
        <div className='min-h-screen relative z-0 font-inter bg-black'>
            <AppleNavbar />
            <HeroSection />
            <IphoneSection />
            <IphoneAirSection />   
            <Iphone17Section /> 
            <AirpodsSection />
            <WatchIntroSection />
            <WacthSESection />
            <WatchUltraSection />
            <Footer />
        </div>
    );
}