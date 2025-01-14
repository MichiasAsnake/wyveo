'use client';

import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { motion, type Variants } from 'framer-motion';
import { ProjectGrid } from '@/components/sections/project-grid';
import { ShinyLink } from '@/components/ui/button-shiny';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-20 py-20 md:gap-32 md:py-32">
      {/* Hero Section */}
      <AnimatedSection>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Featured Work
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-muted-foreground"
            >
              Explore our portfolio of successful projects. Each project represents
              our commitment to excellence, innovation, and delivering real value
              to our clients.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10">
              <ShinyLink
                href="#contact"
                label="Start Your Project"
              >
                <ArrowRight className="w-5 h-5 text-[#B873F8]" />
              </ShinyLink>
            </motion.div>
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* Projects Grid */}
      <ProjectGrid showFilters={true} />
    </div>
  );
} 