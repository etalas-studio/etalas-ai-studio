import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts';

export const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const { t } = useLanguage();

  const faqData = [
    {
      category: t('faq.general'),
      items: t('faq.items.general') as any[]
    },
    {
      category: t('faq.process'),
      items: t('faq.items.process') as any[]
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-etalas-bg dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
           {/* Sticky Left Column */}
           <div className="lg:col-span-4 lg:sticky lg:top-32">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 dark:text-white">
                 {t('faq.heading')}<br/><span className="text-gray-400">{t('faq.heading2')}</span>
               </h2>
               <p className="text-xl text-etalas-secondary dark:text-gray-400 leading-relaxed">
                 {t('faq.contact')} <a href="#" className="underline text-black dark:text-white hover:text-brand-600 transition-colors">{t('faq.contactLink')}</a>.
               </p>
             </motion.div>
           </div>

           {/* Scrollable Right Column */}
           <div className="lg:col-span-8 flex flex-col gap-12">
            {faqData.map((section, sIndex) => (
              <motion.div 
                key={sIndex} 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sIndex * 0.1 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-8 border-b border-gray-200 dark:border-zinc-800 pb-4">
                  {section.category}
                </h3>
                <div className="flex flex-col">
                  {section.items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-zinc-800">
                      <button 
                        onClick={() => setActiveQuestion(activeQuestion === item.q ? null : item.q)}
                        className="w-full py-8 flex justify-between items-center text-left group hover:bg-white/50 dark:hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl"
                      >
                        <span className="text-xl md:text-2xl font-light pr-8 dark:text-white">{item.q}</span>
                        <span className="flex-shrink-0 p-1 rounded-full border border-gray-200 dark:border-zinc-700 text-gray-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                          {activeQuestion === item.q ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {activeQuestion === item.q && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-8 pl-4 pr-12 text-lg text-etalas-secondary dark:text-gray-400 leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};