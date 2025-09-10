// components/Header.js
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'power3.out'
    });
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="fixed top-0 w-full py-5 z-50 bg-[rgba(2,12,37,0.9)] backdrop-blur-md"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-bold text-[#64ffda]">GSAP Journey</div>
          <ul className="hidden md:flex space-x-8 list-none">
            <li><a href="#home" className="text-[#ccd6f6] font-medium hover:text-[#64ffda] transition-colors">Home</a></li>
            <li><a href="#projects" className="text-[#ccd6f6] font-medium hover:text-[#64ffda] transition-colors">Projects</a></li>
            <li><a href="#about" className="text-[#ccd6f6] font-medium hover:text-[#64ffda] transition-colors">About</a></li>
            <li><a href="#contact" className="text-[#ccd6f6] font-medium hover:text-[#64ffda] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;