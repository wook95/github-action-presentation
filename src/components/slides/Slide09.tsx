import security from "@/assets/images/3-security.jpeg";
import Image from "next/image";

export function Slide09() {
  return (
    <div className="flex items-center justify-center h-full space-x-16">
      <div className="flex-1">
        <Image
          src={security}
          alt="보안 자동화 이미지"
          width={1666}
          height={450}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold text-white mb-8">보안 자동화</h1>

        <div className="space-y-4 text-xl text-gray-300">
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>
            <span>취약점 스캐닝 자동화</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>
            <span>의존성 보안 검사</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>
            <span>코드 보안 분석</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-400">✓</span>
            <span>자동 보안 패치 적용</span>
          </div>
        </div>
      </div>
    </div>
  );
}
