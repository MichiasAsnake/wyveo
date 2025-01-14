import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Container } from '@/components/ui/container';
import { MotionDiv } from '@/components/ui/motion';
import { SplineScene } from '@/components/ui/spline';

const teamMembers = [
  {
    name: 'Michias Asnake',
    role: 'Founder & CEO',
    image: '/images/team/headshot1.png',
    bio: 'With over 4 years of experience in web development and design, Micky leads our team with passion and innovation.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    image: '/images/team/sarah.jpg',
    bio: 'Sarah brings creativity and user-centered design principles to every project, ensuring beautiful and functional results.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: '/images/team/michael.jpg',
    bio: 'Michael oversees all technical aspects of our projects, specializing in modern web technologies and performance optimization.',
  },
  {
    name: 'Emma Wilson',
    role: 'Project Manager',
    image: '/images/team/emma.jpg',
    bio: 'Emma ensures smooth project delivery and excellent client communication throughout the development process.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-20 md:gap-32 md:py-32">
      {/* Hero Section */}
      <AnimatedSection>
        <Container>
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-16"
          >
            <MotionDiv 
              variants={itemVariants}
              className="flex-1 max-w-xl"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                We Create Digital Excellence
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                At Wyveo, we're passionate about creating exceptional digital
                experiences that help businesses thrive in the modern world. Our
                team of experts combines creativity, technical expertise, and
                strategic thinking to deliver outstanding results.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-lg font-bold">10+</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Years of Experience
                    </h3>
                    <p className="text-sm">Delivering exceptional web solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-lg font-bold">200+</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Projects Completed
                    </h3>
                    <p className="text-sm">For clients worldwide</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              variants={itemVariants}
              className="relative flex-1 h-[600px] hidden lg:block"
            >
              <div className="absolute inset-0 overflow-hidden">
                <SplineScene 
                  scene="https://prod.spline.design/QGcM3hSyFNjeLUJv/scene.splinecode"
                  className="w-full h-[102%] -translate-y-52 -translate-x-40"
                />
              </div>
            </MotionDiv>
          </MotionDiv>
        </Container>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="bg-muted/50">
        <Container>
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <MotionDiv
              variants={itemVariants}
              className="max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our talented team of experts is dedicated to bringing your vision
                to life with creativity, technical excellence, and attention to
                detail.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={itemVariants}
              className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-lg bg-card"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </MotionDiv>
          </MotionDiv>
        </Container>
      </AnimatedSection>
    </div>
  );
} 