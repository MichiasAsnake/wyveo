import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/motion';
import { ProjectGrid } from '@/components/sections/project-grid';

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

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-20 py-20 md:gap-32 md:py-32">
      {/* Hero Section */}
      <AnimatedSection>
        <Container>
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <MotionH1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Featured Work
              </span>
            </MotionH1>
            <MotionP
              variants={itemVariants}
              className="mt-6 text-lg text-muted-foreground"
            >
              Explore our portfolio of successful projects. Each project represents
              our commitment to excellence, innovation, and delivering real value
              to our clients.
            </MotionP>
            <MotionDiv variants={itemVariants} className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </MotionDiv>
          </MotionDiv>
        </Container>
      </AnimatedSection>

      {/* Projects Grid */}
      <ProjectGrid showFilters={true} />
    </div>
  );
} 