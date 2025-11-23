import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://picsum.photos/id/10/1600/900')` }} // Ocean/Nature vibe
      >
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 via-transparent to-pink-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h2 className="text-white font-bold text-lg md:text-xl tracking-widest mb-4 bg-teal-500/80 px-4 py-1 rounded-full backdrop-blur-sm">
          セブ島マンツーマン留学
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          教室を飛び出して、<br />
          <span className="text-teal-300">世界が広がる</span>英語体験を。
        </h1>
        <p className="text-white text-base md:text-lg mb-8 max-w-2xl drop-shadow-md">
          教科書だけの勉強はもう終わり。<br />
          先生とカフェや海へ。リアルな会話で学ぶ、<br className="sm:hidden"/>新しい留学スタイル。
        </p>
        
        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg py-3 px-8 md:py-4 md:px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          詳細を見てみる
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center animate-bounce text-white/80">
        <ChevronDown size={40} />
      </div>
    </div>
  );
};

export default Hero;