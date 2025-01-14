'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { LightbulbIcon, PencilRulerIcon, CodeIcon, RocketIcon } from 'lucide-react';

const steps = [
  {
    icon: LightbulbIcon,
    title: 'Discovery',
    description: 'We start by understanding your goals, target audience, and unique requirements to create a tailored strategy.'
  },
  {
    icon: PencilRulerIcon,
    title: 'Design',
    description: 'Our designers create stunning visuals and intuitive interfaces that align with your brand and engage your users.'
  },
  {
    icon: CodeIcon,
    title: 'Development',
    description: 'We bring designs to life with clean, efficient code and cutting-edge technologies for optimal performance.'
  },
  {
    icon: RocketIcon,
    title: 'Launch',
    description: 'After thorough testing, we deploy your website and provide ongoing support to ensure continued success.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function ProcessSection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative flex gap-8 items-start"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-primary/20" />
                )}

                {/* Step Number and Icon */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 