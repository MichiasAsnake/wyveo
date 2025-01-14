'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ArrowRightIcon } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
};

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-12"
          >
            Let's create something amazing together. Our team is ready to bring your vision to life with cutting-edge design and technology.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Our Packages
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 