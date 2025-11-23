import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Brand */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wider">セブ島マンツーマン留学</h3>

        {/* Description */}
        <p className="text-xs md:text-sm leading-relaxed text-gray-400 max-w-md mx-auto mb-8">
          セブ島での実践型語学留学。
          <br />
          教室を飛び出して、リアルなコミュニケーション能力を。
          <br />
          新しい自分に出会う旅をここから。
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-10">
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300">
            <Facebook size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-[10px] md:text-xs text-gray-600 tracking-wide">
          &copy; {new Date().getFullYear()} セブ島マンツーマン留学. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
