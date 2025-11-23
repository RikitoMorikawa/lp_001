import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">Cebu Romance English</h3>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            セブ島で一番ドキドキする語学留学。<br/>
            教室を飛び出して、実践的な英語力を身につけよう。
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-teal-400 transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={24} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">コンセプト</a></li>
            <li><a href="#" className="hover:text-white transition-colors">講師紹介</a></li>
            <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
            <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Cebu IT Park, Cebu City, Philippines</li>
            <li>info@cebu-romance-english.example.com</li>
            <li>+63-32-123-4567</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Cebu Romance English. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;