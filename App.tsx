import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Blog } from './components/Blog';
import { Team } from './components/Team';
import { Preloader } from './components/Preloader';
import { LanguageProvider, ThemeProvider } from './contexts';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Lenis from 'lenis';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  // Preloader Failsafe
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 
    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  // Handle Floating CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        // Prevent default only if we are on home view, otherwise Header handles it
        if (currentView === 'home') {
            e.preventDefault();
            const element = document.querySelector(anchor.hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [currentView]);

  const whatsappLink = "https://wa.me/62811297339?text=Hi%20etalas,%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-white dark:bg-zinc-950 min-h-screen text-etalas-text dark:text-gray-100 font-sans selection:bg-black selection:text-white transition-colors duration-300 relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Dynamic Background (White, Black, Purple combo) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
             {/* Base Noise */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
            
            {/* Purple Blob Top Right */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[100px] animate-blob dark:bg-purple-900/20 mix-blend-multiply dark:mix-blend-screen" />
            
            {/* Black/Gray Blob Bottom Left (Contrast) */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-[80px] animate-blob animation-delay-2000 dark:bg-gray-800/20" />
            
            {/* Center light accent */}
            <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
            <Header currentView={currentView} onNavigate={setCurrentView} />
            <main>
              {currentView === 'home' ? (
                <>
                  <Hero />
                  
                  {/* Marquee Section */}
                  <div className="py-12 border-y border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm overflow-hidden whitespace-nowrap">
                    <div className="inline-flex animate-marquee">
                       {[...Array(4)].map((_, i) => (
                         <div key={i} className="flex gap-16 mx-8 items-center text-4xl font-light text-gray-300 dark:text-zinc-700">
                            <span>STRATEGY</span>
                            <span className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10"></span>
                            <span>DESIGN</span>
                            <span className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10"></span>
                            <span>DEVELOPMENT</span>
                            <span className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10"></span>
                            <span>LAUNCH</span>
                            <span className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10"></span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <Services />
                  <TechStack />
                  <Process />
                  <Features />
                  {/* Testimonials removed as requested */}
                  <Pricing />
                  {/* Resources removed as requested */}
                  <Team />
                  <FAQ />
                </>
              ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Blog />
                </motion.div>
              )}
            </main>
            <Footer />
        </div>

        {/* Floating CTA */}
        <AnimatePresence>
          {showFloatingCTA && (
            <motion.a
              href={whatsappLink}
              target="_blank"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 z-40 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl flex items-center gap-3 pr-6 group"
            >
              <div className="bg-brand-600 rounded-full p-2 text-white">
                <MessageCircle size={20} />
              </div>
              <span className="font-bold text-sm">Let's Talk</span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;