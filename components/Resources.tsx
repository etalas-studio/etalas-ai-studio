import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts';
import { Download, FileText } from 'lucide-react';
import { Button } from './Button';

export const Resources: React.FC = () => {
  const { t } = useLanguage();
  const resources = t('resources.items') as any[];

  return (
    <section id="resources" className="py-24 md:py-32 px-6 md:px-12 bg-etalas-bg dark:bg-zinc-900 transition-colors duration-300">
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
                  {t('resources.heading')}
                </h2>
                <p className="text-xl text-etalas-secondary dark:text-gray-400 text-lg leading-relaxed">
                  {t('resources.subheading')}
                </p>
              </motion.div>
           </div>

           {/* Scrollable Right Column */}
           <div className="lg:col-span-8 flex flex-col gap-6">
              {resources.map((item, index) => (
                <motion.div 
                   key={index}
                   className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-2xl gap-6 group hover:border-brand-500/50 transition-all duration-300"
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-brand-600">
                           <FileText size={24} />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold dark:text-white mb-1 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                           <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                        </div>
                    </div>
                    <Button variant="outline" className="shrink-0">
                       {t('resources.btn')} <Download size={16} className="ml-2" />
                    </Button>
                </motion.div>
              ))}
              
              <motion.div 
                className="mt-8 p-8 rounded-2xl bg-brand-600 text-white flex flex-col md:flex-row items-center justify-between gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                  <div>
                      <h4 className="text-xl font-bold mb-2">Want a custom audit?</h4>
                      <p className="text-brand-100">Get a free 15-min product assessment.</p>
                  </div>
                  <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-brand-600" href="https://wa.me/62811297339">
                      Book Assessment
                  </Button>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};