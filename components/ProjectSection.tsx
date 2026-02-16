
import React, { useState, useEffect, useRef } from 'react';
import { X, Maximize2, ArrowRight } from 'lucide-react';

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id, title, subtitle }: ProjectSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Project Images Data
  const projectImages: Record<string, string[]> = {
    'academic': [
      '/11.png',
      '/22.png',
      '/33.png',
      '/44.png',
      '/55.png'
    ],
    'dressing-room': [
      '/1.png', 
      '/2(2).png',
      '/3.png',
      '/4.png'
    ],
    'kitchen': [
      '/k1.png',
      '/k2.png',
      // Pic 3 deleted as requested
      '/k3.png',
      '/k4.png',
      '/k5.png',
      '/k6.png'
    ],
    'girls-bedroom': [
      '/g1.png',
      '/g2.png',
      '/g3.png',
      '/g4.png',
      '/g5.png'
    ],
    'beauty-salon': [
      '/b1.png',
      '/b2.png',
      '/b3.png',
      '/b4.png',
      '/b5.png',
      '/b6.png',
      '/b7.png',
      '/b8.png',
      '/b9.png',
      '/b10.png'
    ],
    'exhibition-booth': [
      '/e1.png',
      '/e2.png',
      '/e3.png',
      '/e4.png',
      '/e5.png'
    ]
  };

  const isDressingRoom = id === 'dressing-room';
  const isKitchen = id === 'kitchen';
  const isBeautySalon = id === 'beauty-salon';
  const isGirlsBedroom = id === 'girls-bedroom';
  const isExhibitionBooth = id === 'exhibition-booth';
  const isAcademic = id === 'academic';

  const currentImages = projectImages[id] || [];

  const getGridCols = () => {
    if (isAcademic || isBeautySalon) return 'lg:grid-cols-5';
    if (isDressingRoom || isKitchen) return 'lg:grid-cols-4';
    return 'lg:grid-cols-3';
  };

  const dressingRoomDescription = (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base border-l border-teal-500/30 pl-6">
        <p>
          A 15 m² dressing room in Al-Mazzeh was designed to balance functionality and visual comfort. 
          Grey wood finishes create a calm, warm atmosphere, complemented by black aluminum doors with smoked glass for a modern, elegant touch and added privacy. 
          Carefully integrated medium lighting enhances material textures without visual strain, while efficiently organized storage maximizes space and ensures smooth circulation. 
          The result is a contemporary, refined space that combines practicality, simplicity, and subtle luxury for everyday use.
        </p>
      </div>
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base text-right border-r border-teal-500/30 pr-6" dir="rtl">
        <p>
          غرفة ملابس بمساحة 15 م² في منطقة المزة صُممت لتحقيق توازن بين العملية والراحة البصرية. 
          اعتمد التصميم على الخشب الرمادي لخلق أجواء هادئة ودافئة، مع أبواب ألمنيوم سوداء وزجاج فيميه لإضفاء طابع عصري أنيق مع الحفاظ على الخصوصية. 
          إضاءة متوسطة ومدروسة أبرزت تفاصيل الخامات دون إجهاد بصري، فيما تم تنظيم وحدات التخزين بكفاءة لضمان سهولة الحركة والاستفادة القصوى من المساحة، ليعكس التصميم طابعاً حديثاً يجمع بين البساطة والفخامة الهادئة.
        </p>
      </div>
    </div>
  );

  const kitchenDescription = (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base border-l border-teal-500/30 pl-6">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">Modern Kitchen | Damascus</h3>
        <p>
          This modern kitchen design is defined by a bold, high-contrast palette of brown and black, creating a refined balance between warmth and sophistication. 
          The project places a strong emphasis on user comfort, functionality, and efficient spatial organization. 
          The contrast between dark tones and rich textures adds depth and character, resulting in a kitchen that is modern, visually striking, and practical.
        </p>
      </div>
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base text-right border-r border-teal-500/30 pr-6" dir="rtl">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">مطبخ عصري | دمشق</h3>
        <p>
          تم تصميم وتنفيذ المشروع في دمشق – دمر، مع تركيز واضح على راحة المستخدم، والكفاءة الوظيفية، والتنظيم المدروس للمساحة. 
          يضيف التباين بين الألوان الداكنة والملمس الغني للخامات عمقاً وشخصية للمطبخ، ليكون فراغاً عصرياً وجذاباً، وفي الوقت نفسه مريحاً وعملياً ومناسباً للاستخدام اليومي.
        </p>
      </div>
    </div>
  );

  const girlsBedroomDescription = (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base border-l border-teal-500/30 pl-6">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">Girls Bedroom | Damascus</h3>
        <p>
          This 16 m² bedroom was designed with a focus on creating a comfortable and functional environment. 
          The design features calm, warm wall and floor colors as the base, complemented by soft pink and white accents to add a sense of liveliness and femininity without overwhelming the space.
        </p>
      </div>
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base text-right border-r border-teal-500/30 pr-6" dir="rtl">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">غرفة بنات | دمشق</h3>
        <p>
          تم تصميم هذه الغرفة بمساحة 16 م² في مشروع دمر، مع التركيز على خلق بيئة مريحة وعملية. 
          تميز التصميم باستخدام الألوان الهادئة والدافئة كلون أساسي، مع لمسات من الوردي الباهت والأبيض لإضفاء جو من الحيوية والأنوثة.
        </p>
      </div>
    </div>
  );

  const beautySalonDescription = (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base border-l border-teal-500/30 pl-6">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">Beauty Salon | Qatar</h3>
        <p>
          A fully integrated space comprising multiple functional areas unified under the same contemporary design language. 
          A palette of warm, neutral tones and light wood finishes was used consistently throughout to ensure visual continuity and a calm, inviting atmosphere.
        </p>
      </div>
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base text-right border-r border-teal-500/30 pr-6" dir="rtl">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">صالون تجميل | قطر</h3>
        <p>
          تم تصميم الصالون كمساحة متكاملة بالكامل تضم عدة مناطق وظيفية موحدة تحت نفس لغة التصميم المعاصرة. 
          تم استخدام لوحة ألوان دافئة ومحايدة مع تشطيبات خشبية فاتحة بشكل متسق لضمان استمرارية بصرية وأجواء هادئة وجذابة.
        </p>
      </div>
    </div>
  );

  const exhibitionBoothDescription = (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base border-l border-teal-500/30 pl-6">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">Exhibition Booth | Damascus International Fair</h3>
        <p>
          Designed for a construction company, this booth embraces a modern aesthetic. 
          Clean, sharp lines convey a sense of organization, while structural accents add visual depth and highlight the company’s engineering expertise.
        </p>
      </div>
      <div className="text-gray-300 font-light leading-relaxed text-sm md:text-base text-right border-r border-teal-500/30 pr-6" dir="rtl">
        <h3 className="text-teal-400 font-medium mb-4 uppercase tracking-widest text-xs">جناح معرض | معرض دمشق الدولي</h3>
        <p>
          تم تصميم هذا الجناح لشركة مقاولات بجمالية عصرية حديثة. 
          تنقل الخطوط النظيفة إحساسًا بالتنظيم، بينما تضيف التفاصيل الهيكلية عمقًا بصريًا وتبرز خبرة الشركة الهندسية.
        </p>
      </div>
    </div>
  );

  const renderDescription = () => {
    if (isKitchen) return kitchenDescription;
    if (isDressingRoom) return dressingRoomDescription;
    if (isGirlsBedroom) return girlsBedroomDescription;
    if (isBeautySalon) return beautySalonDescription;
    if (isExhibitionBooth) return exhibitionBoothDescription;
    return null;
  };

  const hasDescription = isKitchen || isDressingRoom || isGirlsBedroom || isBeautySalon || isExhibitionBooth;

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-32 border-b border-white/5 last:border-0 overflow-hidden transition-all duration-1000 ${isAcademic ? 'bg-[#0f172a]' : 'bg-[#0b0f1a]'}`}
    >
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tighter uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="text-teal-500 uppercase tracking-[0.4em] text-[10px] mt-6 font-bold flex items-center gap-4">
                <span className="w-12 h-px bg-teal-500"></span> {subtitle}
              </p>
            )}
          </div>
          <div className="hidden md:block w-40 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
        </div>
        
        {/* Description Section (Outside Pictures) */}
        {hasDescription && (
          <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {renderDescription()}
          </div>
        )}

        {/* Image Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${getGridCols()} gap-4 md:gap-8`}>
          {currentImages.map((imgUrl, idx) => (
            <div 
              key={idx} 
              className={`aspect-[3/4] md:aspect-square lg:aspect-[3/4] bg-[#1e293b] rounded-sm overflow-hidden relative group shadow-2xl transition-all duration-700 ease-out`}
              style={{ 
                transitionDelay: `${idx * 100 + 500}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {/* Corner Accents */}
              <div className="blueprint-corner top-4 left-4 border-t-2 border-l-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="blueprint-corner bottom-4 right-4 border-b-2 border-r-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Image - Note: No grayscale or darkening by default */}
              <img 
                src={imgUrl} 
                alt={`${title} - Visual ${idx + 1}`} 
                className="w-full h-full object-cover transition-all duration-[1.5s] scale-100 group-hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(imgUrl)}
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <button 
                    onClick={() => setSelectedImage(imgUrl)}
                    className="text-white text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:text-teal-400 transition-colors"
                  >
                    VIEW FULL RESOLUTION <Maximize2 size={14} />
                  </button>
                  <ArrowRight size={20} className="text-teal-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (No sidebar description here anymore) */}
      {selectedImage && (
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-8 overflow-hidden" onClick={() => setSelectedImage(null)}>
          <div className="fixed inset-0 bg-black/98 backdrop-blur-xl animate-in fade-in duration-500" />
          
          <div 
            className="relative z-10 w-full max-w-6xl h-full flex flex-col animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls */}
            <div className="flex justify-between items-center py-4 px-2">
              <span className="text-teal-500 font-mono text-[10px] tracking-widest uppercase">
                {title} // VISUAL_DETAIL_PREVIEW
              </span>
              <button 
                className="p-3 text-white/50 hover:text-teal-400 hover:rotate-90 transition-all duration-300 bg-white/5 rounded-full border border-white/10" 
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Modal Content */}
            <div className="flex-grow flex items-center justify-center p-2 bg-black/40 rounded-lg border border-white/5 overflow-hidden">
              <img 
                src={selectedImage} 
                alt="Full Project Detail" 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
