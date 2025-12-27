
import React, { useState, useEffect } from 'react';
import { GALLERY_SLIDES, COLORS } from '../../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % GALLERY_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + GALLERY_SLIDES.length) % GALLERY_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden bg-black">
      {GALLERY_SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg">{slide.title}</h3>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mb-10 leading-relaxed font-medium">
              {slide.description}
            </p>
            <button className="px-10 py-5 rounded-full text-white font-black text-lg shadow-xl transition-all hover:scale-110 active:scale-95" style={{ backgroundColor: COLORS.primary }}>
              {slide.ctaText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {GALLERY_SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-white w-8' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySlider;
