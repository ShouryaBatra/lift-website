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

export default function Contact() {
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
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Have questions? We're here to help. Choose the best way to reach
              us below.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary text-center mb-12"
            >
              Send Us a Message
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-lift-text-secondary mb-8"
            >
              You can also reach us directly at{" "}
              <a
                href="mailto:lift.empowerlives@gmail.com"
                className="text-lift-blue hover:text-lift-blue-dark font-medium"
              >
                lift.empowerlives@gmail.com
              </a>
            </motion.p>
            <form
              className="space-y-6"
              action="https://formspree.io/f/meogpnlp"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-lift-text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lift-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-lift-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lift-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-lift-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lift-blue focus:border-transparent"
                  required
                />
              </div>
              <div className="text-center">
                <Button size="lg" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
