
import React, { useEffect, useRef, useState } from 'react';

const AboutMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`max-w-4xl mx-auto px-6 py-24 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="inline-block mb-6 overflow-hidden">
        <h2 className="text-5xl md:text-7xl font-extralight text-white tracking-tighter uppercase">
          About Me
        </h2>
        <div className={`h-1 bg-[#00c2cb] transition-all duration-1000 delay-500 ${isVisible ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      <div className="space-y-8 text-gray-300 leading-relaxed text-lg font-light max-w-3xl mx-auto mt-12">
        <p className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          An Architect working in exterior and interior design, with experience in technical drawings and 3D visualization. 
          I focus on clarity and precision in translating design ideas into well-considered, buildable solutions, 
          while continuously developing my professional skills and practical experience.
        </p>
        <p className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          I have worked on a wide range of local and international projects, including residential and commercial designs, 
          delivering solutions tailored to different contexts and client needs. My experience covers multiple architectural 
          and interior design styles, allowing me to adapt concepts from contemporary and minimal to more classic and expressive approaches.
        </p>
      </div>

      <div className={`mt-16 flex justify-center gap-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href="#academic" 
          onClick={(e) => scrollToSection(e, 'academic')}
          className="px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-sm transition-all uppercase text-[10px] tracking-[0.3em] font-bold shadow-lg shadow-teal-900/20"
        >
          View Portfolio
        </a>
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="px-10 py-4 border border-gray-700 hover:border-teal-500 text-gray-300 hover:text-teal-400 rounded-sm transition-all uppercase text-[10px] tracking-[0.3em] font-bold"
        >
          Let's Talk
        </a>
      </div>

      <div className={`mt-24 border-t border-gray-800/50 pt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h3 className="text-teal-400 uppercase tracking-[0.4em] text-[10px] mb-6 font-bold">Education</h3>
        <p className="text-2xl font-light text-white mb-1">Bachelor of Architecture</p>
        <p className="text-gray-400 font-light">Arab International University</p>
        <p className="text-gray-500 text-[11px] uppercase tracking-widest mt-3">09/2020 – 06/2025 | Damascus, Syria</p>
      </div>
    </section>
  );
};

export default AboutMe;
