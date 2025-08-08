import toss from '@/assets/images/2-toss.png';
import Image from 'next/image';

export function Slide11() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">토스</h1>

      <div className="flex items-center justify-center space-x-12">
        <div className="text-center">
          <Image
            src={toss}
            width={1514}
            height={1252}
            alt="토스 자동화 사례 이미지"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
