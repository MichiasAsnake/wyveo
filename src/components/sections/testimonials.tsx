'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    content: "Working with this team was a game-changer for our business. They delivered a website that exceeded our expectations and truly captures our brand essence.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    rating: 5
  },
  {
    content: "The attention to detail and technical expertise is outstanding. Our new website has significantly improved our online presence and user engagement.",
    author: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    rating: 5
  },
  {
    content: "Professional, creative, and highly skilled team. They transformed our vision into a beautiful, functional website that our customers love.",
    author: "Emma Davis",
    role: "Founder, CreativeHub",
    rating: 5
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  }
};

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full" />
      </div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Don't just take our word for it - hear from some of our satisfied clients
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-background p-8 rounded-2xl shadow-sm"
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-serif">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg mb-6">
                {testimonial.content}
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 