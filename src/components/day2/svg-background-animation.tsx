// SVG Background Animation Component
export default function SVGBackgroundAnimation() {
    return <>
        <div className='absolute bottom-0 left-0 w-[240px] sm:w-[480px] block -z-10'>
            <svg width="729" height="767" viewBox="0 0 729 767" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g id="Frame 5">
                    <path id="path-1" d="M686.581 778.493L684.328 441.001C689.486 414.799 680.904 362.522 605.305 363.027C529.707 363.531 343.478 364.774 259.813 365.333C237.647 365.481 193.226 352.477 192.871 299.278C192.516 246.08 192.06 177.781 191.876 150.282C187.916 131.308 170.896 93.4205 134.497 93.6635C98.0977 93.9065 26.3326 94.3855 -4.99999 94.5947"
                    stroke="white" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                    <g id="ball-1" filter="url(#filter0_f_31_80)">
                    <circle r="8" fill="#D9D9D9">
                        <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-1"/>
                        </animateMotion>
                    </circle>
                    </g>
                </g>

                <defs>
                    <filter id="filter0_f_31_80" x="-2000" y="-2000" width="4000" height="4000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3.4" result="effect1_foregroundBlur_31_80"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <div className='absolute bottom-0 right-2 sm:right-4 md:right-8 lg:right-24 xl:right-48 h-[128px] sm:h-[240px]md:h-[320px] lg:h-[480px] xl:h-[720px] block -z-10'>
            <svg width="515" height="939" viewBox="0 0 515 939" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g id="Frame 6">
                    <path id="path-2" d="M474.941 944V401.176C475.636 390.982 470.49 370.595 444.343 370.595C418.195 370.595 308.737 370.595 257.276 370.595C248.468 370.131 230.851 364.2 230.851 344.183C230.851 324.166 230.851 159.303 230.851 79.3741C230.851 65.9367 225.983 39.062 206.511 39.062C187.039 39.062 103.358 39.062 63.9512 39.062C56.3017 38.3669 40.8635 43.2322 40.3072 68.2535C39.7508 93.2749 40.0754 662.51 40.3072 944"
                    stroke="white" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                    <g id="ball-2" filter="url(#filter0_f_32_81)">
                    <circle r="8" fill="#D9D9D9">
                        <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-2"/>
                        </animateMotion>
                    </circle>
                    </g>
                </g>

                <defs>
                    <filter id="filter0_f_32_81" x="-2000" y="-2000" width="4000" height="4000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="4.25" result="effect1_foregroundBlur_32_81"/>
                    </filter>
                </defs>
            </svg>
        </div>

        <div className='absolute top-0 right-0 w-[240px] sm:w-[480px] md:w-[720px] lg:w-[960px] xl:w-[1280px] block -z-10'>
            <svg width="1957" height="849" viewBox="0 0 1957 849" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g id="Frame 7">
                    <path id="path-3" d="M1957 421.373H912.5C901 421.972 878 429.01 878 452.372C878 475.734 878 683.747 878 784.833C880.167 796.963 877.5 821.224 849.5 821.224H347.5C333.833 823.62 306.5 821.853 306.5 795.615C306.5 769.378 306.5 661.882 306.5 611.414C307.333 603.477 303.3 587.603 280.5 587.603C257.7 587.603 141 587.603 85.5 587.603C76 587.753 57 583.559 57 565.589C57 547.618 57 223.693 57 4"
                    stroke="white" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                    <g id="ball-3" filter="url(#filter0_f_33_83)">
                    <circle r="8" fill="#D9D9D9">
                        <animateMotion dur="20s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#path-3"/>
                        </animateMotion>
                    </circle>
                    </g>
                </g>

                <defs>
                    <filter id="filter0_f_33_83" x="-2000" y="-2000" width="5000" height="5000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3.4" result="effect1_foregroundBlur_33_83"/>
                    </filter>
                </defs>
            </svg>
        </div>
    </>
}