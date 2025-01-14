'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { type ContactFormData } from '@/types';
import { contactFormSchema } from '@/lib/validations';

interface ContactFormProps {
  selectedPackage?: string;
  className?: string;
}

export function ContactForm({
  selectedPackage,
  className = '',
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      timeline: '',
      projectDetails: '',
      selectedPackage: selectedPackage || '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        'There was an error submitting your form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm md:p-8"
        >
          {submitSuccess ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="mt-2 text-muted-foreground">
                We've received your message and will get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  reset();
                }}
                className="mt-6 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground"
                >
                  Company (Optional)
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-foreground"
                >
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  id="budget"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  <option value="">Select a budget range</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-foreground"
                >
                  Project Timeline
                </label>
                <select
                  {...register('timeline')}
                  id="timeline"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  <option value="">Select a timeline</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                  <option value="Flexible">Flexible</option>
                </select>
                {errors.timeline && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.timeline.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-foreground"
                >
                  Project Details
                </label>
                <textarea
                  {...register('projectDetails')}
                  id="projectDetails"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  placeholder="Tell us about your project..."
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              {submitError && (
                <p className="text-sm text-destructive">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-md bg-neutral-800 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
} 