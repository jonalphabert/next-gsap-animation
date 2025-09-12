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

export default function dayTwoPage() {
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