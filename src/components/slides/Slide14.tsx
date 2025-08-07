import gemini from '@/assets/images/4-pr.png';
import Image from 'next/image';
import GradientText from '../ui/GradientText';

export function Slide14() {
  return (
    <div className="flex items-center justify-center h-full space-x-16">
      <div className="flex-1">
        <Image src={gemini} alt="PR 리뷰 자동화 이미지" width={1666} height={450} className="w-full h-auto" priority />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold text-white mb-8">
          <div className="flex items-center justify-center">
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={3}
              showBorder={false}
              className="m-1!"
            >
              Gemini
            </GradientText>
            를 이용한
          </div>
          <br />
          PR 리뷰 자동화
        </h1>

        <div className="space-y-4 text-xl text-gray-300">
          <div className="flex items-center space-x-3">
            <span className="text-green-400">•</span>
            <span>prompt를 이용한 최적화 리뷰</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400">•</span>
            <span>diff의 크기가 너무 클 경우 요약모드로 진행</span>
          </div>
        </div>
      </div>
    </div>
  );
}
