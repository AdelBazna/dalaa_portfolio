
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import IntroLoading from './components/IntroLoading';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during intro to ensure focus on animations
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <IntroLoading onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-[#0b0f1a] text-gray-100 flex flex-col transition-all duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Header />
        
        <main className="flex-grow">
          <HeroBanner />
          
          <div className="bg-[#0b0f1a]">
            <AboutMe />
          </div>

          <div className="bg-[#0f172a] py-20">
            <Experience />
          </div>

          <div className="py-20 bg-[#0b0f1a]">
            <Skills />
          </div>

          {/* Academic Projects Section */}
          <div className="bg-[#0f172a]">
            <ProjectSection 
              id="academic" 
              title="Academic Projects" 
              subtitle="Architectural Studies & Research" 
            />
          </div>

          {/* Individual Project Categories */}
          <div id="projects-container">
            <ProjectSection id="dressing-room" title="Dressing Room" subtitle="Interior Design" />
            <ProjectSection id="kitchen" title="Kitchen" subtitle="Interior Design" />
            <ProjectSection id="girls-bedroom" title="Girls Bedroom" subtitle="Interior Design" />
            <ProjectSection id="beauty-salon" title="Beauty Salon" subtitle="Commercial Interior" />
            <ProjectSection id="exhibition-booth" title="Exhibition Booth" subtitle="Event Design" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
