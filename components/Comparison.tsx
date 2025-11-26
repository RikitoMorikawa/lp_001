import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2B9FD9] font-bold tracking-widest uppercase text-sm mb-2 block">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] relative inline-block">
            従来の留学との違い
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#2B9FD9] rounded-full"></span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden border rounded-xl shadow-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-5 px-2 w-[30%] font-bold text-gray-700 border-b bg-gray-50 text-center text-base md:text-lg whitespace-nowrap">項目</th>
                    <th className="py-5 px-2 w-[30%] font-bold text-gray-500 border-b bg-gray-50 text-center text-base md:text-lg whitespace-nowrap">従来の留学</th>
                    <th className="py-5 px-2 w-[40%] font-bold text-[#2B9FD9] border-b bg-blue-50 text-center text-base md:text-lg whitespace-nowrap">当プログラム</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-5 px-2 border-b font-bold text-gray-700 bg-gray-50 text-center whitespace-nowrap text-base md:text-lg">学習環境</td>
                    <td className="py-5 px-2 border-b text-gray-600 text-center text-base md:text-lg whitespace-nowrap">教室・学校</td>
                    <td className="py-5 px-2 border-b text-[#2B9FD9] font-bold bg-blue-50 text-center text-base md:text-lg whitespace-nowrap">カフェ・街中</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-2 border-b font-bold text-gray-700 bg-gray-50 text-center whitespace-nowrap text-base md:text-lg">レッスン形式</td>
                    <td className="py-5 px-2 border-b text-gray-600 text-center text-base md:text-lg whitespace-nowrap">グループ</td>
                    <td className="py-5 px-2 border-b text-[#2B9FD9] font-bold bg-blue-50 text-center text-base md:text-lg whitespace-nowrap">マンツーマン</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-2 border-b font-bold text-gray-700 bg-gray-50 text-center whitespace-nowrap text-base md:text-lg">学習内容</td>
                    <td className="py-5 px-2 border-b text-gray-600 text-center text-base md:text-lg whitespace-nowrap">教科書</td>
                    <td className="py-5 px-2 border-b text-[#2B9FD9] font-bold bg-blue-50 text-center text-base md:text-lg whitespace-nowrap">日常会話・実用英語</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-2 font-bold text-gray-700 bg-gray-50 text-center whitespace-nowrap text-base md:text-lg">雰囲気</td>
                    <td className="py-5 px-2 text-gray-600 text-center text-base md:text-lg whitespace-nowrap">堅苦しい</td>
                    <td className="py-5 px-2 text-[#FF6B9D] font-bold bg-blue-50 text-center text-base md:text-lg whitespace-nowrap">デート感覚</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-3 md:hidden flex items-center justify-center gap-2">
             <span>←</span> 横にスクロールして比較を見る <span>→</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;