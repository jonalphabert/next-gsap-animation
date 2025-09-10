import BoxAnimation from "@/components/day1/box-animation";
import ButtonInteractive from "@/components/day1/button-iteractive";
import StaggeredAnimation from "@/components/day1/staggered-animation";

export default function dayOnePage() {
    return (
        <div>
            <h1 className="text-5xl font-semibold mb-6  px-24 py-12">Day One - Basic GSAP Animation</h1>

            <div>
                <BoxAnimation />
                <StaggeredAnimation />
                <ButtonInteractive />
            </div>
        </div>
    )
}