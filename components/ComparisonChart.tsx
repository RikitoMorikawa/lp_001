import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '一般的な留学', value: 30, color: '#94a3b8' }, // Slate-400
  { name: 'Cebu Romance English', value: 90, color: '#14b8a6' }, // Teal-500
];

const ComparisonChart: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            <span className="text-teal-500">発話量</span>が違います。
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            教室で他の生徒の話を聞いているだけの時間、もったいなくないですか？<br/>
            Cebu Romance Englishなら、常に先生とマンツーマン。移動中も、食事中も、すべてがレッスンの場です。
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">✓</span>
              <span className="text-gray-700 font-medium">圧倒的な1対1の時間</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">✓</span>
              <span className="text-gray-700 font-medium">教科書英語ではない「使える」英語</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">✓</span>
              <span className="text-gray-700 font-medium">楽しくて時間が経つのが早い</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 h-80 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-center text-gray-500 text-sm mb-4 font-bold">1日の平均発話量（分）の比較</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0"/>
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                tick={{ fontSize: 12, fontWeight: 'bold', fill: '#334155' }} 
                width={120}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 20, 20, 0]} barSize={35}>
                 {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;