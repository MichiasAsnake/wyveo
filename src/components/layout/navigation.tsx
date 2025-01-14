'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Logo } from '@/components/ui/logo';

const navigationItems = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.2,
    },
  },
};

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between">
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 md:flex">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === item.href
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/packages"
          className={`px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
            pathname === '/packages'
              ? 'bg-primary text-primary-foreground'
              : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
          }`}
        >
          Buy Services
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="ml-auto md:hidden"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        className="absolute left-0 right-0 top-16 overflow-hidden bg-background md:hidden"
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <div className="border-b">
          <div className="flex flex-col space-y-4 p-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/packages"
              className={`px-6 py-2.5 text-sm font-medium rounded-full text-center transition-colors ${
                pathname === '/packages'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy Services
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
} 