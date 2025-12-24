import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      setTimeout(onComplete, 800);
    }
  }, [percentage, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-etalas-bg dark:bg-black flex flex-col items-center justify-center text-etalas-text dark:text-white"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-64 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand-600"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="text-4xl font-light font-mono">
        {percentage}%
      </div>
    </motion.div>
  );
};