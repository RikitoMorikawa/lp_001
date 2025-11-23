import React from 'react';
import { TeacherProfile } from '../types';

const teachers: TeacherProfile[] = [
  {
    id: 1,
    name: "Maria",
    hobby: "Cafe Hopping",
    image: "https://picsum.photos/id/64/400/400", // Placeholder: Female portrait
    message: "一緒に美味しいコーヒーを探しに行きましょう！"
  },
  {
    id: 2,
    name: "John",
    hobby: "Surfing",
    image: "https://picsum.photos/id/91/400/400", // Placeholder: Male portrait
    message: "英語だけじゃなく、セブの海も案内しますよ。"
  },
  {
    id: 3,
    name: "Angel",
    hobby: "Shopping",
    image: "https://picsum.photos/id/338/400/400", // Placeholder: Female
    message: "最新のモールでショッピングしながら英会話♪"
  },
  {
    id: 4,
    name: "Mark",
    hobby: "Photography",
    image: "https://picsum.photos/id/177/400/400", // Placeholder: Male
    message: "映えるスポットで素敵な写真を撮りましょう。"
  }
];

const TeacherGallery: React.FC = () => {
  return (
    <section className="py-20 bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Teachers</h2>
          <p className="text-teal-200">フレンドリーで経験豊富な先生たちが、あなたを待っています。</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="group relative overflow-hidden rounded-2xl bg-teal-800 hover:bg-teal-700 transition-colors duration-300 shadow-xl">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                <p className="text-xs text-teal-300 uppercase tracking-widest mb-3">{teacher.hobby}</p>
                <p className="text-sm text-teal-100 opacity-80 italic">"{teacher.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherGallery;