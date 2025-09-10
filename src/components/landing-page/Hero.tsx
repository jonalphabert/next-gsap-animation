// components/Hero.js
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    })
    .from(textRef.current, {
      duration: 1.5,
      y: 30,
      opacity: 0,
      ease: 'power3.out'
    }, '-=1')
    .from(buttonRef.current, {
      duration: 1.5,
      y: 30,
      opacity: 0,
      ease: 'power3.out'
    }, '-=1');
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="max-w-4xl">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-5xl lg:text-6xl mb-5 text-[#ccd6f6]"
          >
            Progress Harian <span className="block text-[#64ffda]">Belajar GSAP</span>
          </h1>
          <p 
            ref={textRef} 
            className="text-lg md:text-xl mb-8 text-[#8892b0] max-w-2xl"
          >
            Selamat datang di dokumentasi perjalanan belajar GSAP saya. Di sini Anda dapat melihat perkembangan skill animasi saya dari waktu ke waktu melalui berbagai project yang telah dibuat.
          </p>
          <a 
            ref={buttonRef} 
            href="#projects" 
            className="inline-block px-7 py-3 border border-[#64ffda] text-[#64ffda] rounded font-medium transition-all hover:bg-[rgba(100,255,218,0.1)]"
          >
            Lihat Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;