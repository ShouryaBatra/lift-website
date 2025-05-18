import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Image from "next/image";
import image2 from "@/assets/images/image2.jpg";
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
    },
    {
      name: "Samay Sikri",
      role: { short: "Founder and CEO", long: "Chief Executive Officer" },
      image: samay,
    },
    {
      name: "Advay Ranade",
      role: { short: "CXO", long: "Chief Expansion Officer" },
      image: advay,
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
              We are dedicated to empowering youth through financial literacy
              and professional development, creating a future where every young
              person has the tools and knowledge to succeed.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
            >
              {["Access", "Equity", "Empathy", "Innovation"].map(
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
                  L.I.F.T. began with a simple idea: to provide real-world
                  skills to those who need it most. Our founders, having
                  experienced the transformative power of financial literacy and
                  professional development, came together to create an
                  organization that would make these essential skills accessible
                  to all.
                </p>
                <p>
                  What started as a small initiative has grown into a global
                  movement, with chapters across multiple countries and
                  thousands of lives impacted. Our journey continues as we work
                  to expand our reach and deepen our impact.
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
                  src={image2}
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
