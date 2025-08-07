import SplitText from '@/components/ui/SplitText';

export function Slide01() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <div className="text-center space-y-8">
        <SplitText
          text="Github Action"
          className="text-8xl font-bold text-white mb-8"
          delay={210}
          duration={1.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <h2 className="text-4xl font-medium text-gray-300">SaladLAB FE</h2>
      </div>

      <div className="absolute bottom-20 right-20">
        <p className="text-lg text-gray-400">이욱창</p>
      </div>
    </div>
  );
}
