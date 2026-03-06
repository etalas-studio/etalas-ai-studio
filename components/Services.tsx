import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "AI-Powered Operational Systems",
    description: "Custom operational systems that use AI to automate repetitive tasks, surface insights from your data, and reduce manual work across departments. We build tools that hotel operations leaders actually rely on — from daily reporting to predictive maintenance workflows.",
    tags: ["AI Automation", "Workflow Intelligence", "Operational Dashboards", "Predictive Analytics"]
  },
  {
    id: 2,
    title: "Custom Internal Tools",
    description: "Purpose-built internal applications for hotel teams — from housekeeping management and maintenance ticketing to staff scheduling and procurement tracking. We replace the spreadsheets and WhatsApp groups with systems designed for how your teams actually work.",
    tags: ["Staff Portals", "Housekeeping Systems", "Maintenance Management", "Procurement Tools"]
  },
  {
    id: 3,
    title: "System Integrations",
    description: "Your hotel already runs on PMS, POS, ERP, and a dozen other tools. We connect them. Whether it's syncing guest data across platforms, automating reporting from multiple systems, or bridging legacy software with modern APIs — we make your stack work together.",
    tags: ["PMS Integration", "POS Connectivity", "ERP Bridges", "Legacy System Modernisation"]
  },
  {
    id: 4,
    title: "Workflow Automation",
    description: "We identify the highest-impact manual workflows in your operations and automate them — guest communication flows, internal approvals, shift handovers, incident reporting, and more. Less manual coordination, fewer errors, faster resolution.",
    tags: ["Process Automation", "Approval Workflows", "Notification Systems", "Reporting Automation"]
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
                What we <br /> build
              </h2>
              <p className="text-etalas-secondary dark:text-gray-400 mb-8 text-lg leading-relaxed">
                Purpose-built for hospitality operations — not adapted from generic software templates.
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
