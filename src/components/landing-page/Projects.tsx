// components/Projects.js
"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { project } from '../../../types/project';

const Projects = ({ projects } : { projects: project[] }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(titleRef.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-16">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 ref={titleRef} className="text-3xl md:text-4xl text-center mb-10 text-[#ccd6f6]">
          Project <span className="text-[#64ffda]">Harian</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project : project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;