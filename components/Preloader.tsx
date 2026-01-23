import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Drastically faster preloader (max 800ms total) for better UX/Ad Scores
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Jump faster
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      // Shorter completion delay
      setTimeout(onComplete, 200);
    }
  }, [percentage, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-etalas-bg dark:bg-black flex flex-col items-center justify-center text-etalas-text dark:text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
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