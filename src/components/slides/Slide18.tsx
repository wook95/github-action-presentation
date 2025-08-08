import gemini from '@/assets/images/4-pr.png';
import Image from 'next/image';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';

export function Slide18() {
  return (
    <div className="flex items-center justify-center h-full space-x-16">
      <div className="flex-1">
        <Image src={gemini} alt="PR 리뷰 자동화 이미지" width={1666} height={450} className="w-full h-auto" priority />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold text-white mb-8">
          <div className="flex items-center justify-center">
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={3}
              showBorder={false}
              className="m-1!"
            >
              Gemini
            </GradientText>
            를 이용한
          </div>
          <br />
          PR 리뷰 자동화
        </h1>

        <div className="space-y-4 text-xl text-gray-300">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <span className="text-green-400">•</span>
            <span>prompt를 이용한 최적화 리뷰</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-green-400">•</span>
            <span>diff의 크기가 너무 클 경우 요약모드로 진행</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
