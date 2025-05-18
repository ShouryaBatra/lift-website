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

const generateVolunteerEmail = (opportunityType) => {
  const subject = `Volunteer Interest - ${opportunityType}`;
  const body = `Dear LIFT Team,

I am interested in volunteering with LIFT, specifically in the ${opportunityType} opportunities.

Location: [Please provide your location]
Qualifications: [Please list your relevant qualifications]
Why I want to join: [Please share your motivation for volunteering with LIFT]

Best regards,
[Your name]`;

  return `mailto:lift.empowerlives@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export default function GetInvolved() {
  const volunteerOpportunities = [
    {
      title: "Short-term Opportunities",
      description: "Perfect for busy professionals who want to make an impact.",
      options: [
        "One-time workshop facilitation",
        "Career day participation",
        "Mock interview sessions",
        "Event support",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Long-term Opportunities",
      description:
        "For those looking to make a sustained impact in their community.",
      options: [
        "Chapter leadership roles",
        "Mentorship program",
        "Curriculum development",
        "Program coordination",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
              Get Involved
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Join our mission to empower youth through financial literacy and
              professional development. There are many ways to make a
              difference.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Join a Chapter Section */}
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
              Join a Chapter
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8 max-w-2xl mx-auto"
            >
              Find and connect with a L.I.F.T. chapter in your area. Join a
              community of like-minded individuals making a difference in youth
              financial literacy.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="https://tally.so/r/3xo11v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Find Your Chapter</Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Start a Chapter Section */}
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
              Start a Chapter
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-lift-text-primary mb-4">
                  Easy Setup
                </h3>
                <p className="text-lift-text-secondary">
                  We provide all the resources and guidance you need to get
                  started
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-lift-text-primary mb-4">
                  Full Support
                </h3>
                <p className="text-lift-text-secondary">
                  Access to our network, training, and ongoing assistance
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-lift-text-primary mb-4">
                  Proven Model
                </h3>
                <p className="text-lift-text-secondary">
                  Follow our successful framework for maximum impact
                </p>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href={
                  "https://docs.google.com/document/d/1UxGy88fgXaAfkep44sQGIOXmk3QakSlZHyn-BlKQfhw/edit?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Start Your Chapter</Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Volunteer Section */}
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
              Volunteer With Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity) => (
                <Card key={opportunity.title} className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {opportunity.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                      {opportunity.title}
                    </h3>
                    <p className="text-lift-text-secondary mb-6">
                      {opportunity.description}
                    </p>
                    <ul className="space-y-2 mb-6 text-left">
                      {opportunity.options.map((option, index) => (
                        <li
                          key={index}
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
                          {option}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={generateVolunteerEmail(opportunity.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">Email Us</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
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
              Have Questions?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Our team is here to help you find the best way to get involved
              with L.I.F.T.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={"/contact"}>
                <Button size="lg">Contact Us</Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
