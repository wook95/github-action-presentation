export function Slide10() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white mb-8">크롤링 자동화</h1>
      
      <div className="grid grid-cols-2 gap-12 max-w-5xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">데이터 수집</h2>
          <ul className="space-y-3 text-xl text-gray-300">
            <li>• 경쟁사 가격 모니터링</li>
            <li>• 시장 동향 분석</li>
            <li>• 뉴스 및 트렌드 수집</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">자동화 효과</h2>
          <ul className="space-y-3 text-xl text-gray-300">
            <li>• 24/7 모니터링</li>
            <li>• 실시간 알림</li>
            <li>• 데이터 정확성 향상</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-400">사례</h2>
          <ul className="space-y-3 text-xl text-gray-300">
            <li>• E-commerce 가격 추적</li>
            <li>• 부동산 시세 모니터링</li>
            <li>• SNS 브랜드 모니터링</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-400">도구</h2>
          <ul className="space-y-3 text-xl text-gray-300">
            <li>• Puppeteer</li>
            <li>• Selenium</li>
            <li>• BeautifulSoup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}