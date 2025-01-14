'use client';

import { Variants } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { StarIcon } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion';

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
      stiffness: 50,
      damping: 15
    }
  }
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <MotionDiv
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
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
} 