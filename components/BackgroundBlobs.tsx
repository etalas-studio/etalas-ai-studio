import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const BackgroundBlobs: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform values for different layers (parallax effect)
  const x1 = useTransform(x, (value) => value * -0.02);
  const y1 = useTransform(y, (value) => value * -0.02);
  
  const x2 = useTransform(x, (value) => value * 0.02);
  const y2 = useTransform(y, (value) => value * 0.02);

  const x3 = useTransform(x, (value) => value * 0.01);
  const y3 = useTransform(y, (value) => value * 0.01);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base Noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Purple Blob Top Right - Responsive Parallax */}
        <motion.div 
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[100px] dark:bg-purple-900/20 mix-blend-multiply dark:mix-blend-screen" 
            style={{ x: x1, y: y1 }}
        />
        
        {/* Black/Gray Blob Bottom Left - Responsive Parallax */}
        <motion.div 
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-[80px] dark:bg-gray-800/20"
            style={{ x: x2, y: y2 }}
        />
        
        {/* Center light accent */}
        <motion.div 
            className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]"
            style={{ x: x3, y: y3 }}
        />
    </div>
  );
};