export function Slide16() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">CI/CD</h1>
      
      <div className="space-y-8 max-w-4xl">
        <div className="w-full h-64 bg-gray-700 rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center">
          <p className="text-gray-400 text-xl">CI/CD 파이프라인 이미지</p>
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