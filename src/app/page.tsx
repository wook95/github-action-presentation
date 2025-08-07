import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold mb-4">Github Action</h1>
        <p className="text-2xl text-gray-300 mb-8">SaladLAB FE</p>

        <div className="space-y-4">
          <Link
            href="/slide/1"
            className="block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-xl font-medium"
          >
            발표 시작하기
          </Link>
        </div>

        <div className="mt-12 text-gray-500">
          <p className="text-sm mt-2">이욱창</p>
        </div>
      </div>
    </div>
  );
}
