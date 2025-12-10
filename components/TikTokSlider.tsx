import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TikTokSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: '7581073872108195092',
      url: 'https://www.tiktok.com/@barbie_senseidesu/video/7581073872108195092'
    },
    {
      id: '7559244680647560469',
      url: 'https://www.tiktok.com/@barbie_senseidesu/video/7559244680647560469'
    },
    {
      id: '7563962249409219860',
      url: 'https://www.tiktok.com/@barbie_senseidesu/video/7563962249409219860'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-800">
            実際のレッスン動画をチェック！
          </h2>
          <p className="text-lg text-gray-600">
            TikTokで公開中の人気動画をご覧ください
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div key={video.id} className="min-w-full h-full flex items-center justify-center">
                  <blockquote
                    className="tiktok-embed w-full h-full"
                    cite={video.url}
                    data-video-id={video.id}
                    style={{ maxWidth: '100%', minWidth: '100%' }}
                  >
                    <section>
                      <a
                        target="_blank"
                        title="@barbie_senseidesu"
                        href="https://www.tiktok.com/@barbie_senseidesu"
                        rel="noopener noreferrer"
                      >
                        @barbie_senseidesu
                      </a>
                    </section>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 z-10 group"
            aria-label="前の動画"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 z-10 group"
            aria-label="次の動画"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`動画 ${index + 1} へ移動`}
              />
            ))}
          </div>
        </div>

        {/* TikTok Follow CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.tiktok.com/@barbie_senseidesu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            TikTokをフォロー
          </a>
        </div>
      </div>

      {/* TikTok Embed Script */}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </section>
  );
};

export default TikTokSlider;
