'use client';

import { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { createCheckoutSession } from '@/lib/stripe';
import { RocketIcon, TrendingUpIcon, StarIcon, ArrowRightIcon, SparklesIcon, BrainIcon, UsersIcon, HeartIcon, CheckCircle2Icon, TrophyIcon, BarChart3Icon } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
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

const stats = [
  { icon: TrophyIcon, value: '150+', label: 'Successful Projects' },
  { icon: UsersIcon, value: '50+', label: 'Happy Clients' },
  { icon: BarChart3Icon, value: '200%', label: 'Average ROI' },
  { icon: CheckCircle2Icon, value: '98%', label: 'Client Satisfaction' }
];

const packages = [
  {
    id: 'launch',
    name: 'Launch',
    price: 1000,
    icon: RocketIcon,
    description: "You're looking to start with brand building. We'll help you get started with a solid strategy.",
    includes: [
      'Strategy Guide',
      'Research',
      'Planning',
      'Branding Suite',
      'Brand Identity'
    ]
  },
  {
    id: 'grow',
    name: 'Grow',
    price: 1500,
    icon: TrendingUpIcon,
    description: "You've got your branding down, but you need that boost to get you where you want to be.",
    includes: [
      'Strategy Guide',
      'Research',
      'Planning',
      'Audience Development',
      'Campaign',
      'Media Management'
    ]
  },
  {
    id: 'full-service',
    name: 'Full Service',
    price: 3000,
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
    ]
  }
];

const processSteps = [
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

export default function PackagesPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePurchase = async (pkg: typeof packages[0]) => {
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
    <div className="relative bg-background min-h-screen">
      <div className="container mx-auto px-6 py-24 max-w-6xl">
        {/* Hero Section */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Choose one of<br />our packages.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our services are packaged, prepped, and ready to go.
            <span className="block mt-2">
              We're like a catering service where every employee is a 5-star chef.
            </span>
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers speak louder than words. Here's what we've achieved for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center p-8 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've refined our process to ensure every project is executed with precision and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative flex gap-6 items-start p-8 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Packages Section */}
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Package</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the package that best fits your needs and let's start creating something amazing together.
            </p>
          </motion.div>

          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeInUp}
              className="relative border rounded-xl p-10 hover:shadow-lg transition-all hover:-translate-y-1 bg-background"
            >
              {/* Price Tag */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-5 shadow-lg">
                <span className="text-xl font-bold">${(pkg.price / 1000)}k</span>
              </div>

              <div className="grid md:grid-cols-[1.2fr_2fr_1fr] gap-12 items-start">
                {/* Icon and Title */}
                <div className="space-y-6">
                  <div className="bg-primary/10 p-8 rounded-full w-fit">
                    <pkg.icon className="w-14 h-14 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">{pkg.name}</h2>
                </div>

                {/* Description and Features */}
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground">{pkg.description}</p>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {pkg.includes.map((item) => (
                      <div key={item} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        <span className="text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 pt-2">
                  <button
                    onClick={() => handlePurchase(pkg)}
                    disabled={loading === pkg.id}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
                  >
                    {loading === pkg.id ? 'Processing...' : 'Buy Now'}
                  </button>
                  <button className="w-full border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-32 bg-primary/5 rounded-3xl p-16 hover:bg-primary/10 transition-colors"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see a package that fits your needs? Let's create something custom together.
          </p>
          <motion.a 
            href="https://calendly.com/mickyasnake/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
            <ArrowRightIcon className="w-5 h-5" />
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
} 