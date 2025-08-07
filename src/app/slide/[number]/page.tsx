'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SlideContainer } from '@/components/SlideContainer';
import { slides } from '@/data/slides';

interface SlidePageProps {
  params: {
    number: string;
  };
}

export default function SlidePage({ params }: SlidePageProps) {
  const router = useRouter();
  const slideNumber = parseInt(params.number);
  const totalSlides = slides.length;

  const navigateToSlide = (targetSlide: number) => {
    if (targetSlide >= 1 && targetSlide <= totalSlides) {
      router.push(`/slide/${targetSlide}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          navigateToSlide(slideNumber + 1);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          navigateToSlide(slideNumber - 1);
          break;
        case 'Escape':
          event.preventDefault();
          router.push('/');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideNumber, router, totalSlides]);

  if (slideNumber < 1 || slideNumber > totalSlides) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">슬라이드를 찾을 수 없습니다</h1>
          <p className="text-xl mb-8">유효한 슬라이드 번호: 1-{totalSlides}</p>
          <button
            onClick={() => router.push('/slide/1')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            첫 번째 슬라이드로 이동
          </button>
        </div>
      </div>
    );
  }

  const currentSlide = slides[slideNumber - 1];

  return (
    <SlideContainer
      slide={currentSlide}
      currentSlide={slideNumber}
      totalSlides={totalSlides}
      onNext={() => navigateToSlide(slideNumber + 1)}
      onPrev={() => navigateToSlide(slideNumber - 1)}
      onHome={() => router.push('/')}
    />
  );
}