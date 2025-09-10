// components/ProjectCard.js
// Project Card Component
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ProjectCard = ({ project, index } : { project: any, index: number }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(cardRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      delay: index * 0.1
    });
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="bg-[rgba(2,12,37,0.5)] rounded-xl overflow-hidden transition-all duration-300 border border-[rgba(100,255,218,0.1)] hover:-translate-y-3 hover:shadow-2xl hover:border-[#64ffda]"
    >
      <div className="h-48 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] flex items-center justify-center">
        <i className={`${project.icon} text-5xl text-white`}></i>
      </div>
      <div className="p-5">
        <span className="block text-[#64ffda] text-sm mb-4">{project.date}</span>
        <h3 className="text-xl font-semibold mb-3 text-[#ccd6f6]">{project.title}</h3>
        <p className="text-[#8892b0] text-sm mb-4">{project.description}</p>
        <a 
          href={project.link} 
          className="inline-block px-5 py-2 border border-[#64ffda] text-[#64ffda] rounded text-sm font-medium transition-all hover:bg-[rgba(100,255,218,0.1)]"
        >
          Lihat Detail
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;