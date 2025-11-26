import React from 'react';
import { SCHEDULE } from '../constants';

const Schedule: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#4FACFE] to-[#40A4EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FFB347] font-bold tracking-widest uppercase text-sm mb-2 block">Schedule</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md relative inline-block">
            1日のスケジュール例
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFB347] rounded-full"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/50 transform md:-translate-x-1/2"></div>

          {SCHEDULE.map((item, index) => (
            <div key={index} className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#4FACFE] transform -translate-x-1/2 z-10 mt-6 md:mt-0 shadow-sm"></div>

              {/* Content Box */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="inline-block bg-[#2B9FD9] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {item.time}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="w-full h-40 rounded-lg overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>

              {/* Empty Space for opposite side */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;