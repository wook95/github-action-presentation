import pr1 from "@/assets/images/4-1-pr.png";
import pr2 from "@/assets/images/4-2-pr.png";
import Image from "next/image";

export function Slide15() {
  return (
    <div className="h-full p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        PR 생성 자동화
      </h1>

      <div className="grid grid-cols-2 gap-12 h-3/4">
        <div className="space-y-6">
          <Image
            src={pr1}
            alt="PR 생성 자동화 이미지"
            width={1666}
            height={450}
            className="w-full h-68"
            priority
          />
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-blue-400">
              수동 트리거를 통한
            </h3>
            <p className="text-lg text-gray-300">
              시멘틱 버저닝 관리 및 배포 관리
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Image
            src={pr2}
            alt="PR 생성 자동화 이미지"
            width={1666}
            height={450}
            className="w-full h-auto"
            priority
          />
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-green-400">
              자동 체인지 로그 생성과
            </h3>
            <p className="text-lg text-gray-300">
              prepare-release를 이용한 백머지 충돌 방지
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
