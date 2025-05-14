import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import dynamic from "next/dynamic";
import Link from "next/link";
const USAMap = dynamic(() => import("../components/USAMap"), { ssr: false });

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

export default function Chapters() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chaptersCollection = collection(db, "chapters");
        const chaptersSnapshot = await getDocs(chaptersCollection);
        const chaptersList = chaptersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChapters(chaptersList);
      } catch (err) {
        console.error("Error fetching chapters:", err);
        setError("Failed to load chapters. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  return (
    <MainLayout>
      {/* Hero Banner */}
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
              Our Global Chapters
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Join our growing network of chapters worldwide and be part of the
              movement to empower youth through financial literacy and
              professional development.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Global Impact Section */}
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
              className="text-4xl md:text-6xl font-bold text-lift-text-primary mb-8"
            >
              Our Global Impact
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="aspect-video bg-gray-200 rounded-lg mb-8"
            >
              {/* Add an interactive map component here */}
              {loading || error ? (
                <p className="text-lift-text-secondary p-8">
                  {loading ? "Loading map..." : "Unable to load map."}
                </p>
              ) : (
                <USAMap chapters={chapters} />
              )}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Start a Chapter CTA */}
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
              Start a Chapter in Your City
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Want to bring L.I.F.T. to your city? We're always looking for
              passionate individuals to help us expand our reach.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">Start a Chapter</Button>
              <Link href={"/contact"}>
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
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
              className="text-lift-text-secondary mb-8"
            >
              Ready to get involved? Join one of our existing chapters and start
              making an impact in your community
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
                <Button size="lg">Find a Chapter</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Need Help?
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Chapter Directory */}
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
              id="chapter-directory"
              className="text-3xl font-bold text-lift-text-primary text-center mb-12"
            >
              Chapter Directory
            </motion.h2>
            {loading ? (
              <div className="text-center">
                <p className="text-lift-text-secondary">Loading chapters...</p>
              </div>
            ) : error ? (
              <div className="text-center text-red-500">
                <p>{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chapters.map((chapter) => (
                  <Card key={chapter.id} className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-lift-text-primary mb-2">
                        {chapter.location?.state}
                      </h3>
                      <div className="text-lift-text-secondary mb-2">
                        <span className="font-semibold">Chapter Lead:</span>{" "}
                        {chapter.chapterLead}
                      </div>
                      <div className="text-lift-text-secondary mb-2">
                        <span className="font-semibold">Chapter Since:</span>{" "}
                        {chapter.chapterSince}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
}
