import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, href, target, type = 'button', rel }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    // Cast to HTMLElement to access getBoundingClientRect safely
    const element = e.currentTarget as HTMLElement;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.2;
    const y = (e.clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden group inline-flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-etalas-text text-etalas-bg border border-etalas-text hover:bg-brand-600 hover:border-brand-600 hover:text-white dark:bg-white dark:text-black dark:border-white dark:hover:bg-brand-500 dark:hover:border-brand-500 dark:hover:text-white",
    outline: "bg-transparent text-etalas-text border border-etalas-text/30 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50 dark:text-white dark:border-zinc-700 dark:hover:border-white dark:hover:text-white dark:hover:bg-zinc-800",
    ghost: "bg-transparent text-etalas-text hover:bg-gray-100 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    whileHover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: onClick
  };

  if (href) {
    // Automatically add noopener noreferrer for external blank targets if not specified
    const finalRel = rel || (target === '_blank' ? 'noopener noreferrer' : undefined);
    
    return (
      <motion.a
        href={href}
        target={target}
        rel={finalRel}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};