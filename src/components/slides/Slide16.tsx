import cd1 from "@/assets/images/5-1.png";
import cd2 from "@/assets/images/5-2.png";
import cd3 from "@/assets/images/5-3.png";
import cd4 from "@/assets/images/5-4.png";
import Image from "next/image";

export function Slide16() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">CI/CD</h1>

      <div className="space-y-8 max-w-4xl">
        <div className="grid grid-cols-2 gap-12 max-w-5xl">
          <div className="space-y-6">
            <Image
              src={cd1}
              alt="PR 생성 자동화 이미지"
              width={1034}
              height={95}
              className="w-full"
              priority
            />
          </div>

          <div className="space-y-6">
            <Image
              src={cd2}
              alt="PR 생성 자동화 이미지"
              width={1034}
              height={95}
              className="w-full"
              priority
            />
          </div>

          <div className="space-y-6">
            <Image
              src={cd4}
              alt="PR 생성 자동화 이미지"
              width={1034}
              height={95}
              className="w-full"
              priority
            />
          </div>
          <div className="space-y-6">
            <Image
              src={cd3}
              alt="PR 생성 자동화 이미지"
              width={1034}
              height={95}
              className="w-full"
              priority
            />
          </div>
        </div>

        <div className="space-y-4 text-xl text-gray-300">
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">•</span>
            <span>Github Tag 생성과 Github Release 생성</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">•</span>
            <span>Action 내에서의 권한 설정</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">•</span>
            <span>잦은 배포로 인한 concurrency 사용</span>
          </div>
        </div>
      </div>
    </div>
  );
}
