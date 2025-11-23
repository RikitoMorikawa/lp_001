import React from 'react';
import { Coffee, MapPin, Heart, Sun } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider text-sm">CONCEPT</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            「机の上」じゃ、<br className="md:hidden"/>会話は弾まない。
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-teal-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-teal-100">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-teal-500">
              <Coffee size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cafe Lesson</h3>
            <p className="text-gray-600 leading-relaxed">
              おしゃれなカフェでドリンクを飲みながら。リラックスした雰囲気だからこそ、自然なフレーズが溢れ出します。
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-pink-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-pink-100 transform md:-translate-y-4">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-pink-500">
              <Heart size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Date Style</h3>
            <p className="text-gray-600 leading-relaxed">
              まるでデートのように、先生と街を散策。道案内やショッピング、リアルなシチュエーションで生きた英語を習得。
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-orange-100">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-orange-500">
              <Sun size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Weekend Trip</h3>
            <p className="text-gray-600 leading-relaxed">
              週末はアイランドホッピングへ。美しい海に囲まれて、勉強という感覚を忘れて英語に没頭できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;