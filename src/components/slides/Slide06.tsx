import SplitText from '@/components/ui/SplitText';
import CountUp from '@/components/ui/CountUp';

export function Slide06() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <SplitText
        text="네이버의 문제"
        className="text-6xl font-bold text-white mb-8"
        splitType="words"
        delay={90}
        duration={0.7}
        from={{ opacity: 0, y: 16 }}
        to={{ opacity: 1, y: 0 }}
      />

      <div className="max-w-4xl mx-auto text-white space-y-8">
        <div className="text-center space-y-6">
          <SplitText
            text="현재 상황 → 문제점 → 개선 필요성"
            className="text-4xl font-bold mb-8"
            splitType="words"
            delay={80}
            duration={0.6}
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-300">PR 병합 지연</h3>
              <p className="text-xl">
                평균 <CountUp from={0} to={4} duration={1} className="inline-block" />일 소요
              </p>
            </div>

            <div className="bg-orange-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">참여율 저조</h3>
              <p className="text-xl">
                리뷰 참여율 <CountUp from={0} to={67} duration={1} className="inline-block" />%
              </p>
            </div>

            <div className="bg-yellow-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">응답 지연</h3>
              <p className="text-xl">리뷰 응답 지연 문제</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
