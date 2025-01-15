'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  completionDate: string;
  link: string;
  status: 'completed' | 'coming-soon';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    id: 'osteria-luna',
    title: 'Osteria Luna',
    description: 'A modern digital presence for an authentic Italian restaurant, featuring an elegant design and seamless dining experience.',
    imageUrl: '/work/osteria-luna/Osteria1.png',
    category: 'Restaurant',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    completionDate: '2024-01',
    link: '/work/osteria-luna',
    status: 'completed'
  },
  {
    id: 'polam-construction',
    title: 'Polam Construction',
    description: 'A premium website for a renowned construction company, showcasing 45 years of excellence in custom homes and renovations.',
    imageUrl: '/work/polam-construction/polam1.png',
    category: 'Construction',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    completionDate: '2024-02',
    link: '/work/polam-construction',
    status: 'completed'
  },
  {
    id: 'modern-ecommerce',
    title: 'Modern E-commerce Platform',
    description:
      'A full-featured e-commerce solution with seamless checkout and inventory management.',
    imageUrl: '/images/projects/ecommerce.jpg',
    category: 'E-commerce',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    completionDate: 'Coming Soon',
    link: '#',
    status: 'coming-soon'
  }
];

const categories = Array.from(new Set(projects.map((project) => project.category)));

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-card"
    >
      <div className="aspect-[16/9] overflow-hidden">
        {project.status === 'coming-soon' ? (
          <div className="flex h-full items-center justify-center bg-accent">
            <span className="text-xl font-medium text-accent-foreground">
              Coming Soon
            </span>
          </div>
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={640}
            height={360}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {project.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {project.completionDate}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {project.status !== 'coming-soon' && (
        <Link
          href={project.link}
          className="absolute inset-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span className="sr-only">View project {project.title}</span>
        </Link>
      )}
    </motion.div>
  );
}

interface ProjectGridProps {
  showFilters?: boolean;
  maxProjects?: number;
  className?: string;
}

export function ProjectGrid({
  showFilters = false,
  maxProjects = projects.length,
  className = '',
}: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const displayedProjects = filteredProjects.slice(0, maxProjects);

  return (
    <AnimatedSection className={className}>
      <Container>
        {showFilters && (
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900'
                  : 'bg-accent text-accent-foreground hover:bg-accent/80'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-accent-foreground hover:bg-accent/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
} 