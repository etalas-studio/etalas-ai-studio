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
    <section id="faq" className="py-24 px-6 md:px-12 bg-etalas-bg dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
             <motion.h2 
               className="text-4xl md:text-6xl font-medium tracking-tight mb-8 dark:text-white"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               {t('faq.heading')}<br/><span className="text-gray-400">{t('faq.heading2')}</span>
             </motion.h2>
             <motion.p 
               className="text-lg text-etalas-secondary dark:text-gray-400"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
             >
               {t('faq.contact')} <a href="#" className="underline text-black dark:text-white">{t('faq.contactLink')}</a>.
             </motion.p>
          </div>

          <div className="lg:w-2/3">
            {faqData.map((section, sIndex) => (
              <motion.div 
                key={sIndex} 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sIndex * 0.1 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">{section.category}</h3>
                <div className="flex flex-col">
                  {section.items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-zinc-800">
                      <button 
                        onClick={() => setActiveQuestion(activeQuestion === item.q ? null : item.q)}
                        className="w-full py-6 flex justify-between items-center text-left group hover:bg-white/50 dark:hover:bg-white/5 transition-colors px-2 rounded-lg"
                      >
                        <span className="text-lg md:text-xl font-medium pr-8 dark:text-white">{item.q}</span>
                        <span className="flex-shrink-0 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                          {activeQuestion === item.q ? <Minus size={20} /> : <Plus size={20} />}
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
                            <div className="pb-6 px-2 text-etalas-secondary dark:text-gray-400 leading-relaxed">
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