import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const titleWords = t('hero.titleStart').split(' ');

  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-300 text-sm font-medium mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Sparkles size={16} />
            </motion.div>
            <span>{t('hero.tag')}</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-8 dark:text-white"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {titleWords.map((word: string, index: number) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.2em]"
                variants={{
                  hidden: { opacity: 0, y: 40, rotate: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    transition: { type: "spring", stiffness: 100, damping: 12 }
                  }
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              className="inline-block italic bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
              }}
            >
              AI
            </motion.span>
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mt-12">
             <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-etalas-secondary dark:text-gray-400 leading-relaxed mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="#process">{t('hero.startBuilding')}</Button>
                <Button variant="outline" href="#pricing">{t('hero.viewPricing')}</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:flex"
            >
              <a href="#process" className="p-4 rounded-full border border-brand-100 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg shadow-brand-500/10 text-brand-600 dark:text-white hover:scale-110 transition-transform duration-300">
                 <ArrowRight size={32} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Abstract Element - Enhanced with Color */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-brand-100/40 via-purple-100/30 to-transparent dark:from-brand-900/20 dark:via-purple-900/10 rounded-full blur-3xl -z-10 animate-blob mix-blend-multiply dark:mix-blend-screen filter opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-b from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000 pointer-events-none" />
    </section>
  );
};