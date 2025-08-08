export function Slide12() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">토스 페이먼츠</h1>

      <div className="max-w-5xl mx-auto text-white space-y-8">
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-6 text-green-300 text-center">개선 효과</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-green-300">리뷰 시간</h3>
                <p className="text-xl">하루 내외로 단축</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-blue-300">코멘트 수</h3>
                <p className="text-xl">2배 이상 증가</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-purple-300">운영 이슈</h3>
                <p className="text-xl">90% 감소</p>
              </div>
            </div>
          </div>
          {/* 
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-6 text-purple-300 text-center">vs 네이버</h2>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-orange-300">네이버</h3>
                <p className="text-xl">리뷰어 할당</p>
              </div>
              <div className="text-4xl font-bold text-white">VS</div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-cyan-300">토스</h3>
                <p className="text-xl">프로세스 전반 최적화</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
