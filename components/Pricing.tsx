import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts';
import { Tooltip } from './Tooltip';

const TOOLTIP_DATA: Record<string, string> = {
  "AI developer team": "Access to a dedicated team of AI-specialized engineers.",
  "Unlimited revisions": "We refine the work until it meets your exact requirements.",
  "Product strategy & roadmap": "Strategic planning to ensure long-term product success.",
  "Integrations & API's": "Seamless connectivity with third-party services and data sources.",
  "Communication via Slack": "Direct, real-time access to your project team via Slack.",
  "Weekly progress updates": "Comprehensive reports on development milestones every week.",
  "Functional MVP built with Lovable": "Rapid prototyping and development using Lovable's AI capabilities.",
  "Database + API integrations": "Secure database architecture and robust API connectivity.",
  "User authentication & onboarding": "Secure login systems and smooth user entry flows.",
  "Product design components": "Consistent, high-quality UI/UX components for your product.",
  
  // Indonesian Fallbacks (Optional matching)
  "Tim pengembang AI": "Akses ke tim insinyur khusus AI.",
  "Revisi tanpa batas": "Kami menyempurnakan pekerjaan hingga memenuhi kebutuhan Anda.",
  "Strategi produk & roadmap": "Perencanaan strategis untuk memastikan kesuksesan produk.",
  "Integrasi & API": "Konektivitas lancar dengan layanan pihak ketiga.",
  "Komunikasi via Slack": "Akses langsung real-time ke tim proyek Anda.",
  "Update progress mingguan": "Laporan komprehensif tentang pencapaian pengembangan.",
  "MVP fungsional dibangun dengan Lovable": "Pembuatan prototipe cepat menggunakan kemampuan AI Lovable.",
  "Database + Integrasi API": "Arsitektur database aman dan konektivitas API yang kuat.",
  "Otentikasi pengguna & onboarding": "Sistem login aman dan alur masuk pengguna yang lancar.",
  "Komponen desain produk": "Komponen UI/UX berkualitas tinggi dan konsisten."
};

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/628567234922?text=Hi%20etalas,%20I'm%20interested%20in%20your%20services.";

  const pricingItems = [
    {
      title: t('pricing.sprints.title'),
      subtitle: t('pricing.sprints.subtitle'),
      description: t('pricing.sprints.desc'),
      price: "$4,500",
      period: t('pricing.sprints.period'),
      features: t('pricing.features.sprints') as string[],
      buttonText: t('pricing.sprints.btn'),
      highlight: false
    },
    {
      title: t('pricing.mvp.title'),
      subtitle: t('pricing.mvp.subtitle'),
      description: t('pricing.mvp.desc'),
      price: "$9,500",
      period: t('pricing.mvp.period'),
      features: t('pricing.features.mvp') as string[],
      buttonText: t('pricing.mvp.btn'),
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900 relative transition-colors duration-300">
       {/* Subtle Background Mesh */}
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-medium tracking-tight mb-6 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('pricing.heading')}
          </motion.h2>
          <motion.p 
            className="text-xl text-etalas-secondary dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('pricing.subheading')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`p-8 md:p-10 rounded-3xl flex flex-col justify-between border transition-colors duration-300 ${
                item.highlight 
                  ? 'bg-[#121212] dark:bg-black text-white border-black dark:border-zinc-800 shadow-2xl shadow-brand-900/20' 
                  : 'bg-etalas-bg dark:bg-zinc-950 border-gray-200 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-zinc-700'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                    <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                      item.highlight ? 'bg-white/10 text-white' : 'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300'
                    }`}>
                        {item.title}
                    </span>
                    {item.highlight && (
                      <span className="text-xs font-bold bg-gradient-to-r from-brand-500 to-purple-500 text-white px-2 py-1 rounded shadow-lg shadow-brand-500/50">
                        POPULAR
                      </span>
                    )}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${!item.highlight ? 'dark:text-white' : ''}`}>{item.subtitle}</h3>
                <p className={`mb-8 leading-relaxed ${item.highlight ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.description}
                </p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-4xl font-bold ${!item.highlight ? 'dark:text-white' : ''}`}>{item.price}</span>
                  <span className={`text-sm ${item.highlight ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>{item.period}</span>
                </div>
                <p className={`text-sm mb-8 ${item.highlight ? 'text-gray-500' : 'text-gray-400 dark:text-gray-500'}`}>{t('pricing.pauseCancel')}</p>
                
                <div className={`w-full h-px opacity-10 mb-8 ${item.highlight ? 'bg-white' : 'bg-black dark:bg-white'}`} />

                <ul className="space-y-4 mb-10">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 rounded-full ${item.highlight ? 'bg-brand-500 text-white' : 'bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300'}`}>
                        <Check size={12} />
                      </div>
                      <Tooltip content={TOOLTIP_DATA[feature]}>
                        <span className={`text-sm cursor-help ${TOOLTIP_DATA[feature] ? 'border-b border-dotted border-gray-500/50' : ''} ${item.highlight ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>{feature}</span>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group ${
                  item.highlight 
                    ? 'bg-white text-black hover:bg-brand-50' 
                    : 'bg-black dark:bg-white text-white dark:text-black hover:bg-brand-600 dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-brand-500/30'
                }`}
              >
                {item.buttonText} 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};