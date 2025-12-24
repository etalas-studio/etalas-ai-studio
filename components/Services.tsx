import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Product Design",
    description: "We craft intuitive and stunning user interfaces that drive engagement. From wireframing to high-fidelity prototyping, our design process is user-centric.",
    tags: ["UI/UX", "Prototyping", "Design Systems", "User Research"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Robust, scalable, and high-performance websites built with the latest technologies. We specialize in modern frameworks to deliver lightning-fast experiences.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CMS Integration"]
  },
  {
    id: 3,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that put your business in your customers' hands. Seamless performance on iOS and Android.",
    tags: ["React Native", "iOS", "Android", "Flutter"]
  },
  {
    id: 4,
    title: "Digital Strategy",
    description: "Data-driven insights to guide your digital transformation. We help you define your roadmap, identify opportunities, and achieve sustainable growth.",
    tags: ["Market Analysis", "Product Roadmap", "Analytics", "Brand Positioning"]
  }
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-etalas-bg dark:bg-zinc-950 transition-colors duration-300">
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
                Our <br /> Expertise
              </h2>
              <p className="text-etalas-secondary dark:text-gray-400 mb-8 text-lg leading-relaxed">
                We cover the entire product lifecycle, from initial concept to final deployment and scaling.
              </p>
            </motion.div>
          </div>

          {/* Scrollable Right Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id} 
                  className="border-t border-gray-200 dark:border-zinc-800 last:border-b"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <button 
                    onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                    className="w-full py-10 flex justify-between items-center text-left group"
                  >
                    <span className="text-2xl md:text-4xl font-light group-hover:pl-4 transition-all duration-300 dark:text-white">
                      {service.title}
                    </span>
                    <span className="p-2 border border-gray-200 dark:border-zinc-700 rounded-full transition-colors group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black dark:text-white">
                      {activeId === service.id ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pt-2 pl-0 md:pl-4">
                          <p className="text-xl text-etalas-secondary dark:text-gray-400 mb-6 max-w-2xl leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {service.tags.map(tag => (
                              <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm font-medium dark:text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};