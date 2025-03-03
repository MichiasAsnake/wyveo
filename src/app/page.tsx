import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { ServicePackagesSection } from '@/components/sections/service-packages';
import { WorkPreviewSection } from '@/components/sections/work-preview';
import { FeaturesSection } from '@/components/sections/features';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ProcessSection } from '@/components/sections/process';
import { StatsSection } from '@/components/sections/stats';
import { CTASection } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Independent Web Developer - Modern Web Design & Development',
  description: 'Transform your digital presence with expert web design and development services. I create modern, responsive websites that drive results.',
  keywords: ['freelance web developer', 'web design', 'web development', 'responsive design', 'modern websites', 'digital solutions', 'custom web development'],
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WorkPreviewSection />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <ServicePackagesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
