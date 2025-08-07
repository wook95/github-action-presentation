export function Slide07() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-5xl font-bold text-white mb-12">네이버 사례의 성과</h1>
      
      <div className="grid grid-cols-2 gap-16 max-w-4xl">
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-blue-400">75%</div>
          <p className="text-2xl text-gray-300">배포 시간 단축</p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-green-400">90%</div>
          <p className="text-2xl text-gray-300">수동 작업 감소</p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-yellow-400">50%</div>
          <p className="text-2xl text-gray-300">오류 감소</p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-purple-400">3x</div>
          <p className="text-2xl text-gray-300">개발 생산성 향상</p>
        </div>
      </div>
    </div>
  );
}