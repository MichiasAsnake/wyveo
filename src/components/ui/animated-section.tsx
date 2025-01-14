'use client';

import { motion } from 'framer-motion';
import { type AnimatedElementProps } from '@/types';

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedElementProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
} 