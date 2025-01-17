'use client';

import { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { createCheckoutSession } from '@/lib/stripe';
import { RocketIcon, TrendingUpIcon, StarIcon, ArrowRightIcon, SparklesIcon, BrainIcon, UsersIcon, HeartIcon, CheckCircle2Icon, TrophyIcon, BarChart3Icon, LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { ButtonCta, ShinyLink } from '@/components/ui/button-shiny';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const stats: Stat[] = [
  { icon: TrophyIcon, value: '150+', label: 'Successful Projects' },
  { icon: UsersIcon, value: '50+', label: 'Happy Clients' },
  { icon: BarChart3Icon, value: '200%', label: 'Average ROI' },
  { icon: CheckCircle2Icon, value: '98%', label: 'Client Satisfaction' }
];

const processSteps: ProcessStep[] = [
  {
    icon: BrainIcon,
    title: "1. Choose & Purchase",
    description: "Select the package that fits your needs. After purchase, we'll contact you within 24 hours to kick off your project and gather initial requirements."
  },
  {
    icon: SparklesIcon,
    title: "2. Strategic Planning",
    description: "We dive deep into your brand's DNA, understanding your goals, audience, and market position to craft a tailored strategy."
  },
  {
    icon: UsersIcon,
    title: "3. Creative Development",
    description: "Our team of creative minds brings your vision to life through innovative design, compelling content, and cutting-edge technology."
  },
  {
    icon: HeartIcon,
    title: "4. Review & Refinement",
    description: "We collaborate closely with you to review and refine every aspect of the project, ensuring it perfectly aligns with your vision."
  },
  {
    icon: StarIcon,
    title: "5. Launch & Support",
    description: "Once everything is perfect, we launch your project and provide ongoing support to ensure your continued success."
  }
];

interface Package {
  id: string;
  name: string;
  price: number;
  icon: LucideIcon;
  description: string;
  includes: string[];
  popularChoice?: boolean;
}

const packages: Package[] = [
  {
    id: 'launch',
    name: 'Launch',
    price: 100,
    icon: RocketIcon,
    description: "You're looking to start with brand building. We'll help you get started with a solid strategy.",
    includes: [
      'Strategy Guide',
      'Research',
      'Planning',
      'Branding Suite',
      'Brand Identity'
    ],
    popularChoice: false
  },
  {
    id: 'grow',
    name: 'Grow',
    price: 250,
    icon: TrendingUpIcon,
    description: "You've got your branding down, but you need that boost to get you where you want to be.",
    includes: [
      'Strategy Guide',
      'Research',
      'Planning',
      'Audience Development',
      'Campaign',
      'Media Management'
    ],
    popularChoice: true
  },
  {
    id: 'full-service',
    name: 'Full Service',
    price: 400,
    icon: StarIcon,
    description: "Headwords is now your company's user-specified branding + design documents team. Want it? We've got you covered.",
    includes: [
      'Strategy Guide',
      'Research',
      'Planning',
      'Branding Suite',
      'Brand Identity',
      'Planning Tools',
      'Audience Development',
      'Campaign',
      'Media Management'
    ],
    popularChoice: false
  }
];

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function PackagesPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePurchase = async (pkg: Package) => {
    try {
      setLoading(pkg.id);
      await createCheckoutSession(pkg.id, pkg.name, pkg.price);
    } catch (error) {
      console.error('Purchase error:', error);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <main>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-center mb-28 mt-28"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Choose one of<br />our packages.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the package that best fits your needs. Each package is designed to deliver exceptional value and results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid gap-8 md:grid-cols-3 mb-32"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={cn(
                'relative rounded-2xl p-8 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md flex flex-col border border-white/40',
                pkg.popularChoice && 'ring-1 ring-[#818cf8] ring-offset-2'
              )}
            >
              {/* Price Tag */}
              <div className="absolute -top-4 -right-4 bg-neutral-950 text-white border-2 rounded-full p-5 shadow-lg">
                <span className="text-xl font-bold">${(pkg.price / 1000)}k</span>
              </div>

              {/* Icon and Title */}
              <div className="mb-8">
                <div className="bg-neutral-800/10 p-8 rounded-full w-fit mb-6">
                  <pkg.icon className="w-12 h-12 text-purple-300" />
                </div>
                <h2 className="text-3xl font-bold leading-tight">{pkg.name}</h2>
              </div>

              {/* Description and Features */}
              <div className="flex-grow space-y-8 mb-8">
                <p className="text-lg text-muted-foreground">{pkg.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="w-2 h-1 rounded-full bg-neutral-400 mr-3 flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <ButtonCta
                  onClick={() => handlePurchase(pkg)}
                  disabled={loading === pkg.id}
                  label={loading === pkg.id ? 'Processing...' : 'Buy Now'}
                  className="w-full"
                />
                <button className="w-full border border-neutral-400 text-neutral-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-medium transition-colors text-lg dark:text-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-800">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="text-center mt-32 mb-32 border-2 bg-slate-400/10 dark:bg-neutral-900 rounded-xl p-16 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see a package that fits your needs? Let's create something custom together.
          </p>
          <motion.div variants={containerVariants} className="mt-10">
            <ShinyLink
              href="https://calendly.com/mickyasnake/30min"
              target="_blank"
              rel="noopener noreferrer"
              label="Schedule a Call"
            >
              <ArrowRightIcon className="w-5 h-5 text-[#B873F8]" />
            </ShinyLink>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
} 