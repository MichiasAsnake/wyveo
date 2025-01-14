import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BaseLayout } from '@/components/layout/base-layout';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Wyveo - Web Design & Development',
  description:
    'Transform your online presence with expert web design and development services. We create stunning, modern websites that help businesses succeed.',
  keywords: [
    'web design',
    'web development',
    'responsive design',
    'business websites',
    'custom web development',
    'modern web design',
    'professional web services',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
