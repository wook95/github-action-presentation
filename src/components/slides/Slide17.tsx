import { motion } from 'framer-motion';

export function Slide17() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center space-x-16">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.0 }}
          >
            <span className="text-white font-bold text-xl">PR 리뷰</span>
          </motion.div>
        </div>

        <div className="flex items-center">
          <div className="text-4xl text-white">→</div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-40 h-40 bg-blue-400 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <span className="text-white font-bold text-xl">PR 생성</span>
          </motion.div>
        </div>

        <div className="flex items-center">
          <div className="text-4xl text-white">→</div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-40 h-40 bg-blue-300 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <span className="text-white font-bold text-xl">배포</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
