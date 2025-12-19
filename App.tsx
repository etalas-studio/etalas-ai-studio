import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LanguageProvider, ThemeProvider } from './contexts';

function AppContent() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-etalas-bg dark:bg-zinc-950 min-h-screen text-etalas-text dark:text-gray-100 font-sans selection:bg-black selection:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <div className="py-12 border-y border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden whitespace-nowrap">
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

        <Process />
        <Features />
        <Pricing />
        <FAQ />

      </main>
      <Footer />
    </div>
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