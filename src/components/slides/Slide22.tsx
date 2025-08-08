import { motion } from 'framer-motion';

export function Slide22() {
  return (
    <div className="flex flex-col justify-center h-full space-y-8 px-8">
      <div className="space-y-6">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.0 }}
        >
          <h3 className="text-2xl font-bold text-blue-400">1.</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            깃헙 액션을 로컬에서 실행하고 싶다는 욕구를 느껴보셨나요?
            <br />
            <span className="text-white font-semibold">(act, docker)</span>
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-green-400">2.</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            이미 만들어진 멋진 액션들을 보고 싶진 않나요?
            <br />
            <span className="text-white font-semibold">(26.5k의 스타를 받은 저장소가 준비되어있습니다)</span>
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400">3.</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            깃헙 클라우드 컴퓨터 말고 직접 aws의 컴퓨터에서 작업을 실행시키고 싶으신가요?
            <br />
            <span className="text-white font-semibold">(커스텀 러너)</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
