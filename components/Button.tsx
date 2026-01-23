import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  rel?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href, 
  target, 
  type = 'button', 
  rel,
  ariaLabel
}) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  
  // Use MotionValues to avoid React re-renders on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth magnetic effect
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!ref.current) return;
    const element = ref.current;
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center, scaled down for subtle effect
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative px-8 py-4 rounded-full text-sm font-semibold transition-colors duration-300 overflow-hidden group inline-flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-etalas-text text-etalas-bg border border-etalas-text hover:bg-brand-600 hover:border-brand-600 hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-brand-500 dark:hover:border-brand-500 dark:hover:text-white",
    outline: "bg-transparent text-etalas-text border border-etalas-text/30 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50 dark:text-white dark:border-zinc-700 dark:hover:border-white dark:hover:text-white dark:hover:bg-zinc-800",
    ghost: "bg-transparent text-etalas-text hover:bg-gray-100 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const motionProps = {
    style: { x: springX, y: springY },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: onClick
  };

  if (href) {
    // Automatically add noopener noreferrer for external blank targets if not specified
    const finalRel = rel || (target === '_blank' ? 'noopener noreferrer' : undefined);
    
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={finalRel}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};