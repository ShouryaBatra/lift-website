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
import Image from "next/image";
import image1 from "@/assets/images/image1.jpg";

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
  { number: 75, suffix: "+", label: "Students Mentored" },
  { number: 10, suffix: "+", label: "Community Partnerships" },
  { number: 40, suffix: "+", label: "Volunteers Trained" },
  { number: 100, suffix: "+", label: "Instructional Hours" },
];

function AdvocacySection() {
  return (
    <section className="py-20 bg-lift-accent">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: LIFT Summary */}
          <motion.div variants={fadeInUp} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-lift-text-primary mb-6">
              What is LIFT?
            </h2>
            <p className="text-lg text-lift-text-secondary mb-8">
              LIFT is dedicated to empowering youth through financial literacy
              and professional development. We believe every young person
              deserves the tools, knowledge, and support to build a brighter
              future—no matter their background.
            </p>
            <Link href="/about">
              <Button as="a" size="lg">
                Learn More
              </Button>
            </Link>
          </motion.div>
          {/* Right: Image with subtle animation */}
          <motion.div
            variants={fadeInUp}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.015,
                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="w-full max-w-xl aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={image1}
                alt="Founders meeting partners"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

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
              <Link href={"/about/"}>
                <Button variant="secondary" size="lg">
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

      {/* Advocacy Split Section (What is LIFT?) */}
      <AdvocacySection />

      {/* Work Overview Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-lift-text-primary mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary max-w-2xl mx-auto"
            >
              Explore our core programs designed to equip youth with essential
              life and career skills.
            </motion.p>
          </motion.div>
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
      <section className="py-20 bg-lift-accent">
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
