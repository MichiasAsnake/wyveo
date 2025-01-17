'use client';

import { motion, type Variants } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { CodeIcon, PaintbrushIcon, SparklesIcon, GaugeIcon, ShieldCheckIcon, HeartHandshakeIcon, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: PaintbrushIcon,
    title: 'Beautiful Design',
    description: "I create stunning visuals that capture your brand's essence and engage your audience from the first click."
  },
  {
    icon: CodeIcon,
    title: 'Clean Code',
    description: 'I write expertly crafted, maintainable code that ensures your website runs smoothly and efficiently.'
  },
  {
    icon: GaugeIcon,
    title: 'Lightning Fast',
    description: 'I optimize performance to keep your visitors engaged and improve search engine rankings.'
  },
  {
    icon: SparklesIcon,
    title: 'Modern Tech Stack',
    description: 'I use the latest technologies and frameworks to build future-proof solutions that scale with your business.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Reliable',
    description: 'I implement robust security features and follow best practices to keep your website and data protected.'
  },
  {
    icon: HeartHandshakeIcon,
    title: 'Personal Support',
    description: 'I provide direct, ongoing support to ensure your website stays up-to-date and performs at its best.'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
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

export function FeaturesSection() {
  return (
    <section className="relative py-20 bg-background">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We combine creativity with technical expertise to deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group p-8 rounded-2xl bg-background border transition-all hover:shadow-lg"
            >
              <div className="mb-5 inline-block rounded-lg bg-primary/10 p-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="absolute inset-0 rounded-2xl transition-all group-hover:border-primary/50" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 