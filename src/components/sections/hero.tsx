'use client';

import Link from 'next/link';
import { SplineScene } from '@/components/ui/spline';
import { Spotlight } from '@/components/ui/spotlight';
import { Container } from '@/components/ui/container';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ButtonCta, ShinyLink } from '@/components/ui/button-shiny';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 10 }
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
};

export function HeroSection() {
  return (
    <section className="relative bg-background py-2 md:py-14">
      <div className="hero-gradient absolute inset-0" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
      
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center"
          >
            <motion.h1
              variants={titleVariants}
              className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Transform Your Online Presence with{' '}
              <span className="text-[#818cf8]">Expert Web Design</span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              I create stunning, modern websites that help businesses stand out and
              succeed in the digital world. As your dedicated developer, I'll guide you
              through every step from concept to launch.
            </motion.p>

            <motion.div variants={containerVariants} className="mt-10 flex gap-4">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ShinyLink
                  href="/services"
                  label="View My Services"
                >
                  <ArrowRight className="w-5 h-5 text-[#B873F8]" />
                </ShinyLink>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/work"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-400 bg-background px-8 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:border-neutral-600 dark:hover:bg-neutral-800"
                >
                  See My Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.5
            }}
            className="relative h-[400px] lg:h-[600px] xl:h-[700px]"
          >
            <div className="absolute inset-0 scale-[0.7] lg:scale-[0.85]">
              <SplineScene 
                scene="https://prod.spline.design/pgVhV4WjjZmub8Vx/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 