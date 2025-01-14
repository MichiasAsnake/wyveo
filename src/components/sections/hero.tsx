'use client';

import Link from 'next/link';
import { SplineScene } from '@/components/ui/spline';
import { Spotlight } from '@/components/ui/spotlight';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ButtonCta, ShinyLink } from '@/components/ui/button-shiny';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
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

const textVariants = {
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

const buttonVariants = {
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
              <span className="text-primary">Expert Web Design</span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              We create stunning, modern websites that help businesses stand out and
              succeed in the digital world. From concept to launch, we're your partner
              in digital excellence.
            </motion.p>

            <motion.div variants={containerVariants} className="mt-10 flex gap-4">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ShinyLink
                  href="/services"
                  label="View Our Services"
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
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  See Our Work
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