
import React, { useEffect, useRef, useState } from 'react';

const Experience: React.FC = () => {
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

  const roles = [
    {
      title: "Architectural Designer",
      company: "Eng. Waseem Al-khatib",
      period: "11/2024 – 11/2025 | Damascus, Syria",
      details: [
        "Created and developed 2D architectural plans with efficient space planning.",
        "Built 3D models and adjusted perspectives for visual accuracy and client presentations.",
        "Prepared comprehensive presentation files combining renderings, plans, and design visuals.",
        "Collaborated with the design team to ensure coordination across all project phases.",
        "Prepared project documents and progress reports."
      ]
    },
    {
      title: "Architectural Intern",
      company: "Eng. Amer Bazna",
      period: "08/2024 – 10/2024 | Damascus, Syria",
      details: [
        "Updated CAD drawings based on client and supervisor feedback.",
        "Created 3D visualizations and rendered architectural proposals.",
        "Participated in the conceptual design phase of residential and commercial projects."
      ]
    },
    {
      title: "Private Architecture Mentor",
      company: "Self-Employed",
      period: "05/2023 – Present | Damascus, Syria",
      details: [
        "Provided personalized support for architecture students in developing academic design projects.",
        "Trained students on essential architecture software like AutoCAD, Revit, and Photoshop.",
        "Helped improve students’ technical drawing skills and understanding of architectural standards."
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="max-w-5xl mx-auto px-6">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-extralight text-center text-white mb-20 tracking-tight uppercase">
          Professional Experience
        </h2>
      </div>
      
      <div className="space-y-20 relative">
        {/* Animated Drawing Line */}
        <div className={`absolute left-0 md:left-[23%] top-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent transition-all duration-[2000ms] ease-out origin-top ${isVisible ? 'h-full scale-y-100' : 'h-0 scale-y-0'}`}></div>

        {roles.map((role, idx) => (
          <div 
            key={idx} 
            className={`relative pl-8 md:pl-0 transition-all duration-700 ease-out`}
            style={{ 
              transitionDelay: `${idx * 200 + 300}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
            }}
          >
            <div className="md:grid md:grid-cols-4 gap-12">
              <div className="md:col-span-1 mb-4 md:mb-0 md:text-right relative">
                <p className="text-teal-400 text-[10px] font-bold tracking-[0.2em] uppercase">{role.period}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-light text-white tracking-tight">{role.title}</h3>
                <p className="text-teal-500/70 mb-6 italic text-sm font-light">{role.company}</p>
                <ul className="space-y-4">
                  {role.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-gray-400 flex items-start gap-4 text-sm leading-relaxed font-light">
                      <span className="w-1.5 h-px bg-teal-500/50 mt-3 shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
