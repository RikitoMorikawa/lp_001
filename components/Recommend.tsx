import React from 'react';
import { Wallet, Palmtree, ShieldCheck, ArrowRight } from 'lucide-react';
import { LINE_URL } from '../constants';

const Recommend: React.FC = () => {
  return (
    <section className="py-16 bg-[#5FB8E8] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-bold tracking-widest uppercase text-sm mb-2 block text-white/90">[ RECOMMEND ]</span>
          <h2 className="text-3xl font-bold relative inline-block">
            こんな人におすすめ
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"></span>
          </h2>
        </div>

        <div className="flex flex-col gap-10 max-w-lg mx-auto mb-16">
          {/* Item 1 */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="shrink-0 w-24 h-24 bg-white rounded-full border-2 border-black flex items-center justify-center text-black shadow-lg">
               <Wallet className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div className="shrink-0 text-white opacity-80">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">
                海外、でも安く過ごしたい
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                フライト代も物価も安いため、<br/>
                低コストで留学できます
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="shrink-0 w-24 h-24 bg-white rounded-full border-2 border-black flex items-center justify-center text-black shadow-lg">
               <Palmtree className="w-10 h-10 stroke-[1.5]" />
            </div>
             <div className="shrink-0 text-white opacity-80">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">
                リゾートも楽しみたい
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                セブはサンゴに囲まれた<br/>
                美しい海が有名です
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="shrink-0 w-24 h-24 bg-white rounded-full border-2 border-black flex items-center justify-center text-black shadow-lg">
               <ShieldCheck className="w-10 h-10 stroke-[1.5]" />
            </div>
             <div className="shrink-0 text-white opacity-80">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">
                海外で治安も<br/>
                馴染めるかも不安
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                セブは治安も良く、フレンドリーな<br/>
                人が多いため留学生に優しい環境
              </p>
            </div>
          </div>
        </div>

        {/* CTA Area */}
        <div className="text-center">
            {/* Bubble */}
            <div className="relative inline-block bg-white text-[#333] text-xs md:text-sm font-bold py-2 px-6 rounded-full mb-4 shadow-md">
                「なにもわからない」から相談OK！
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white"></div>
            </div>
            
            <br />
            {/* Button */}
            <a 
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#E05275] to-[#7C4DFF] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full max-w-sm text-lg tracking-wider"
            >
              <span className="drop-shadow-md">LINEで個別相談</span> <span className="ml-2 text-xl drop-shadow-md">▶</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Recommend;