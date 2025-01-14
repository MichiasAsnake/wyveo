'use client';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { SplineScene } from '@/components/ui/spline';

const teamMembers = [
  {
    name: 'Michias Asnake',
    role: 'Founder & CEO',
    image: '/images/team/headshot1.png',
    bio: 'With over 4 years of experience in web development and design, Micky leads our team with passion and innovation.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    image: '/images/team/sarah.jpg',
    bio: 'Sarah brings creativity and user-centered design principles to every project, ensuring beautiful and functional results.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: '/images/team/michael.jpg',
    bio: 'Michael oversees all technical aspects of our projects, specializing in modern web technologies and performance optimization.',
  },
  {
    name: 'Emma Wilson',
    role: 'Project Manager',
    image: '/images/team/emma.jpg',
    bio: 'Emma ensures smooth project delivery and excellent client communication throughout the development process.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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
    <div className="flex flex-col gap-20 md:gap-32 md">
      {/* Hero Section */}
      <AnimatedSection>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-7xl px-6 sm: lg:px-8"
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
                      <span className="text-lg font-bold">10+</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Years of Experience</h3>
                      <p className="text-sm">Delivering exceptional web solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="text-lg font-bold">200+</span>
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
                className="relative h-[800px] hidden lg:block"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <SplineScene 
                    scene="https://prod.spline.design/QGcM3hSyFNjeLUJv/scene.splinecode"
                    className="w-full -translate-y-48 -translate-x-36"
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
              className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg bg-card"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </AnimatedSection>
    </div>
  );
} 