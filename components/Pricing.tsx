import React from 'react';
import { PLANS, LINE_URL } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-[#2B9FD9] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FFB347] font-bold tracking-widest uppercase text-sm mb-2 block">Plan & Price</span>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            料金プラン
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFB347] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white text-gray-800 rounded-2xl overflow-hidden relative flex flex-col ${plan.isPopular ? 'transform md:-translate-y-4 shadow-2xl border-4 border-[#FFB347]' : 'shadow-xl'}`}
            >
              {plan.isPopular && (
                <div className="bg-[#FFB347] text-white text-center py-2 font-bold uppercase tracking-wide">
                  一番人気
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-center mb-4 text-[#2B9FD9]">{plan.title}</h3>
                <div className="text-center mb-8">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 text-sm block mt-1">（税込）</span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gray-50 border-t text-center">
                <a 
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06C755] font-bold hover:underline flex items-center justify-center gap-2"
                >
                  詳しくはLINEで <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;