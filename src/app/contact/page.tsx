'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/sections/contact-form';

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

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@wyveo.com',
    href: 'mailto:hello@wyveo.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,+CA',
  },
];

function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-8 md:grid-cols-3"
    >
      {contactInfo.map(({ icon: Icon, label, value, href }) => (
        <motion.div
          key={label}
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-medium">{label}</h3>
          <a
            href={href}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {value}
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function ContactPage() {
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
            <motion.div variants={containerVariants} className="text-center">
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Let's{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Work Together
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-muted-foreground"
              >
                Have a project in mind? We'd love to hear about it. Send us a
                message and we'll get back to you as soon as possible.
              </motion.p>
            </motion.div>
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection>
        <Container>
          <ContactInfo />
        </Container>
      </AnimatedSection>

      {/* Contact Form */}
      <ContactForm className="bg-muted/50" />
    </div>
  );
} 