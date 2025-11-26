import React from 'react';
import { LINE_URL } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-[#2B9FD9] to-[#1E88C7] text-white">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
          まずは気軽にLINEで相談
        </h2>
        <p className="text-xl mb-10 font-medium">
          留学の疑問や不安、なんでもお答えします
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 text-left md:text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center md:justify-center gap-3">
            <span className="text-2xl">✓</span> 24時間以内に返信
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center md:justify-center gap-3">
             <span className="text-2xl">✓</span> しつこい営業なし
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center md:justify-center gap-3">
             <span className="text-2xl">✓</span> 友だち追加のみOK
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center md:justify-center gap-3">
             <span className="text-2xl">✓</span> 最適な講師をご紹介
          </div>
        </div>

        <a 
          href={LINE_URL}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#06C755] hover:bg-[#05B04A] text-white font-bold py-5 px-10 rounded-full text-xl md:text-2xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transform transition hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current mr-3">
             <path d="M12 2.04C6.5 2.04 2 5.91 2 10.68c0 1.96.74 3.79 2.04 5.33-.15.71-.84 2.45-1.02 2.93-.05.15 0 .34.12.43.08.06.19.08.29.03.53-.26 3.22-1.55 3.94-1.9.74.22 1.54.34 2.36.34 5.5 0 10-3.87 10-8.64S16.5 2.04 12 2.04z"/>
          </svg>
          公式LINEで相談する
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;