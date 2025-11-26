import React from "react";
import { LINE_URL } from "../constants";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden h-[650px] min-h-[550px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Inserted Bottom-Left Image */}
      {/* Changed z-index to 0 to sit behind the text content (z-10) but visibly above the background due to DOM order/stacking context */}
      <div className="absolute bottom-0 left-0 z-0 w-[55%] md:w-[40%] lg:w-[35%] max-w-[550px] pointer-events-none opacity-90">
        <img src="/top_photo.png" alt="Happy Student" className="w-full h-auto object-contain drop-shadow-2xl" />
      </div>

      {/* Philippines Flag Image - Slightly moved to left from previous 70% */}
      <div className="absolute bottom-8 left-[60%] md:bottom-12 md:left-[50%] lg:left-[45%] z-0 w-32 md:w-40 lg:w-52 pointer-events-none">
        <img src="/ntf_137.png" alt="Philippines Flag" className="w-full h-auto object-contain drop-shadow-lg transform rotate-12 opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white pb-24 md:pb-32">
        {/* Header Banner */}
        <div className="mb-6 bg-[#EF5B25] text-white py-2 px-6 md:px-10 text-lg md:text-2xl font-bold shadow-lg">初めての海外へ挑戦したい方へ</div>

        {/* 3 Circles: Reasons to Choose */}
        <div className="flex flex-row justify-center items-start gap-3 md:gap-8 mb-8 md:mb-10 w-full max-w-5xl">
          {/* Circle 1 */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/95 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,159,28,0.6)] transform transition duration-300 hover:scale-110 border-[3px] md:border-4 border-[#FF9F1C] relative group">
            <span className="text-[9px] md:text-[10px] text-[#FF9F1C] font-black mb-1 uppercase tracking-widest bg-orange-50 px-2 rounded-full">Point 01</span>
            <div className="flex flex-col items-center leading-tight">
              <span className="text-[11px] md:text-sm font-bold text-gray-500 mb-0.5">教室ではなく</span>
              <span className="text-[#EF5B25] text-sm md:text-xl font-extrabold whitespace-nowrap">カフェで学ぶ</span>
            </div>
          </div>

          {/* Circle 2 */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/95 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,159,28,0.6)] transform transition duration-300 hover:scale-110 border-[3px] md:border-4 border-[#FF9F1C] relative group">
            <span className="text-[9px] md:text-[10px] text-[#FF9F1C] font-black mb-1 uppercase tracking-widest bg-orange-50 px-2 rounded-full">Point 02</span>
            <div className="flex flex-col items-center leading-tight">
              <span className="text-[11px] md:text-sm font-bold text-gray-500 mb-0.5">不要なコスト0</span>
              <span className="text-[#EF5B25] text-sm md:text-xl font-extrabold">業界最安値</span>
            </div>
          </div>

          {/* Circle 3 */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/95 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,159,28,0.6)] transform transition duration-300 hover:scale-110 border-[3px] md:border-4 border-[#FF9F1C] relative group">
            <span className="text-[9px] md:text-[10px] text-[#FF9F1C] font-black mb-1 uppercase tracking-widest bg-orange-50 px-2 rounded-full">Point 03</span>
            <div className="flex flex-col items-center leading-tight">
              <span className="text-[11px] md:text-sm font-bold text-gray-500 mb-0.5">女性講師と</span>
              <span className="text-[#EF5B25] text-sm md:text-xl font-extrabold">マンツーマン</span>
            </div>
          </div>
        </div>

        {/* Updated Main Title Section */}
        <div className="mb-4">
          {/* <p className="text-sm md:text-xl font-bold text-white mb-2 drop-shadow-md tracking-wider border-b-2 border-white inline-block pb-1">
            全てのレッスンがマンツーマンで受けられる！
          </p> */}
          <p className="text-sm md:text-xl font-bold text-white mb-2 drop-shadow-md tracking-wider border-b-2 border-white inline-block pb-1">
            デート感覚で学ぶ英会話
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3 drop-shadow-xl tracking-wide">フィリピン・セブ留学</h1>
          {/* <p className="text-lg md:text-2xl font-bold text-white drop-shadow-md tracking-widest">デート感覚で学ぶ英会話</p> */}
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#06C755] hover:bg-[#05B04A] text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl shadow-[0_4px_15px_rgba(6,199,85,0.4)] transform transition hover:scale-105 flex items-center gap-3 border-2 border-white/20"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M12 2.04C6.5 2.04 2 5.91 2 10.68c0 1.96.74 3.79 2.04 5.33-.15.71-.84 2.45-1.02 2.93-.05.15 0 .34.12.43.08.06.19.08.29.03.53-.26 3.22-1.55 3.94-1.9.74.22 1.54.34 2.36.34 5.5 0 10-3.87 10-8.64S16.5 2.04 12 2.04z" />
          </svg>
          公式LINEで相談する
        </a>
      </div>
    </section>
  );
};

export default Hero;
