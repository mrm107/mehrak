import { motion } from 'framer-motion';

export const SkeletonOrder = () => (
  <div className="w-full bg-lightBlueGray rounded-2xl py-9 px-8 mb-5">
    <div className="flex justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <motion.div
          className="bg-gray-300 w-24 h-6 rounded-md"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.div
          className="bg-gray-300 w-20 h-6 ml-4 rounded-md"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      <motion.div
        className="bg-gray-300 w-32 h-6 mt-3 rounded-md"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
    <div className="mt-5 flex gap-4">
      <motion.div
        className="bg-gray-300 w-24 h-8 rounded-md"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="bg-gray-300 w-24 h-8 rounded-md"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="bg-gray-300 w-24 h-8 rounded-md"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="bg-gray-300 w-24 h-8 rounded-md"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  </div>
);
