
import React, { useEffect, useState } from 'react';

interface IntroLoadingProps {
  onComplete: () => void;
}

const IntroLoading: React.FC<IntroLoadingProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reveal text after a short delay
    const contentTimer = setTimeout(() => setShowContent(true), 500);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Start exit animation after 4 seconds
    const exitTimer = setTimeout(() => setIsExiting(true), 4200);
    
    // Final cleanup and reveal app
    const finishTimer = setTimeout(() => onComplete(), 5200);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#0b0f1a] flex items-center justify-center transition-all duration-[1200ms] ease-in-out ${isExiting ? 'opacity-0 scale-[1.05] pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#00c2cb 1px, transparent 1px), linear-gradient(90deg, #00c2cb 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Scanning Line Animation */}
      <div className={`absolute left-0 w-full h-px bg-teal-500/40 shadow-[0_0_15px_rgba(0,194,203,0.5)] transition-all duration-[4500ms] linear top-0 ${showContent ? 'translate-y-[100vh]' : 'translate-y-0'}`} />

      <div className="relative flex flex-col items-center max-w-4xl px-6">
        
        {/* Animated UI Brackets */}
        <div className={`absolute -top-16 -left-16 w-12 h-12 border-t border-l border-teal-500/30 transition-all duration-1000 ease-out ${showContent ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-8 -translate-y-8 opacity-0'}`}></div>
        <div className={`absolute -bottom-16 -right-16 w-12 h-12 border-b border-r border-teal-500/30 transition-all duration-1000 ease-out ${showContent ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-8 translate-y-8 opacity-0'}`}></div>

        <div className="text-center z-10">
          <p className={`text-teal-400 text-[9px] md:text-[11px] tracking-[0.8em] uppercase font-bold mb-6 transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Welcome To
          </p>
          
          <div className="relative overflow-hidden mb-12">
            <h1 className={`text-white text-3xl md:text-5xl lg:text-7xl tracking-[0.15em] uppercase font-extralight transition-all duration-[1200ms] delay-300 ease-out ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              Dalaa Bazna <span className="text-teal-400 font-normal italic">Experience</span>
            </h1>
            
            {/* Loading Bar Underline */}
            <div className={`mt-8 relative w-full h-[1px] bg-white/10 mx-auto transition-all duration-[2000ms] delay-500 ease-in-out ${showContent ? 'w-full' : 'w-0'}`}>
              <div 
                className="absolute top-0 left-0 h-full bg-teal-500 shadow-[0_0_10px_rgba(0,194,203,0.8)]"
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
              ></div>
            </div>
          </div>

          <div className={`flex flex-col items-center gap-2 font-mono text-[8px] tracking-[0.4em] text-teal-500/50 uppercase transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <span className="animate-pulse">Initializing Architectural Engine...</span>
            <span>Data Buffer: {progress}%</span>
          </div>
        </div>

        {/* Floating Metadata Information */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[7px] font-mono text-white/10 tracking-[0.6em] uppercase">
          <span>Scale: 1:1</span>
          <span>Precision: HIGH_RES</span>
        </div>
      </div>
      
      {/* Corner UI Details */}
      <div className="absolute top-10 left-10 text-[8px] text-white/20 font-mono tracking-widest hidden md:block">
        PORTFOLIO_VER_2.1
      </div>
      <div className="absolute top-10 right-10 text-[8px] text-white/20 font-mono tracking-widest text-right hidden md:block">
        ENGINE: REACT_19
      </div>
      <div className="absolute bottom-10 left-10 text-[8px] text-white/20 font-mono tracking-widest">
        &copy; 2025 DALAA_BAZNA
      </div>
      <div className="absolute bottom-10 right-10 text-[8px] text-teal-500/20 font-mono tracking-widest text-right">
        STATUS: LIVE_VISUAL_FEED
      </div>
    </div>
  );
};

export default IntroLoading;
