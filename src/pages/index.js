import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const impactNumbers = [
  { number: 1000, suffix: "+", label: "Students Mentored" },
  { number: 50, suffix: "+", label: "Chapters Worldwide" },
  { number: 5000, suffix: "+", label: "Hours of Content" },
  { number: 200, suffix: "+", label: "Volunteers Trained" },
];

export default function Home() {
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
              Lead & Inspire.
              <br />
              Future Transformation.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Providing real-world skills to those who need it the most.
              Specializing in financial literacy and professional development.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">Join a Chapter</Button>
              <Button variant="secondary" size="lg">
                See Our Impact
              </Button>
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </motion.div>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {impactNumbers.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-lift-blue mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-lift-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Work Overview Section */}
      <section className="py-20 bg-lift-accent">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-lift-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                  Personal Finance
                </h3>
                <p className="text-lift-text-secondary">
                  Budgeting, saving, debit, credit, investing, and more.
                </p>
              </div>
            </Card>
            <Card className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-lift-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                  Professional Development
                </h3>
                <p className="text-lift-text-secondary">
                  Resume building, job finding, interview preparation, and more.
                </p>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
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
              Stay Updated
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Join our newsletter to receive updates about our programs and
              impact.
            </motion.p>
            <motion.form
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent"
              />
              <Button type="submit">Subscribe</Button>
            </motion.form>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
