
import React from 'react';
import { Instagram, Linkedin, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140; // Approximate height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full bg-[#111827]/95 py-8 flex flex-col items-center gap-6 sticky top-0 z-[100] border-b border-gray-900/50 backdrop-blur-md">
      {/* Name Title */}
      <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-white text-center px-4">
        Dalaa Bazna's Portfolio
      </h1>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-medium tracking-wide">
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className="text-gray-300 hover:text-teal-400 transition-colors uppercase decoration-teal-400 decoration-2 underline-offset-8 hover:underline"
        >
          About Me
        </a>
        <a 
          href="#academic" 
          onClick={(e) => scrollToSection(e, 'academic')}
          className="text-gray-300 hover:text-teal-400 transition-colors uppercase decoration-teal-400 decoration-2 underline-offset-8 hover:underline"
        >
          Academic Projects
        </a>
        
        {/* Projects Dropdown Container */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 text-gray-300 group-hover:text-teal-400 uppercase transition-colors pb-4 -mb-4">
            Projects <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </div>
          
          {/* Projects Dropdown Menu */}
          {/* 
            - Removed mt-1 to prevent hover gap
            - Added invisible pt-4 as a "bridge" to keep the menu open while moving the cursor
          */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-out z-[110]">
            <div className="bg-[#1f2937] shadow-2xl rounded-md overflow-hidden border border-gray-700">
              {[
                { label: 'Dressing Room', id: 'dressing-room' },
                { label: 'Kitchen', id: 'kitchen' },
                { label: 'Girls Bedroom', id: 'girls-bedroom' },
                { label: 'Beauty Salon', id: 'beauty-salon' },
                { label: 'Exhibition Booth', id: 'exhibition-booth' }
              ].map((proj) => (
                <a 
                  key={proj.id}
                  href={`#${proj.id}`}
                  onClick={(e) => scrollToSection(e, proj.id)}
                  className="block px-4 py-3 text-xs tracking-widest uppercase text-gray-300 hover:bg-teal-500 hover:text-white transition-colors border-b border-gray-700/50 last:border-0"
                >
                  {proj.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="px-5 py-2 border border-teal-500/30 text-teal-400 hover:bg-teal-500 hover:text-white transition-all rounded uppercase text-xs tracking-widest font-semibold"
        >
          Get In Touch
        </a>
      </nav>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-gray-400">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Instagram size={18} />
        </a>
        <a href="https://linkedin.com/in/dalaa-bazna-410456329" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </header>
  );
};

export default Header;
