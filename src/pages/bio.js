import { motion, useScroll, useTransform } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Image from "next/image";
import meImage from "../assets/team/me.png";
import { TracingBeam } from "../components/ui/TracingBeam";

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

const skillCardVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const socialIconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const skills = [
  {
    name: "ReactJS",
    description: "Aspiring web developer",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "React Native",
    description: "Building mobile apps",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M2 10h20" />
      </svg>
    ),
  },
  {
    name: "CSS + TailwindCSS",
    description: "Styling apps and creating animations",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "HTML + JavaScript",
    description: "Foundation in native HTML and JS",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 7V4h16v3M4 20V7M20 20V7" />
      </svg>
    ),
  },
  {
    name: "Java",
    description: "Strong foundation in Java object-oriented programming",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Python",
    description: "Started with programming with Python",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "More!",
    description: "Exploring all kinds of technologies to expand my knowledge",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Bio() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <MainLayout>
      <section className="py-20 bg-white">
        <Container>
          <TracingBeam className="px-6">
            <div className="max-w-4xl mx-auto antialiased pt-4 relative">
              {/* Profile Section */}
              <motion.div
                variants={fadeInUp}
                className="text-center mb-12"
                style={{ opacity, scale }}
              >
                <motion.div
                  className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={meImage}
                    alt="Shourya Batra"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <motion.h1
                  className="text-4xl font-bold text-lift-text-primary mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Shourya Batra
                </motion.h1>
                <motion.p
                  className="text-xl text-lift-text-secondary mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Freshman at Homestead High School
                </motion.p>
                <motion.div
                  className="flex justify-center space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {[
                    {
                      href: "mailto:shourya.batra@gmail.com",
                      icon: (
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <path d="M22 6l-10 7L2 6" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://github.com/ShouryaBatra",
                      icon: (
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.instagram.com/shouryabatra_/",
                      icon: (
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://www.linkedin.com/in/shourya-batra-b22920344",
                      icon: (
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      ),
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="text-lift-blue hover:text-lift-blue-dark transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={socialIconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* About Section */}
              <motion.div
                variants={fadeInUp}
                className="mb-12 bg-lift-accent/5 p-8 rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lift-blue/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <h2 className="text-2xl font-bold text-lift-text-primary mb-4">
                  About Me
                </h2>
                <p className="text-lift-text-secondary">
                  I'm a freshman at Homestead High school, currently pursuing my
                  passion of programming and computer science.
                </p>
                <p className="text-lift-text-secondary mt-4">
                  Some hobbies I enjoy are coding, playing volleyball, and
                  playing the Euphonium.
                </p>
              </motion.div>

              {/* Skills Section */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-lift-text-primary mb-6">
                  Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-lift-accent/10 p-4 rounded-lg cursor-pointer group"
                      variants={skillCardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-lift-blue group-hover:text-lift-blue-dark transition-colors">
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lift-text-primary">
                            {skill.name}
                          </h3>
                          <p className="text-lift-text-secondary">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TracingBeam>
        </Container>
      </section>
    </MainLayout>
  );
}
