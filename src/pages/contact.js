import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

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
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "For general questions about L.I.F.T. and our programs",
      email: "info@lift.org",
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Partnership Opportunities",
      description: "Interested in partnering with L.I.F.T.?",
      email: "partnerships@lift.org",
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Media Inquiries",
      description: "For press and media-related questions",
      email: "press@lift.org",
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
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-lift-text-primary mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lift-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-lift-text-primary mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lift-blue focus:border-transparent"
                    required
                  />
                </div>
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

      {/* Office Locations Section */}
      {/* <section className="py-20 bg-lift-accent">
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
              Our Offices
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office) => (
                <Card key={office.city} className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                      {office.city}
                    </h3>
                    <div className="space-y-3 text-lift-text-secondary">
                      <p>{office.address}</p>
                      <p>{office.phone}</p>
                      <p>{office.email}</p>
                      <p className="text-sm">{office.hours}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section> */}

      {/* Contact Methods Section */}
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
              Other Ways to Reach Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method) => (
                <Card key={method.title} className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                      {method.title}
                    </h3>
                    <p className="text-lift-text-secondary mb-4">
                      {method.description}
                    </p>
                    <a
                      href={`mailto:${method.email}`}
                      className="text-lift-blue hover:text-lift-blue-dark"
                    >
                      {method.email}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary mb-8"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Can't find what you're looking for? Check our FAQ page for quick
              answers to common questions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Button size="lg">View FAQ</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
