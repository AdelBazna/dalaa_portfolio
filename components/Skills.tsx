
import React, { useEffect, useRef, useState } from 'react';
import { Box, Layers, Cpu, PenTool, Layout, Component } from 'lucide-react';

const Skills: React.FC = () => {
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

  const technicalTools = [
    { 
      name: "AutoCAD", 
      logo: "https://img.icons8.com/color/48/autodesk-autocad.png",
      fallbackIcon: <PenTool size={18} />
    },
    { 
      name: "Revit", 
      logo: "https://img.icons8.com/color/48/autodesk-revit.png",
      fallbackIcon: <Layers size={18} />
    },
    { 
      name: "Sketchup", 
      logo: "https://img.icons8.com/color/48/sketchup.png",
      fallbackIcon: <Box size={18} />
    },
    { 
      name: "3D max", 
      logo: "https://img.icons8.com/color/48/3ds-max.png",
      fallbackIcon: <Component size={18} />
    },
    { 
      name: "VRay", 
      logo: "https://img.icons8.com/color/48/v-ray.png",
      fallbackIcon: <Cpu size={18} />
    },
    { 
      name: "Lumion", 
      logo: "https://img.icons8.com/color/48/lumion.png",
      fallbackIcon: <Layout size={18} />
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="max-w-6xl mx-auto px-6">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-extralight text-center text-white mb-20 tracking-tight uppercase">
          Expertise & Skills
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {[
          {
            title: "Design & Drafting Tools",
            content: "Proficient in 2D and 3D architectural software. Able to produce accurate technical drawings, clean layouts, and visually engaging 3D presentations for various project stages."
          },
          {
            title: "Visualization & Presentation",
            content: "Capable of producing high-quality visual outputs and presentation materials. Skilled in preparing client-ready files that combine plans, renders, and diagrams to communicate design ideas clearly."
          },
          {
            title: "Concept Development & Space Planning",
            content: "Experienced in developing functional and creative architectural concepts, with strong skills in spatial organization, furniture layout, and adapting designs based on client needs."
          },
          {
            title: "Teamwork & Communication",
            content: "Comfortable working collaboratively within multidisciplinary teams. Able to communicate design ideas, follow feedback, and coordinate with engineers to ensure project consistency."
          }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className={`p-10 bg-[#1e293b]/30 backdrop-blur-sm rounded-sm border border-white/5 hover:border-teal-500/30 transition-all duration-500 group relative overflow-hidden`}
            style={{ 
              transitionDelay: `${idx * 150 + 200}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="absolute top-0 left-0 w-0 h-px bg-teal-500 transition-all duration-700 group-hover:w-full"></div>
            <h3 className="text-xl font-light text-white mb-5 group-hover:text-teal-400 transition-colors">{item.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      <div className={`text-center transition-all duration-1000 delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-teal-400 mb-10 font-bold">Technical Software Proficiency</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {technicalTools.map((tool, idx) => (
            <ToolBadge key={tool.name} tool={tool} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Fix: Use React.FC to define the component, which correctly handles standard React props like 'key'
const ToolBadge: React.FC<{ tool: any; idx: number }> = ({ tool, idx }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className={`flex items-center gap-4 px-6 py-3 bg-[#0b0f1a] border border-gray-800 rounded-sm text-gray-300 text-xs tracking-widest font-medium hover:bg-teal-500/10 hover:text-white hover:border-teal-500/50 transition-all duration-300 cursor-default shadow-xl group`}
      style={{ transitionDelay: `${idx * 100 + 1000}ms` }}
    >
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        {!imgError ? (
          <img 
            src={tool.logo} 
            alt={`${tool.name} logo`} 
            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-teal-500/50 group-hover:text-teal-400 transition-colors">
            {tool.fallbackIcon}
          </div>
        )}
      </div>
      <span className="group-hover:translate-x-1 transition-transform">{tool.name}</span>
    </div>
  );
};

export default Skills;
