import React from 'react';
import { STEPS } from '../constants';

const Flow: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2B9FD9] font-bold tracking-widest uppercase text-sm mb-2 block">Flow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] relative inline-block">
            お申し込みの流れ
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#2B9FD9] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Arrow for Large Screens */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-1/2 w-full h-1 bg-gray-200 z-0"></div>
                )}
                
                <div className="w-20 h-20 rounded-full bg-[#2B9FD9] text-white flex items-center justify-center shadow-lg z-10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                
                <div className="text-sm font-bold text-[#FFB347] mb-1">STEP {step.number}</div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Flow;