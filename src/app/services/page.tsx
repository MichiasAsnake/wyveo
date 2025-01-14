import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ServicePackagesSection } from '@/components/sections/service-packages';

export const metadata: Metadata = {
  title: 'Services - Web Design & Development Solutions',
  description: 'Explore our comprehensive web design and development services. From custom websites to e-commerce solutions, we help businesses establish a strong online presence.',
  keywords: ['web design services', 'development packages', 'custom websites', 'e-commerce solutions', 'web development', 'digital solutions'],
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Container>
        <div className="py-20 md:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-center mb-8 md:text-5xl">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. Each service is tailored to deliver exceptional value and results.
          </p>
          <ServicePackagesSection />
        </div>
      </Container>
    </main>
  );
} 