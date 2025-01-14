'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/container';
import { TrophyIcon, UsersIcon, StarIcon, HeartIcon } from 'lucide-react';

const stats = [
  {
    icon: TrophyIcon,
    value: '150+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various industries'
  },
  {
    icon: UsersIcon,
    value: '50+',
    label: 'Happy Clients',
    description: 'Trusted by businesses worldwide'
  },
  {
    icon: StarIcon,
    value: '5.0',
    label: 'Client Rating',
    description: 'Average rating from our satisfied clients'
  },
  {
    icon: HeartIcon,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Commitment to excellence in every project'
  }
];

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-primary/5">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-background text-center group hover:bg-primary/5 transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-medium mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 