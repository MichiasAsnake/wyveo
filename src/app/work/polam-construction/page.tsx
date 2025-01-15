import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polam Construction - Modern Web Design for a Legacy Builder | Wyveo',
  description: 'Discover how we created a premium digital presence for Polam Construction, transforming 45 years of construction excellence into an engaging online experience.',
}

export default function PolamConstructionPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Crafting a Digital Foundation</h1>
        <p className="text-xl text-gray-600">A modern web presence for a legacy construction company</p>
      </section>

      {/* Hero Image */}
      <section className="mb-20">
        <div className="relative aspect-video w-full">
          <Image
            src="/work/polam-construction/polam1.png"
            alt="Polam Construction website hero"
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
            Polam Construction, with over 45 years of excellence in the Lake Wallenpaupack Region, needed a website that would 
            reflect their premium craftsmanship and showcase their extensive portfolio of custom homes and renovations. The goal 
            was to create a digital presence that would appeal to high-end clients while maintaining the warmth and trust they've 
            built over decades.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Client</span>
            <span>Polam Construction</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Timeline</span>
            <span>2 months</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Services</span>
            <span>Web Design, Development, Photography</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Live Site</span>
            <a 
              href="#"
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
            Our design approach focused on creating a sophisticated yet approachable platform that showcases Polam's craftsmanship. 
            We implemented an intuitive project gallery, detailed service descriptions, and compelling calls-to-action. The website 
            features high-quality photography of their work, testimonials from satisfied clients, and easy-to-use contact forms for 
            project inquiries.
          </p>
          <div className="relative aspect-square">
            <Image
              src="/work/polam-construction/polam2.png"
              alt="Polam Construction website design showcase"
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
              The visual design emphasizes quality and reliability through a clean, modern aesthetic. We chose a sophisticated 
              color palette that reflects both professionalism and approachability, complemented by strong typography and 
              thoughtful white space. The photography-driven layout puts their work front and center, letting the craftsmanship 
              speak for itself.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/work/polam-construction/polam3.png"
                  alt="Website detail 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/work/polam-construction/polam4.png"
                  alt="Website detail 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] relative">
            <Image
              src="/work/polam-construction/polam5.png"
              alt="Polam Construction website showcase"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
} 