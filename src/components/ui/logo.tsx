'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <Link href="/" className="relative flex items-center">
      <motion.span
        className="text-2xl font-bold tracking-tighter"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="bg-gradient-to-r from-[#818cf8] via-[#B873F8] to-[#818cf8] bg-[200%_auto] animate-gradient bg-clip-text text-transparent">
          Wyveo
        </span>
      </motion.span>
    </Link>
  );
} 