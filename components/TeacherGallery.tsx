import React from 'react';
import { TeacherProfile } from '../types';

const teachers: TeacherProfile[] = [
  {
    id: 1,
    name: "Maria",
    hobby: "Cafe Hopping",
    image: "https://picsum.photos/id/64/200/200",
    message: "一緒に美味しいコーヒーを探しに行きましょう！"
  },
  {
    id: 2,
    name: "Chloe",
    hobby: "Yoga",
    image: "https://picsum.photos/id/211/200/200",
    message: "朝のビーチでヨガをして、心も体もリフレッシュしませんか？"
  },
  {
    id: 3,
    name: "Angel",
    hobby: "Shopping",
    image: "https://picsum.photos/id/338/200/200",
    message: "最新のモールでショッピングしながら英会話♪"
  }
];

const TeacherGallery: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-rose-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Teachers</h2>
          <p className="text-rose-600">フレンドリーで経験豊富な先生たちが、あなたを待っています。</p>
        </div>

        <div className="space-y-12">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="flex items-center gap-4 sm:gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-32 h-32 object-cover rounded-full shadow-lg"
                />
              </div>
              {/* Speech Bubble */}
              <div className="relative w-full bg-white p-6 rounded-xl shadow-md speech-bubble">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-bold">{teacher.name}</h3>
                  <p className="text-xs text-rose-500 uppercase tracking-widest">{teacher.hobby}</p>
                </div>
                <p className="text-sm text-gray-600 italic">"{teacher.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .speech-bubble {
          position: relative;
        }
        .speech-bubble::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 15px solid white;
          top: 50%;
          left: -15px;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
};

export default TeacherGallery;