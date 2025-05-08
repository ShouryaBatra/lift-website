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

export default function Impact() {
  const impactStats = [
    {
      number: '1000+',
      label: 'Students Mentored',
      description: 'Youth empowered through our programs'
    },
    {
      number: '85%',
      label: 'Success Rate',
      description: 'Students achieving their financial goals'
    },
    {
      number: '50+',
      label: 'Partner Schools',
      description: 'Educational institutions we work with'
    },
    {
      number: '200+',
      label: 'Volunteers',
      description: 'Dedicated mentors and educators'
    }
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      role: 'Financial Literacy Graduate',
      story: "After completing L.I.F.T.'s financial literacy program, Sarah started her own small business and now mentors other young entrepreneurs.",
      image: '/stories/sarah.jpg' // You'll need to add these images
    },
    {
      name: 'Michael Chen',
      role: 'Professional Development Graduate',
      story: 'Michael secured his dream job in finance after participating in our professional development workshops and networking events.',
      image: '/stories/michael.jpg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Leadership Program Graduate',
      story: 'Emma now leads a community initiative focused on financial education for underserved youth in her neighborhood.',
      image: '/stories/emma.jpg'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
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
              Our Impact
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              See how we're transforming lives through financial literacy and
              professional development programs.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {impactStats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-4xl font-bold text-lift-blue mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-lift-text-primary mb-2">
                    {stat.label}
                  </p>
                  <p className="text-lift-text-secondary">
                    {stat.description}
                  </p>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Success Stories Section */}
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
              Success Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <Card key={story.name} className="p-6">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
                      {/* Add actual images later */}
                    </div>
                    <h3 className="text-xl font-bold text-lift-text-primary mb-2">
                      {story.name}
                    </h3>
                    <p className="text-lift-blue mb-4">{story.role}</p>
                    <p className="text-lift-text-secondary mb-6">
                      {story.story}
                    </p>
                    <Button variant="secondary">Read Full Story</Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Impact Report Section */}
      <section className="py-20 bg-white">
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
              Annual Impact Report
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Download our comprehensive impact report to learn more about our
              achievements and future goals.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">Download Report</Button>
              <Button variant="secondary" size="lg">View Online</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-lift-accent">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary mb-4"
            >
              Be Part of Our Impact
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Join us in our mission to empower youth through financial literacy
              and professional development.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">Get Involved</Button>
              <Button variant="secondary" size="lg">Donate</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
} 