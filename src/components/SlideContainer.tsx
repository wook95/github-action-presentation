'use client';

import { Slide } from '@/types/slide';

interface SlideContainerProps {
  slide: Slide;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
}

export function SlideContainer({
  slide,
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onHome
}: SlideContainerProps) {
  const handleClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    
    // 왼쪽 30% 클릭시 이전 슬라이드, 오른쪽 70% 클릭시 다음 슬라이드
    if (clickX < width * 0.3) {
      onPrev();
    } else {
      onNext();
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Navigation Bar */}
      <div className="fixed top-4 right-4 z-10 flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onHome();
          }}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-sm"
        >
          홈
        </button>
        <div className="text-sm text-gray-300">
          {currentSlide} / {totalSlides}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-10">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full text-center">
          {slide.component}
        </div>
      </main>

      {/* Navigation Hints */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center gap-4 text-xs text-gray-400 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
          <span>← 이전</span>
          <span>•</span>
          <span>다음 →</span>
          <span>•</span>
          <span>ESC 홈</span>
        </div>
      </div>

    </div>
  );
}