import React from 'react';
import { Coffee, MapPin, Sun } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-600 font-bold tracking-wider text-sm">CONCEPT</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
            「机の上」じゃ、<br className="sm:hidden"/>会話は弾まない。
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="text-center p-6 border border-gray-200 rounded-xl bg-white shadow-md">
            <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
              <img src="https://picsum.photos/id/20/200/200" alt="Cafe Lesson" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">CONCEPT 01</h3>
            <p className="text-lg font-semibold text-sky-600 mb-4">Cafe Lesson</p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              おしゃれなカフェでドリンクを飲みながら。リラックスした雰囲気だからこそ、自然なフレーズが溢れ出します。
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center p-6 border border-gray-200 rounded-xl bg-white shadow-md">
            <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
              <img src="https://picsum.photos/id/25/200/200" alt="Town Walk" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">CONCEPT 02</h3>
            <p className="text-lg font-semibold text-blue-600 mb-4">Town Walk</p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              先生と街を散策。道案内やショッピング、リアルなシチュエエーションで生きた英語を習得。
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center p-6 border border-gray-200 rounded-xl bg-white shadow-md">
            <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
              <img src="https://picsum.photos/id/1015/200/200" alt="Weekend Trip" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">CONCEPT 03</h3>
            <p className="text-lg font-semibold text-orange-600 mb-4">Weekend Trip</p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              週末はアイランドホッピングへ。美しい海に囲まれて、勉強という感覚を忘れて英語に没頭できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;