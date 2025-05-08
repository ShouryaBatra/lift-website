import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Chapters() {
  // This object can be expanded as new chapters are added
  const chapterDirectory = [
    {
      location: 'New York, USA',
      members: 150,
      programs: ['Financial Literacy', 'Professional Development'],
      image: '/chapters/ny.jpg',
      description: 'Our flagship chapter serving the greater New York area.',
      status: 'active'
    },
    {
      location: 'London, UK',
      members: 120,
      programs: ['Financial Literacy', 'Leadership Development'],
      image: '/chapters/london.jpg',
      description: 'Expanding our impact across the United Kingdom.',
      status: 'active'
    },
    {
      location: 'Singapore',
      members: 100,
      programs: ['Professional Development', 'Leadership Development'],
      image: '/chapters/singapore.jpg',
      description: 'Bringing financial education to Southeast Asia.',
      status: 'active'
    },
    {
      location: 'Toronto, Canada',
      members: 80,
      programs: ['Financial Literacy', 'Professional Development'],
      image: '/chapters/toronto.jpg',
      description: 'Growing our presence in North America.',
      status: 'active'
    },
    {
      location: 'Sydney, Australia',
      members: 60,
      programs: ['Leadership Development', 'Professional Development'],
      image: '/chapters/sydney.jpg',
      description: 'Expanding our reach in the Asia-Pacific region.',
      status: 'active'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-white to-lift-accent py-20">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-lift-text-primary mb-6"
            >
              Our Global Chapters
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Join our growing network of chapters worldwide and be part of the movement
              to empower youth through financial literacy and professional development.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-lift-text-primary mb-8"
            >
              Our Global Impact
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="aspect-video bg-gray-200 rounded-lg mb-8"
            >
              {/* Add an interactive map component here */}
              <p className="text-lift-text-secondary p-8">
                Interactive map coming soon...
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Start a Chapter CTA */}
      <section className="py-20 bg-lift-accent">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary mb-8"
            >
              Start a Chapter in Your City
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Want to bring L.I.F.T. to your city? We're always looking for passionate
              individuals to help us expand our reach.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">Start a Chapter</Button>
              <Button variant="secondary" size="lg">Contact Us</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Chapter Directory */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary text-center mb-12"
            >
              Chapter Directory
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chapterDirectory.map((chapter) => (
                <Card key={chapter.location} className="p-6">
                  <div className="text-center">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
                      {/* Add actual images later */}
                    </div>
                    <h3 className="text-2xl font-bold text-lift-text-primary mb-2">
                      {chapter.location}
                    </h3>
                    <p className="text-lift-text-secondary mb-4">
                      {chapter.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="text-lift-blue">
                        <span className="font-semibold">{chapter.members}</span> Members
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {chapter.programs.map((program) => (
                          <span
                            key={program}
                            className="px-3 py-1 bg-lift-blue/10 text-lift-blue rounded-full text-sm"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
} 