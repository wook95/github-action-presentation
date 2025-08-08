export function Slide10() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">토스 페이먼츠</h1>

      <div className="max-w-5xl mx-auto text-white space-y-8">
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-blue-300">핵심 철학</h2>
            <p className="text-2xl">피드백 속도 + PR 코멘트 대화의 양</p>
          </div>

          <h3 className="text-3xl font-bold mt-8 mb-6">3가지 핵심 문제</h3>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-red-900/30 p-6 rounded-lg text-left">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                <span className="text-xl">
                  <span className="font-bold text-red-300">리뷰어 할당이 수동적</span> → 느린 피드백
                </span>
              </div>
            </div>

            <div className="bg-orange-900/30 p-6 rounded-lg text-left">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                <span className="text-xl">
                  <span className="font-bold text-orange-300">이메일 알림</span> → 확인 지연
                </span>
              </div>
            </div>

            <div className="bg-yellow-900/30 p-6 rounded-lg text-left">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-xl">
                  <span className="font-bold text-yellow-300">당일 미리뷰</span> → 누락 발생
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
