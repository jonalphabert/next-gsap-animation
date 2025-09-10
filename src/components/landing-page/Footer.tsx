// components/Footer.js
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Footer = () => {
  const footerRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(footerRef.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }, []);

  return (
    <footer 
      ref={footerRef} 
      id="contact" 
      className="bg-[rgba(2,12,37,0.9)] py-10 text-center"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-3xl font-bold text-[#64ffda] mb-5">GSAP Journey</h2>
        <ul className="flex justify-center space-x-6 list-none mb-6">
          <li><a href="#" className="text-[#ccd6f6] text-xl transition-colors hover:text-[#64ffda]"><i className="fab fa-github"></i></a></li>
          <li><a href="#" className="text-[#ccd6f6] text-xl transition-colors hover:text-[#64ffda]"><i className="fab fa-codepen"></i></a></li>
          <li><a href="#" className="text-[#ccd6f6] text-xl transition-colors hover:text-[#64ffda]"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="text-[#ccd6f6] text-xl transition-colors hover:text-[#64ffda]"><i className="fab fa-linkedin"></i></a></li>
        </ul>
        <p className="text-[#8892b0] text-sm">© 2023 Progress Harian Belajar GSAP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;