import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Revolution",
    category: "App Development",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "EcoStream Platform",
    category: "Web Design",
    image: "https://picsum.photos/800/800?random=2"
  },
  {
    id: 3,
    title: "Urban Mobility",
    category: "Strategy & Dev",
    image: "https://picsum.photos/800/1000?random=3"
  },
  {
    id: 4,
    title: "HealthConnect",
    category: "Product Design",
    image: "https://picsum.photos/800/600?random=4"
  }
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-medium tracking-tight dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>
          <motion.a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-black dark:border-white pb-1 dark:text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VIEW ALL PROJECTS <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3] shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 dark:text-white">
                    <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="flex justify-between items-start border-t border-gray-200 dark:border-zinc-800 pt-6">
                <h3 className="text-2xl font-medium dark:text-white">{project.title}</h3>
                <span className="text-etalas-secondary dark:text-gray-400">{project.category}</span>
              </div>
              <div className="h-[1px] bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-6" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
            <a href="#" className="flex items-center gap-2 text-sm font-semibold border-b border-black dark:border-white pb-1 w-max dark:text-white">
            VIEW ALL PROJECTS <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};