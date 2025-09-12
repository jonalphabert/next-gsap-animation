export default function AppleNavbar () {
    return (
        <nav className="bg-[#161617cc] sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-center bg-black/60 py-1">
                <div className="text-center text-gray-400 text-sm ">This project just for GSAP learning purposes that clone the Apple website. The code is <a className="cursor-pointer underline" href="https://github.com/jonalphabert/next-gsap-animation/tree/main/src/app/(day3)" target="_blank">here</a></div>
            </div>
            <div className="flex items-center justify-between gap-16 mx-auto font-semibold font-open-sans px-8 w-screen lg:w-fit">
                <div className="text-gray-300 font-bold text-xs">
                    <svg height="44" viewBox="0 0 14 44" width="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
                </div>
                <div className="nav-menu lg:flex items-center gap-8 hidden">
                    <div className="text-gray-400 text-xs cursor-pointer">Store</div>
                    <div className="text-gray-400 text-xs cursor-pointer">Mac</div>
                    <div className="text-gray-400 text-xs cursor-pointer">iPad</div>
                    <div className="text-gray-400 text-xs cursor-pointer">iPhone</div>
                    <div className="text-gray-400 text-xs cursor-pointer">Watch</div>
                    <div className="text-gray-400 text-xs cursor-pointer">AirPods</div>
                    <div className="text-gray-400 text-xs cursor-pointer">TV&Home</div>
                    <div className="text-gray-400 text-xs cursor-pointer">Entertainment</div>
                    <div className="text-gray-400 text-xs cursor-pointer">Accessories</div>
                    <div className="text-gray-400 text-xs cursor-pointer">Support</div>
                </div>
                <div className="flex justify-center items-center gap-8">   
                    <div className="text-gray-300 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                    </div>
                    <div className="text-gray-300 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handbag-icon lucide-handbag"><path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"/><path d="M8 11V6a4 4 0 0 1 8 0v5"/></svg>
                    </div>
                    <div className="text-gray-300 text-xs lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                    </div>

                </div>
            </div>
        </nav>
    )
}