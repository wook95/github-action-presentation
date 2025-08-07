export function Slide02() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-16">목차</h1>
      
      <div className="space-y-8 text-left">
        <div className="flex items-center space-x-6">
          <span className="text-4xl font-bold text-blue-400">1.</span>
          <span className="text-3xl text-white">IMPACT있는 자동화 사례</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="text-4xl font-bold text-blue-400">2.</span>
          <span className="text-3xl text-white">SaladLAB FE의 CI/CD</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="text-4xl font-bold text-blue-400">3.</span>
          <span className="text-3xl text-white">Action 그 너머에..</span>
        </div>
      </div>
    </div>
  );
}