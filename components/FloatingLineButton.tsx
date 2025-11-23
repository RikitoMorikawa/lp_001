import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingLineButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <a
        href="#"
        onClick={(e) => e.preventDefault()} // Placeholder link
        className="flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-4 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        <MessageCircle size={28} fill="white" />
        <div className="flex flex-col items-start">
          <span className="text-xs font-normal opacity-90">まずは無料相談</span>
          <span className="text-lg leading-none">公式LINEを追加</span>
        </div>
      </a>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingLineButton;