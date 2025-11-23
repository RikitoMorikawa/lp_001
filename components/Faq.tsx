import React, { useState } from 'react';
import { FaqItem } from '../types';
import { Plus, Minus } from 'lucide-react';

const faqs: FaqItem[] = [
  {
    question: "英語が全く話せなくても大丈夫ですか？",
    answer: "もちろんです！先生は初心者への指導に慣れており、ジェスチャーや翻訳アプリを交えながら楽しくコミュニケーションを取ってくれます。"
  },
  {
    question: "「デート」といっても、本当のデートではないですよね？",
    answer: "はい、あくまで「デートのようなシチュエーション」で行う英会話レッスンです。恋愛関係を目的としたサービスではありませんのでご安心ください。"
  },
  {
    question: "どんな場所に行きますか？",
    answer: "おしゃれなカフェ、ショッピングモール、ビーチサイドのレストラン、歴史的な教会など、セブ島の観光スポットやローカルな場所へ行きます。"
  },
  {
    question: "治安は大丈夫ですか？",
    answer: "先生が常に同行し、安全なエリアを選んでレッスンを行います。夜間の危険なエリアへの立ち入りは禁止されています。"
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-gray-700">{faq.question}</span>
                {openIndex === index ? <Minus size={20} className="text-teal-500" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;