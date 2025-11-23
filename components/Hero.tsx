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
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 via-transparent to-teal-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h2 className="text-white font-bold text-xl md:text-2xl tracking-widest mb-4 bg-teal-500/80 px-4 py-1 rounded-full backdrop-blur-sm">
          セブ島 × 実践会話
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          教室を飛び出して、<br />
          <span className="text-pink-400">恋するような</span>英語体験を。
        </h1>
        <p className="text-white md:text-xl text-lg mb-8 max-w-2xl drop-shadow-md">
          教科書だけの勉強はもう終わり。<br />
          先生とカフェへ、海へ。「デート気分」で学ぶ、<br className="md:hidden"/>新しい留学スタイル。
        </p>
        
        <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          詳細を見てみる
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown size={40} />
      </div>
    </div>
  );
};

export default Hero;