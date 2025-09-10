import HeroSectionGSAP from "@/components/day2/hero-section-gsap";
import NavbarGSAP from "@/components/day2/navbar-gasp";
import SVGBackgroundAnimation from "@/components/day2/svg-background-animation";

export default function dayTwoPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-[#1A2A4C] to-[#030913] relative z-0'>
            <SVGBackgroundAnimation />
            <NavbarGSAP />
            <div className='container mx-auto'>
                <HeroSectionGSAP/>
            </div>
        </div>
    );
}