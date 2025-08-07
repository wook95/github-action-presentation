import naver from "@/assets/images/1-naver.png";
import Image from "next/image";

export function Slide06() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">네이버</h1>

      <div className="flex items-center justify-center space-x-12">
        <div className="text-center">
          <Image
            src={naver}
            width={1666}
            height={450}
            alt="네이버 자동화 사례 이미지"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
