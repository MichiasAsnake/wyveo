'use client';

import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { createCheckoutSession } from '@/lib/stripe';

interface ServiceFeature {
  id: string;
  name: string;
  included: boolean;
}

interface ServicePackage {
  id: string;
  type: 'LAUNCH' | 'GROW' | 'FULL_SERVICE';
  name: string;
  description: string;
  price: number;
  features: ServiceFeature[];
  popularChoice?: boolean;
}

const servicePackages: ServicePackage[] = [
  {
    id: 'launch',
    type: 'LAUNCH',
    name: 'Launch Package',
    description: 'Perfect for small businesses looking to establish their online presence with a professional website.',
    price: 100,
    features: [
      { id: '1', name: 'Custom Responsive Design', included: true },
      { id: '2', name: '5 Core Pages', included: true },
      { id: '3', name: 'SEO Optimization', included: true },
      { id: '4', name: 'Contact Form Integration', included: true },
      { id: '5', name: 'Analytics Setup', included: true },
    ],
  },
  {
    id: 'grow',
    type: 'GROW',
    name: 'Growth Package',
    description: 'Ideal for businesses ready to expand their digital footprint with advanced features.',
    price: 250,
    features: [
      { id: '1', name: 'Everything in Launch Package', included: true },
      { id: '2', name: 'Up to 10 Custom Pages', included: true },
      { id: '3', name: 'Blog/News Section', included: true },
      { id: '4', name: 'Advanced SEO Setup', included: true },
      { id: '5', name: 'Social Media Integration', included: true },
    ],
    popularChoice: true,
  },
  {
    id: 'full-service',
    type: 'FULL_SERVICE',
    name: 'Complete Solution',
    description: 'A comprehensive package for businesses needing a full-featured digital presence.',
    price: 400,
    features: [
      { id: '1', name: 'Everything in Growth Package', included: true },
      { id: '2', name: 'Custom Feature Development', included: true },
      { id: '3', name: 'E-commerce Integration', included: true },
      { id: '4', name: '6 Months Personal Support', included: true },
      { id: '5', name: 'Performance Optimization', included: true },
    ],
  },
];

function PackageCard({ pkg }: { pkg: ServicePackage }) {
  const handleGetStarted = async () => {
    try {
      await createCheckoutSession(pkg.id, pkg.name, pkg.price);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (you might want to show a toast notification here)
    }
  };

  return (
    <div className={`relative rounded-lg border bg-card p-6 shadow-sm ${
      pkg.popularChoice ? 'ring-2 ring-primary' : ''
    }`}>
      {pkg.popularChoice && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Popular Choice
        </span>
      )}

      <div className="mb-5">
        <h3 className="text-2xl font-bold">{pkg.name}</h3>
        <p className="mt-2 text-muted-foreground">{pkg.description}</p>
      </div>

      <div className="mb-5">
        <span className="text-4xl font-bold">${pkg.price}</span>
      </div>

      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature.id} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary" />
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleGetStarted}
        className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
      >
        Get Started
      </button>
    </div>
  );
}

export function ServicePackagesSection() {
  return (
    <AnimatedSection className="py-20 md:py-32">
      <Container>
        <div className="text-center">
          <h2>Choose Your Package</h2>
          <p className="mt-4 text-lg">
            Select the perfect package for your business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
} 
