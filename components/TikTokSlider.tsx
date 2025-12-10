import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TikTokSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({});

  const videos = [
    {
      id: '7581073872108195092',
      url: 'https://www.tiktok.com/@barbie_senseidesu/video/7581073872108195092',
      thumbnail: `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@barbie_senseidesu/video/7581073872108195092`,
      title: 'レッスン動画 1',
      description: 'デート感覚で楽しく英会話'
    },
    {
      id: '7559244680647560469',
      url: 'https://www.tiktok.com/@barbie_senseidesu/video/7559244680647560469',
      thumbnail: `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@barbie_senseidesu/video/7559244680647560469`,
      title: 'レッスン動画 2',
      description: 'カフェで学ぶ実践英語'
    },
    {
      id: '7563962249409219860',
      url: 'https://www.tiktok.com/@barbie_senseidesu/video/7563962249409219860',
      thumbnail: `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@barbie_senseidesu/video/7563962249409219860`,
      title: 'レッスン動画 3',
      description: '楽しい英語レッスンの様子'
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

  useEffect(() => {
    const fetchThumbnails = async () => {
      const newThumbnails: { [key: string]: string } = {};

      for (const video of videos) {
        try {
          const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(video.url)}`);
          const data = await response.json();
          if (data.thumbnail_url) {
            newThumbnails[video.id] = data.thumbnail_url;
          }
        } catch (error) {
          console.error(`Failed to fetch thumbnail for ${video.id}:`, error);
        }
      }

      setThumbnails(newThumbnails);
    };

    fetchThumbnails();
  }, []);

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
          <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '9/16' }}>
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video, index) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-full h-full flex items-center justify-center relative group cursor-pointer bg-gray-900"
                >
                  {/* Background Thumbnail Image */}
                  {thumbnails[video.id] ? (
                    <img
                      src={thumbnails[video.id]}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>

                  {/* Play Button */}
                  <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors">
                      <Play className="w-10 h-10 text-pink-500 fill-pink-500 ml-1" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl mb-2">{video.title}</h3>
                      <p className="text-white/90 text-sm">{video.description}</p>
                    </div>
                  </div>

                  {/* TikTok Icon */}
                  <div className="absolute top-4 right-4 z-10">
                    <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>

                  {/* User Handle */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <p className="text-white font-semibold drop-shadow-lg">@barbie_senseidesu</p>
                  </div>
                </a>
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
      </div>
    </section>
  );
};

export default TikTokSlider;
