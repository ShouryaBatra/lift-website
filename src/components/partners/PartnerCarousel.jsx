import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const PartnerCarousel = ({ partners }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Animation variants
  const scrollVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isReducedMotion ? 40 : 20, // Slower for reduced motion
          ease: "linear",
        },
      },
    },
  };

  const reverseScrollVariants = {
    animate: {
      x: [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isReducedMotion ? 40 : 20, // Slower for reduced motion
          ease: "linear",
        },
      },
    },
  };

  // Duplicate partners array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-12">
      {/* First row - scrolling left */}
      <motion.div
        className="flex space-x-8 py-8"
        variants={scrollVariants}
        animate="animate"
        aria-hidden="true"
      >
        {duplicatedPartners.map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
            whileHover={{
              scale: 1.05,
              rotate: isReducedMotion ? 0 : [-1, 1, -1],
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={96}
              className="w-full h-full object-contain"
              priority={index < 4} // Prioritize loading first 4 images
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Second row - scrolling right */}
      <motion.div
        className="flex space-x-8 py-8"
        variants={reverseScrollVariants}
        animate="animate"
        aria-hidden="true"
      >
        {duplicatedPartners.map((partner, index) => (
          <motion.div
            key={`${partner.name}-reverse-${index}`}
            className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
            whileHover={{
              scale: 1.05,
              rotate: isReducedMotion ? 0 : [1, -1, 1],
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={96}
              className="w-full h-full object-contain"
              priority={index < 4} // Prioritize loading first 4 images
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerCarousel;
