export function Slide07() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">네이버</h1>

      <div className="max-w-4xl mx-auto text-white space-y-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold mb-8">3가지 핵심 전략</h2>

          <div className="space-y-6">
            <div className="bg-blue-900/30 p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h3 className="text-3xl font-bold text-blue-300">리뷰 응답 시간 개선</h3>
              </div>
              <p className="text-xl ml-12">알림 자동화</p>
            </div>

            <div className="bg-green-900/30 p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <h3 className="text-3xl font-bold text-green-300">PR 데드라인 관리</h3>
              </div>
              <p className="text-xl ml-12">D-day 시스템</p>
            </div>

            <div className="bg-purple-900/30 p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <h3 className="text-3xl font-bold text-purple-300">리뷰 참여율 향상</h3>
              </div>
              <p className="text-xl ml-12">대용량 PR 관리</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
