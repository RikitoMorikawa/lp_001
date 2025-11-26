import React from 'react';
import { LINE_URL } from '../constants';

const FixedCTA: React.FC = () => {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 w-full h-[65px] bg-gradient-to-r from-[#06C755] to-[#00B900] text-white flex items-center justify-center text-lg font-bold shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-50 hover:from-[#05B04A] hover:to-[#009900] hover:-translate-y-[2px] transition-all duration-300"
    >
      <span className="mr-2 text-2xl">📱</span> 公式LINEで無料相談
    </a>
  );
};

export default FixedCTA;