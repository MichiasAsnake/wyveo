import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Recovery Lounge - Modern Web Design for Wellness Center | Wyveo',
  description: 'Discover how we created an elegant digital platform for Premium Recovery Lounge, combining luxury wellness with seamless online booking.',
}

export default function PremiumRecoveryPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Elevating Wellness Online</h1>
        <p className="text-xl text-gray-600">A premium digital experience for a luxury recovery center</p>
      </section>

      {/* Hero Image */}
      <section className="mb-20">
        <div className="relative aspect-video w-full">
          <Image
            src="/work/premium-recovery/hero.png"
            alt="Premium Recovery Lounge website hero"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Background Section */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <p className="text-gray-700">
            Premium Recovery Lounge needed a website that would reflect their commitment to luxury wellness 
            and recovery services. The goal was to create an online platform that would not only showcase 
            their state-of-the-art facilities and services but also provide a seamless booking experience 
            for their high-end clientele.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Client</span>
            <span>Premium Recovery Lounge</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Timeline</span>
            <span>6 weeks</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Services</span>
            <span>Web Design, Development, Booking System</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Live Site</span>
            <a 
              href="https://rhouseclone.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-gray-700">
            Our approach focused on creating a luxurious yet user-friendly digital experience. We developed 
            a clean, sophisticated design that emphasizes the premium nature of their services while ensuring 
            easy navigation and booking. Key features include an intuitive service catalog, real-time 
            availability checking, and a streamlined booking process integrated with their management system.
          </p>
          <div className="relative aspect-square">
            <Image
              src="/work/premium-recovery/detail1.png"
              alt="Premium Recovery Lounge website design showcase"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Creative Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Creative</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <p className="text-gray-700">
              The visual design embodies luxury and wellness through a minimalist aesthetic. We utilized a 
              calming color palette with accents of gold to convey premium quality. The photography and 
              typography were carefully selected to create an atmosphere of sophistication and tranquility, 
              while the interface design ensures a smooth and intuitive user experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/work/premium-recovery/detail2.png"
                  alt="Website detail 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/work/premium-recovery/detail3.png"
                  alt="Website detail 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] relative">
            <Image
              src="/work/premium-recovery/detail4.png"
              alt="Premium Recovery Lounge website showcase"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
} 