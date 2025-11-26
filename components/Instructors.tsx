import React from 'react';
import { INSTRUCTORS, LINE_URL } from '../constants';
import { Heart, Star, Coffee, MessageCircle, ChevronRight } from 'lucide-react';

const Instructors: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FA76AC] to-[#F58FA5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FFB347] font-bold tracking-widest uppercase text-sm mb-2 block">Instructors</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md relative inline-block">
            あなたの英語学習をサポートする
            <br className="md:hidden" />
            素敵な講師たち
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFB347] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-4 border-4 border-pink-100 shadow-inner">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl font-bold text-[#333333] mb-1 flex items-center gap-2">
                  {instructor.name} <span className="text-base font-normal text-gray-500">({instructor.age})</span>
                </h3>

                <div className="w-full space-y-3 mt-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
                    <p className="text-gray-600">性格：{instructor.personality}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-pink-400 mt-1 shrink-0" />
                    <p className="text-gray-600">趣味：{instructor.hobbies}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Coffee className="w-4 h-4 text-brown-400 mt-1 shrink-0" />
                    <p className="text-gray-600">得意：{instructor.specialty}</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-pink-50 rounded-xl w-full text-center relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-pink-50"></div>
                  <p className="text-[#FF6B9D] font-medium italic">"{instructor.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05B04A] text-white py-5 px-10 rounded-full shadow-[0_4px_15px_rgba(6,199,85,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(6,199,85,0.5)] overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] transition-all duration-1000 animate-[shimmer_3s_infinite]"></div>

            <MessageCircle className="w-6 h-6 fill-current" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-lg md:text-xl font-bold">気になる講師と学んでみる</span>
              <span className="text-xs md:text-sm opacity-90 font-medium">まずはLINEで無料相談</span>
            </div>
            <ChevronRight className="w-6 h-6 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
          <style>{`
              @keyframes shimmer {
                0% { transform: translateX(-150%) skewX(-25deg); }
                100% { transform: translateX(350%) skewX(-25deg); }
              }
            `}</style>
        </div>
      </div>
    </section>
  );
};

export default Instructors;