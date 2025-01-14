'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { motion, type Variants } from 'framer-motion';
import { SplineScene } from '@/components/ui/spline';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Michias Asnake',
    role: 'Founder & CEO',
    bio: 'With over 4 years of experience in web development and design, Micky leads our team with passion and innovation.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    bio: 'Sarah brings creativity and user-centered design principles to every project, ensuring beautiful and functional results.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    bio: 'Michael oversees all technical aspects of our projects, specializing in modern web technologies and performance optimization.',
  },
  {
    name: 'Emma Wilson',
    role: 'Project Manager',
    bio: 'Emma ensures smooth project delivery and excellent client communication throughout the development process.',
  },
];

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

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-12 md:gap-32 md:py-16">
      {/* Hero Section */}
      <AnimatedSection>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={containerVariants}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  We Create Digital Excellence
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  At Wyveo, we're passionate about creating exceptional digital
                  experiences that help businesses thrive in the modern world. Our
                  team of experts combines creativity, technical expertise, and
                  strategic thinking to deliver outstanding results.
                </p>
                <div className="mt-8 flex flex-col gap-4 text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-lg font-bold">2+</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Years of Experience</h3>
                      <p className="text-sm">Delivering exceptional web solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-lg font-bold">10+</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Projects Completed</h3>
                      <p className="text-sm">For clients worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative h-[600px] hidden lg:block"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <SplineScene 
                    scene="https://prod.spline.design/QGcM3hSyFNjeLUJv/scene.splinecode"
                    className="w-full -translate-y-40 -translate-x-36"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="bg-muted/50">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="py-24 sm:py-32"
          >
            <div className="mx-auto max-w-2xl text-center">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Meet Our Team
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="mt-4 text-muted-foreground"
              >
                Our talented team of experts is dedicated to bringing your vision
                to life with creativity, technical excellence, and attention to
                detail.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="rounded-lg border-2 bg-card p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                  <p className="mt-4 text-muted-foreground">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </AnimatedSection>
    </div>
  );
} 
