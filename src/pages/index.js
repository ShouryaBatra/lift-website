import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import Link from "next/link";
import PartnerCarousel from "../components/partners/PartnerCarousel";
import billWilsonLogo from "@/assets/logos/bill-wilson.png";
import allcoveLogo from "@/assets/logos/allcove.png";
import unityCare from "@/assets/logos/unityCare.jpg";
import jobCorps from "@/assets/logos/jobCorps.png";
import downtownYouthWellnessCenter from "@/assets/logos/downtownYouthWellnessCenter.jpeg";
import ymca from "@/assets/logos/ymca.png";

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
  const partners = [
    {
      name: "Bill Wilson Center",
      logo: billWilsonLogo,
    },
    {
      name: "Allcove Center",
      logo: allcoveLogo,
    },
    {
      name: "Unity Care",
      logo: unityCare,
    },
    {
      name: "SJ Job Corps",
      logo: jobCorps,
    },
    {
      name: "Downtown Youth Wellness Center",
      logo: downtownYouthWellnessCenter,
    },
    {
      name: "YMCA",
      logo: ymca,
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
              Lead & Inspire.
              <br />
              Future Transformation.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Providing real-world skills to those who need it the most,
              specializing in financial literacy and professional development.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://tally.so/r/3xo11v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Join a Chapter</Button>
              </Link>
              <Link href={"/impact/"}>
                <Button variant="secondary" size="lg">
                  See Our Impact
                </Button>
              </Link>
              <Link href={"/about/"}>
                <Button variant="ghost" size="lg">
                  Learn More
                </Button>
              </Link>
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

      {/* Partners Carousel Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary mb-4"
            >
              Our Partners
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lift-text-secondary">
              Together with our partners, we're creating lasting impact in
              communities through youth development and support services.
            </motion.p>
          </motion.div>
          <PartnerCarousel partners={partners} />
        </Container>
      </section>
    </MainLayout>
  );
}
