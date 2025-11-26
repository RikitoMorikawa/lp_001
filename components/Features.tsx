import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#1E88C7] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FFB347] font-bold tracking-widest uppercase text-sm mb-2 block">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            3つの特徴
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFB347] rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 relative group">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#FFB347]">{feature.title}</h3>
              <p className="leading-relaxed opacity-90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;