import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts';

export const Features: React.FC = () => {
  const { t } = useLanguage();
  const negatives = t('features.negatives') as string[];

  return (
    <section id="benefits" className="py-24 px-6 md:px-12 bg-etalas-bg dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium tracking-tight mb-6 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('features.heading')}
          </motion.h2>
          <motion.p 
            className="text-xl text-etalas-secondary dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('features.subheading')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Design Card */}
          <motion.div 
            className="p-10 rounded-3xl bg-[#EBE9E4] dark:bg-[#1a1a1c] min-h-[400px] flex flex-col justify-between relative overflow-hidden group border border-transparent dark:border-zinc-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.5 }}
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10">
               <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-full mb-6 font-serif italic text-xl">Aa</div>
               <h3 className="text-3xl font-bold mb-4 dark:text-white">{t('features.design.title')}</h3>
               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                 {t('features.design.desc')}
               </p>
            </div>
            <div className="mt-8 opacity-10 dark:opacity-5 text-[120px] leading-none font-serif italic absolute bottom-0 right-4 text-brand-900 dark:text-white">
              Design
            </div>
          </motion.div>

          {/* Operate Card */}
          <motion.div 
            className="p-10 rounded-3xl bg-[#121212] dark:bg-black text-white min-h-[400px] flex flex-col justify-between relative overflow-hidden group border border-transparent dark:border-zinc-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(255,255,255,0.05)" }}
            transition={{ duration: 0.5 }}
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-purple-500" />
            
            <div className="relative z-10">
               <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full mb-6 border border-white/20"></div>
               <h3 className="text-3xl font-bold mb-4">{t('features.operate.title')}</h3>
               <p className="text-lg text-gray-400 leading-relaxed">
                 {t('features.operate.desc')}
               </p>
            </div>
            <div className="mt-8 w-full h-32 border border-white/10 rounded-xl relative overflow-hidden bg-white/5">
                <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-30">
                    {[...Array(24)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-white/20"
                          initial={{ opacity: 0.1 }}
                          whileInView={{ opacity: [0.1, 0.5, 0.1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                        ></motion.div>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>

        {/* Negative List */}
        <motion.div 
          className="bg-white dark:bg-zinc-900 rounded-3xl p-12 border border-gray-100 dark:border-zinc-800 shadow-sm transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           <h3 className="text-xl font-medium mb-8 uppercase tracking-widest text-gray-400">{t('features.sayNo')}</h3>
           <div className="flex flex-wrap gap-4 md:gap-8">
             {negatives.map((item, i) => (
               <div key={item} className="group relative">
                 <div className="text-2xl md:text-4xl font-light text-gray-300 dark:text-zinc-600 transition-colors group-hover:text-gray-400 dark:group-hover:text-zinc-500">
                   {item}
                 </div>
                 <motion.div 
                   className="absolute top-1/2 left-0 w-full h-0.5 bg-red-400 origin-left"
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                 />
               </div>
             ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};