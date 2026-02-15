
import React from 'react';

const HeroBanner: React.FC = () => {
  /**
   * The user-provided panoramic strip image showing multiple rooms.
   */
  const heroImageUrl = "https://format.creatorcdn.com/17f4dd0c-ab79-4920-a5cd-782f5e8ab91d/0/0/0/0,0,3200,410,3200,1200/0-0-0/2699ee1e-db6a-4f60-b867-0cceb5eb1dfa/1/1/Untitled-1.jpg?fjkss=exp=2086619761~hmac=86a32805a467af9e7ac31a4d0c88f89fa157ae7d789d40998af292a35e8614ef";

  return (
    <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden bg-[#0b0f1a]">
      {/* 
        PANORAMIC STRIP CONTAINER 
        Slowly pans across the wide strip of architectural renders.
      */}
      <style>
        {`
          @keyframes slowPan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-pan {
            animation: slowPan 40s ease-in-out infinite;
            background-size: cover;
          }
          /* Ensure the image stretches enough to actually pan on wider screens */
          @media (min-width: 1200px) {
            .animate-pan {
              background-size: 200% auto;
            }
          }
        `}
      </style>

      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat animate-pan transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${heroImageUrl})`,
          backgroundPosition: 'left center'
        }}
      />
      
      {/* Sophisticated Darkening Overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#111827]" />
      
      {/* PRECISION IN VISION Typography Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 select-none pointer-events-none">
        
        {/* Subtitle */}
        <p className="text-[#00c2cb] text-[10px] md:text-[14px] tracking-[0.5em] uppercase mb-4 font-semibold drop-shadow-md animate-in fade-in slide-in-from-top duration-1000">
          Architectural Design Portfolio
        </p>

        {/* Main Title */}
        <h2 className="text-white text-5xl md:text-8xl font-light tracking-tight flex flex-col md:flex-row items-center gap-x-6 drop-shadow-2xl animate-in fade-in zoom-in duration-1000">
          <span>PRECISION IN</span>
          <span className="italic font-normal">VISION</span>
        </h2>

        {/* Signature Line */}
        <div className="mt-8 w-16 md:w-24 h-[3px] bg-[#00c2cb] rounded-full shadow-[0_0_15px_rgba(0,194,203,0.6)] animate-in slide-in-from-bottom duration-1000 delay-300"></div>
      </div>

      {/* Edge Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
    </div>
  );
};

export default HeroBanner;
