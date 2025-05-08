import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

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

export default function About() {
  const teamMembers = [
    {
      name: 'Arnav',
      role: 'Founder',
      bio: 'Passionate about youth development and financial education.',
      image: '/team/arnav.jpg' // You'll need to add these images
    },
    {
      name: 'Samay',
      role: 'Co-Founder',
      bio: 'Dedicated to creating opportunities for at-risk youth.',
      image: '/team/samay.jpg'
    },
    {
      name: 'Advay',
      role: 'Co-Founder',
      bio: 'Committed to transforming lives through education.',
      image: '/team/advay.jpg'
    }
  ];

  return (
    <MainLayout>
      {/* Mission & Vision Section */}
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
              className="text-4xl font-bold text-lift-text-primary mb-8"
            >
              Our Mission & Vision
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-12"
            >
              We are dedicated to empowering youth through financial literacy and professional development,
              creating a future where every young person has the tools and knowledge to succeed.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
            >
              {['Access', 'Equity', 'Empathy', 'Innovation'].map((value, index) => (
                <motion.div
                  key={value}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lift-blue text-xl font-bold">{value[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-lift-text-primary">{value}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-lift-accent">
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
              Meet the Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="p-6">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
                      {/* Add actual images later */}
                    </div>
                    <h3 className="text-xl font-bold text-lift-text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lift-blue mb-2">{member.role}</p>
                    <p className="text-lift-text-secondary">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Founders' Story Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary text-center mb-12"
            >
              Our Story
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="prose prose-lg mx-auto"
            >
              <p>
                L.I.F.T. began with a simple idea: to provide real-world skills to those who need it most.
                Our founders, having experienced the transformative power of financial literacy and professional
                development, came together to create an organization that would make these essential skills
                accessible to all.
              </p>
              <p>
                What started as a small initiative has grown into a global movement, with chapters across
                multiple countries and thousands of lives impacted. Our journey continues as we work to
                expand our reach and deepen our impact.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
} 