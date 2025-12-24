import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts';
import { Quote, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const reviews = t('testimonials.reviews') as any[];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#0c0c0e] transition-colors duration-300">
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
                 <div className="text-brand-600 dark:text-brand-400 mb-6">
                    <Quote size={48} />
                 </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 dark:text-white">
                  {t('testimonials.heading')}
                </h2>
                <p className="text-xl text-etalas-secondary dark:text-gray-400 text-lg leading-relaxed">
                  {t('testimonials.subheading')}
                </p>
              </motion.div>
           </div>

           {/* Scrollable Right Column */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
             {reviews.map((review, index) => (
               <motion.div 
                 key={index}
                 className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col justify-between h-full"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1)" }}
               >
                 <div>
                   {/* Metric Highlight */}
                   <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-bold">
                      <TrendingUp size={14} />
                      {review.metric}
                   </div>

                   <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base">
                     "{review.text}"
                   </p>
                 </div>
                 
                 <div className="flex items-center gap-3 mt-auto border-t border-gray-50 dark:border-zinc-800 pt-6">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                     {review.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-sm dark:text-white">{review.name}</h4>
                     <p className="text-xs text-gray-500 dark:text-gray-400">{review.role}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};