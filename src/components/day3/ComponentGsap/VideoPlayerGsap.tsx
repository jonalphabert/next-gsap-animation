"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface VideoPlayerGsapProps {
  src: string;
  classVideo?: string;
  classContainer?: string;
  loop?: boolean;
  showControl?: boolean;
}

export default function VideoPlayerGsap({ src, classVideo, loop=true, showControl=false, classContainer }: VideoPlayerGsapProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          if (videoRef.current && !isPlaying) {
            console.log("play", isPlaying);
            videoRef.current.play();
            setIsPlaying(true);
          }
        },
        onLeave: () => {
          setIsPlaying(true);
        },
      },
    });
  });

  const handleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={`${classContainer} video-player-gsap mx-auto`}>
        {showControl && <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex justify-center items-center bg-gray-600 cursor-pointer z-20" onClick={handleVideo}>
            {!isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause-icon lucide-pause"><rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/></svg>}
        </div>}
      <video
        ref={videoRef}
        className={`${classVideo} block object-cover`}
        src={src}
        muted
        playsInline
        loop={loop}
      />
    </div>
  );
}
