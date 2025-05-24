import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Image from "next/image";
import image4 from "@/assets/images/image4.jpg";
import samay from "@/assets/team/samay.jpg";
import advay from "@/assets/team/advay.jpg";
import arnav from "@/assets/team/arnav.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const circleHover = {
  y: -5,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  const teamMembers = [
    {
      name: "Arnav Kodavati",
      role: { short: "CFO", long: "Chief Financial Officer" },
      image: arnav,
      email: "arnav.kodavati@gmail.com",
      linkedin: null,
    },
    {
      name: "Samay Sikri",
      role: { short: "Founder and CEO", long: "Chief Executive Officer" },
      image: samay,
      email: "samaysikri8@gmail.com",
      linkedin: "linkedin.com/in/samaysikri",
    },
    {
      name: "Advay Ranade",
      role: { short: "CXO", long: "Chief Expansion Officer" },
      image: advay,
      email: "advaymranade@gmail.com",
      linkedin: "linkedin.com/in/advayranade",
    },
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
              We are dedicated to empowering youth in the juvenile justice
              system, at risk, and in the foster care system, through financial
              literacy and professional development, creating a future where
              every young person has the tools and knowledge to succeed.
              Real-world skills, to create a life with no stigma.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
            >
              {["Lead", "Inspire", "Future", "Transformation"].map(
                (value, index) => (
                  <motion.div
                    key={value}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={circleHover}
                      className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                    >
                      <span className="text-lift-blue text-xl font-bold">
                        {value[0]}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-lift-text-primary">
                      {value}
                    </h3>
                  </motion.div>
                )
              )}
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
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                      <Image
                        src={member.image}
                        alt={`${member.name}'s profile picture`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 128px, 128px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-lift-text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lift-blue font-semibold mb-1">
                      {member.role.short}
                    </p>
                    <p className="text-lift-text-secondary text-sm">
                      {member.role.long}
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-lift-blue hover:text-lift-blue/80 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </a>
                      {member.linkedin && (
                        <a
                          href={`https://${member.linkedin}`}
                          className="text-lift-blue hover:text-lift-blue/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                    </div>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          >
            {/* Left: Text */}
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-lift-text-primary mb-8 text-center md:text-left"
              >
                Founders' Story
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg mx-auto md:mx-0"
              >
                <p>
                  L.I.F.T began when the founders closest friend, someone who
                  came out of the juvenile justice system, and was in foster
                  care, did not know how to get ahead in life, especially with a
                  lack of resources and stigma in society. Our founders, having
                  experienced the transformative power of financial literacy and
                  professional development, came together to create an
                  organization that would make these essential skills accessible
                  to all.
                </p>
                <p>
                  What started as a small initiative has grown into a global
                  movement, with chapters across the world. Our journey
                  continues as we work to expand our reach and deepen our
                  impact.
                </p>
              </motion.div>
            </motion.div>
            {/* Right: Image */}
            <motion.div className="order-1 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className="w-full max-w-md aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image4}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
