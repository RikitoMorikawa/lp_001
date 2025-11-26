import React, { useState, useEffect } from 'react';
import { LINE_URL } from '../constants';

const FixedCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-0 left-0 w-full h-[65px] bg-gradient-to-r from-[#06C755] to-[#00B900] text-white flex items-center justify-center text-lg font-bold shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-50 hover:from-[#05B04A] hover:to-[#009900] hover:-translate-y-[2px] transition-all duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <span className="mr-2 text-2xl">📱</span> 公式LINEで無料相談
    </a>
  );
};

export default FixedCTA;
