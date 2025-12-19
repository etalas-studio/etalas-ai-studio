import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, RefreshCw, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts';

const stepsIcons = [
  { icon: <Hammer className="w-6 h-6" />, color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" },
  { icon: <RefreshCw className="w-6 h-6" />, color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" },
  { icon: <TrendingUp className="w-6 h-6" />, color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400" },
  { icon: <Users className="w-6 h-6" />, color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400" }
];

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const stepsData = t('process.steps') as any[];

  const steps = stepsData.map((step, index) => ({
    ...step,
    ...stepsIcons[index]
  }));

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900 relative transition-colors duration-300">
      <div className="container mx-auto">
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium tracking-tight mb-6 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('process.heading')}
          </motion.h2>
          <motion.p 
            className="text-xl text-etalas-secondary dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('process.subheading')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-etalas-bg dark:bg-zinc-950 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                borderColor: "rgba(99, 102, 241, 0.4)"
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold dark:text-white">{step.title}</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-300">{step.subtitle}</h4>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};