import { z } from 'zod';
import { ServicePackageType } from '@/types';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a project timeline'),
  projectDetails: z
    .string()
    .min(10, 'Please provide more details about your project')
    .max(1000, 'Project details must be less than 1000 characters'),
  selectedPackage: z.string().optional(),
});

export const servicePackageSchema = z.object({
  type: z.nativeEnum(ServicePackageType),
  name: z.string().min(2),
  description: z.string().min(10),
  price: z.number().positive(),
  features: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(2),
      description: z.string(),
      included: z.boolean(),
    })
  ),
  popularChoice: z.boolean().optional(),
});

export const projectSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  imageUrl: z.string().url('Invalid image URL'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()),
  clientName: z.string().optional(),
  completionDate: z.string(),
  link: z.string().url('Invalid project URL').optional(),
});

export const checkoutSessionSchema = z.object({
  packageId: z.string(),
  customerEmail: z.string().email(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
}); 