'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface MotionLinkProps extends HTMLMotionProps<'a'> {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export function MotionLink({ children, ...props }: MotionLinkProps) {
  return (
    <motion.a {...props}>
      {children}
    </motion.a>
  );
} 