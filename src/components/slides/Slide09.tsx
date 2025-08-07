import security from '@/assets/images/3-security.jpeg';
import Image from 'next/image';
import DecryptedText from '../ui/DecryptedText';

export function Slide09() {
  return (
    <div className="flex items-center justify-center h-full space-x-16">
      <div className="flex-1">
        <Image src={security} alt="보안 자동화 이미지" width={1666} height={450} className="w-full h-auto" priority />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold text-white mb-8">
          {/* 보안 자동화 */}
          <DecryptedText text="보안 자동화" animateOn="view" revealDirection="start" sequential={true} speed={250} />
        </h1>

        <div className="space-y-4 text-xl text-gray-300">
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>

            <DecryptedText
              text="SCA (Software Composition Analysis)"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              speed={60}
            />
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>

            <DecryptedText
              text="SAST (Static Application Security Testing)"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              speed={60}
            />
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>

            <DecryptedText
              text="Container, Iac 스캐닝"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              speed={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
