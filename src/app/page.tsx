import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold mb-4">Github Action</h1>
        <p className="text-2xl text-gray-300 mb-8">SaladLAB FE 발표 자료</p>

        <div className="space-y-4">
          <Link
            href="/slide/1"
            className="block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-xl font-medium"
          >
            발표 시작하기
          </Link>

          <div className="text-sm text-gray-400 mt-4">
            <p>네비게이션: 화살표 키 ←→ 또는 클릭</p>
            <p>홈으로: ESC 키</p>
          </div>
        </div>

        <div className="mt-12 text-gray-500">
          <p>총 20개의 슬라이드</p>
          <p className="text-sm mt-2">발표자: 이욱창</p>
        </div>
      </div>
    </div>
  );
}
