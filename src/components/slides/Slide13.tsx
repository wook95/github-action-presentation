export function Slide13() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center space-x-16">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">PR 리뷰</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-4xl text-white">→</div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-40 h-40 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">PR 생성</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-4xl text-white">→</div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-40 h-40 bg-blue-300 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">배포</span>
          </div>
        </div>
      </div>
    </div>
  );
}
