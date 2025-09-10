import Image from "next/image";

export default function HeroSectionGSAP () {
    return <>
        <section className="flex flex-col items-center pt-24">
            <div className="text-center flex gap-4">
                {"Upscale Your Images,".split(" ").map((char, index) => <span key={index} className={`text-7xl font-extrabold mb-4 hero-cta ${index === 2 ? "text-blue-600" : ""}`}>{char}</span>)}
            </div>
            <div className="text-center flex gap-4 mb-8">
                {"Not Your Pixels.".split(" ").map((char, index) => <span key={index} className="text-7xl font-extrabold mb-4 hero-cta">{char}</span>)}
            </div>
            <p className="text-center text-xl w-4xl mb-8">Transform your low-resolution photos into stunning, high-definition masterpieces instantly with our powerful AI. Perfect for photographers, designers, and everyone in between. And all this magic just on <strong className="text-blue-600">one click!</strong></p>
            <div className="flex justify-center items-center gap-4 mb-24">
                <div className="cursor-pointer text-white bg-blue-800 rounded-md px-8 py-2">Start Free Trial</div>
                <div className="cursor-pointer text-white underline rounded-md px-8 py-2">See how this work &rarr;</div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="relative left-12">
                    <Image src="/blurred-image.png" alt="hero-image" width={300} height={300} />
                </div>
                <div>
                    <Image src="/upscale-image.png" alt="hero-image" width={600} height={600} />
                </div>
            </div>
        </section>
    </>
}