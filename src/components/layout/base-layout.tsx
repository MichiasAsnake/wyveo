import { type SectionProps } from '@/types';
import { Navigation } from './navigation';
import { Container } from '@/components/ui/container';

export function BaseLayout({ children }: SectionProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center">
            <Navigation />
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <Container>
          <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Wyveo</h3>
              <p className="text-sm text-muted-foreground">
                We create beautiful, functional websites that help businesses grow
                and succeed in the digital world.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Web Design</li>
                <li>Development</li>
                <li>E-commerce</li>
                <li>Maintenance</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Work</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@wyveo.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t py-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Wyveo. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
} 