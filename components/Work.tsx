import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AYANA Hotel Group",
    category: "Operational Systems · AI Integration",
    description: "Partnered with AYANA to streamline internal operational workflows across multiple properties — reducing manual coordination and improving data visibility for operations leadership.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=450&auto=format&fit=crop",
    tags: ["Hotel Group", "Multi-Property", "Workflow Automation"]
  },
  {
    id: 2,
    title: "Swiss-Belhotel",
    category: "Internal Tools · System Integration",
    description: "Built custom internal tools for Swiss-Belhotel's operational teams, connecting existing systems and reducing reliance on manual reporting processes across departments.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&h=450&auto=format&fit=crop",
    tags: ["International Brand", "System Integration", "Internal Tools"]
  },
  {
    id: 3,
    title: "Hospitality Management Platform",
    category: "Custom System Build",
    description: "End-to-end design and development of a hospitality management platform — from staff-facing tools to management dashboards with real-time operational visibility.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=450&auto=format&fit=crop",
    tags: ["Platform Build", "Dashboard", "Staff Tools"]
  },
  {
    id: 4,
    title: "Operational AI Workflows",
    category: "AI Automation",
    description: "Deployed AI-assisted workflows for hospitality operations teams — automating repetitive reporting, surfacing anomalies in operational data, and accelerating response times.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&h=450&auto=format&fit=crop",
    tags: ["AI Automation", "Reporting", "Operational Intelligence"]
  }
];

export const Work: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = direction === 'left' ? -400 : 400;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 size={12} />
              <span>Hospitality Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight dark:text-white mb-4">
              Enterprise clients.<br/>Real operations.
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              We have worked directly with major hospitality enterprises in Indonesia — giving us the operational depth that generic agencies simply don't have.
            </p>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-gray-900 dark:text-white"
                aria-label="Scroll Left"
            >
                <ArrowLeft size={20} />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-gray-900 dark:text-white"
                aria-label="Scroll Right"
            >
                <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {caseStudies.map((project, index) => (
            <div key={project.id} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] snap-center">
                <motion.div
                  className="group cursor-default h-full rounded-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video shadow-sm bg-gray-100 dark:bg-zinc-800">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        width="800"
                        height="450"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                        
                        {/* Tags overlay */}
                        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 dark:text-gray-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>
                    
                    <div className="px-2">
                        <div>
                            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-2 block">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-2xl font-bold dark:text-white mb-2 group-hover:text-brand-600 transition-colors">{project.title}</h3>
                            <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3">{project.category}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{project.description}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
          ))}
        </div>

        {/* Credibility Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-100 dark:border-zinc-800"
        >
          {[
            { value: "20+", label: "Years combined experience" },
            { value: "30+", label: "Enterprise systems delivered" },
            { value: "2", label: "Major hospitality groups served" },
            { value: "100%", label: "Hospitality focus" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
