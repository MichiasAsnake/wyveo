'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { ProjectGrid } from '@/components/sections/project-grid';

export function WorkPreviewSection() {
  return (
    <AnimatedSection className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Recent Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore some of our latest projects and see how we help businesses
            achieve their digital goals.
          </p>
        </div>

        <ProjectGrid maxProjects={3} showFilters={false} className="mt-16" />

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </AnimatedSection>
  );
} 