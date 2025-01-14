// Service Package Types
export enum ServicePackageType {
  LAUNCH = 'launch',
  GROW = 'grow',
  FULL_SERVICE = 'full-service',
}

export interface ServiceFeature {
  id: string;
  name: string;
  description: string;
  included: boolean;
}

export interface ServicePackage {
  id: string;
  type: ServicePackageType;
  name: string;
  description: string;
  price: number;
  features: ServiceFeature[];
  popularChoice?: boolean;
}

// User and Authentication Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  clientName?: string;
  completionDate: string;
  link: string;
  status?: 'completed' | 'coming-soon';
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  selectedPackage?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Component Props Types
export interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Payment Types
export interface PaymentIntent {
  clientSecret: string;
  amount: number;
  currency: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
} 