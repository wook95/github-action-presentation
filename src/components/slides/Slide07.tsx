export function Slide07() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-5xl font-bold text-white mb-12">
        네이버 사례의 성과
      </h1>

      <div className="grid grid-cols-2 gap-16 max-w-4xl">
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-blue-400">53%</div>
          <p className="text-2xl text-gray-300">리뷰 응답 시간 단축</p>
        </div>

        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-green-400">48%</div>
          <p className="text-2xl text-gray-300">merge 소요 시간 감소</p>
        </div>

        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-yellow-400">15%</div>
          <p className="text-2xl text-gray-300">3일 내 merge 비율 증가</p>
        </div>

        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-purple-400">62%</div>
          <p className="text-2xl text-gray-300">리뷰 참여율 증가</p>
        </div>
      </div>
    </div>
  );
}
