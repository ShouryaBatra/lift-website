import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Link from "next/link";

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

export default function Offerings() {
  const programs = [
    {
      title: "Personal Finance",
      description:
        "Master essential financial skills through our comprehensive curriculum covering budgeting, saving, investing, and financial planning.",
      features: [
        "Interactive financial workshops",
        "Real-world case studies",
        "Personal finance tools",
        "One-on-one financial mentoring",
      ],
      icon: (
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
      ),
    },
    {
      title: "Career Readiness",
      description:
        "Develop professional skills and prepare for your future career with our comprehensive career development program.",
      features: [
        "Resume building workshops",
        "Mock interview sessions",
        "Professional networking events",
        "Career path counseling",
      ],
      icon: (
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
      ),
    },
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
              Our Programs
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Discover our comprehensive range of programs designed to empower
              youth with essential life skills and professional development
              opportunities.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {programs.map((program, index) => (
              <Card key={program.title} className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                    {program.title}
                  </h3>
                  <p className="text-lift-text-secondary mb-6">
                    {program.description}
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-lift-text-secondary"
                      >
                        <svg
                          className="w-5 h-5 text-lift-blue mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </Card>
            ))}
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Join our programs today and take the first step towards a brighter
              future. Our team is here to support you every step of the way.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={"/chapters/"}>
                <Button size="lg">Join a Program</Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
