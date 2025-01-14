import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Osteria Luna - Modern Italian Dining in the Heart of the City | Wyveo',
  description: 'Discover how we brought the warmth of traditional Italian dining into the digital age for Osteria Luna, creating an immersive online experience that captures the essence of their culinary artistry.',
}

export default function OsteriaLunaPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Bringing Italian Elegance Online</h1>
        <p className="text-xl text-gray-600">A digital transformation for NYC's finest Italian dining experience</p>
      </section>

      {/* Hero Image */}
      <section className="mb-20">
        <div className="relative aspect-video w-full">
          <Image
            src="/work/osteria-luna/Osteria1.png"
            alt="Osteria Luna restaurant interior"
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
            Osteria Luna, a beacon of authentic Italian cuisine in New York City, needed a digital presence that would match 
            their exceptional dining experience. The challenge was to translate their warm, inviting atmosphere and culinary 
            excellence into a compelling online platform that would attract both loyal patrons and new guests.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Client</span>
            <span>Osteria Luna</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Timeline</span>
            <span>3 months</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Services</span>
            <span>Web Design, Development, Branding</span>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-gray-700">
            We focused on creating a website that embodies the restaurant's commitment to authenticity and excellence. 
            The design draws inspiration from classic Italian aesthetics while maintaining a modern, clean interface. 
            Key features include an interactive menu, seamless reservation system, and rich visual storytelling that 
            showcases their culinary creations and ambient dining space.
          </p>
          <div className="relative aspect-square">
            <Image
              src="/work/osteria-luna/Osteria2.png"
              alt="Osteria Luna website design process"
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
              The visual language we developed for Osteria Luna combines timeless elegance with contemporary digital 
              functionality. We used a warm, earthy color palette inspired by Italian landscapes and cuisine, complemented 
              by modern typography and intuitive navigation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/work/osteria-luna/Osteria7.png"
                  alt="Website detail 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/work/osteria-luna/Osteria6.png"
                  alt="Website detail 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] relative">
            <Image
              src="/work/osteria-luna/Osteria5.png"
              alt="Osteria Luna website showcase"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  )
} 