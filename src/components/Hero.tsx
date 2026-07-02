import React from 'react';

// Import your transparent PNGs exported from Canva
import polaroid1 from '../assets/polaroid1.png';
import polaroid2 from '../assets/polaroid2.png';
import polaroid3 from '../assets/polaroid3.png';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#d1bdf2] px-[5%] md:px-[10%] py-16 md:py-20 min-height-[80vh] overflow-hidden">
      
      <div className="flex-1 max-w-[500px] flex flex-col items-start text-left z-10">
        <h1 className="font-serif text-5xl md:text-7xl text-[#2a154d] mb-5 tracking-tight">
          Dorilicious
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#2a154d] mb-8 leading-relaxed">
          Custom nail artistry tailored entirely to your unique style.
        </p>
        <button 
          onClick={() => console.log('Navigate to booking')}
          className="bg-[#7b61d1] text-white font-bold text-base md:text-lg px-8 py-3.5 rounded-full shadow-md hover:bg-[#654cb3] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Book Now
        </button>
      </div>

        <div className="flex-1 relative w-full max-w-[420px] md:max-w-[480px] h-[380px] md:h-[480px] mt-12 md:mt-0 md:ml-12 flex justify-center md:block">
          
          <div className="absolute w-[180px] md:w-[230px] bg-[#fffdfa] p-3 pb-9 rounded-sm drop-shadow-md border border-black/5 left-0 top-[15%] rotate-[-5deg] z-10 hover:z-40 hover:scale-105 hover:rotate-0 transition-all duration-300 group">
            <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-xs">
              <img src={polaroid1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Nail design 1" />
            </div>
          </div>
          
          <div className="absolute w-[180px] md:w-[230px] bg-[#fffdfa] p-3 pb-9 rounded-sm drop-shadow-md border border-black/5 left-[30%] top-0 rotate-[3deg] z-20 hover:z-40 hover:scale-105 hover:rotate-0 transition-all duration-300 group">
            <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-xs">
              <img src={polaroid2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Nail design 2" />
            </div>
          </div>
          
          <div className="absolute w-[180px] md:w-[230px] bg-[#fffdfa] p-3 pb-9 rounded-sm drop-shadow-xl border border-black/5 left-[50%] top-[35%] rotate-[-2deg] z-30 hover:z-40 hover:scale-105 hover:rotate-0 transition-all duration-300 group">
            <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-xs">
              <img src={polaroid3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Nail design 3" />
            </div>
          </div>
          
        </div>
    </section>
  );
};

export default Hero;