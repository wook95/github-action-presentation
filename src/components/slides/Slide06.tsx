export function Slide06() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">네이버의 문제</h1>

      <div className="max-w-4xl mx-auto text-white space-y-8">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold mb-8">현재 상황 → 문제점 → 개선 필요성</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-300">PR 병합 지연</h3>
              <p className="text-xl">평균 4일 소요</p>
            </div>

            <div className="bg-orange-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">참여율 저조</h3>
              <p className="text-xl">리뷰 참여율 67%</p>
            </div>

            <div className="bg-yellow-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">응답 지연</h3>
              <p className="text-xl">리뷰 응답 지연 문제</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
