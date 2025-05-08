import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useState } from 'react';
import Image from 'next/image';
import billWilsonLogo from '@/assets/logos/bill-wilson.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    {
      name: 'Bill Wilson Center',
      description: 'The largest youth shelter in Silicon Valley, providing critical support and resources to young people in need.',
      logo: billWilsonLogo
    },
    {
      name: 'Alcove Center',
      description: 'Dedicated to supporting youth through comprehensive services and programs.',
      logo: '/partners/alcove.png'
    },
    {
      name: 'Unity Care',
      description: 'Empowering youth and families through innovative programs and services.',
      logo: '/partners/unity-care.png'
    },
    {
      name: 'SJ Job Corps',
      description: 'Providing career training and education to help young people succeed.',
      logo: '/partners/sj-job-corps.png'
    },
    {
      name: 'Downtown Youth Wellness Center',
      description: 'Supporting youth mental health and wellness in our community.',
      logo: '/partners/dywc.png'
    },
    {
      name: 'YMCA',
      description: 'Building strong communities through youth development and social responsibility.',
      logo: '/partners/ymca.png'
    }
  ];

  const benefits = [
    {
      title: 'Social Impact',
      description: 'Make a meaningful difference in the lives of young people and contribute to positive social change.',
      icon: (
        <svg className="w-8 h-8 text-lift-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Broad Reach',
      description: 'Connect with diverse communities and expand your organization\'s impact across the region.',
      icon: (
        <svg className="w-8 h-8 text-lift-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'SDG Alignment',
      description: 'Align your organization with Sustainable Development Goals and demonstrate commitment to global progress.',
      icon: (
        <svg className="w-8 h-8 text-lift-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
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
              Our Partners
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-lift-text-secondary mb-8"
            >
              Together with our partners, we're creating lasting impact in communities
              through youth development and support services.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Partners Grid Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative group"
                onMouseEnter={() => setHoveredPartner(partner.name)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <div className="aspect-[9/5] bg-gray-100 rounded-lg p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={900}
                    height={500}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                {hoveredPartner === partner.name && (
                  <div className="absolute inset-0 bg-white/95 rounded-lg p-6 flex flex-col justify-center items-center text-center transition-all duration-300">
                    <h3 className="text-xl font-bold text-lift-text-primary mb-2">{partner.name}</h3>
                    <p className="text-lift-text-secondary">{partner.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Partner With Us Section */}
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
              Why Partner With Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lift-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-lift-text-primary mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-lift-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 bg-white">
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
              Become a Partner
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lift-text-secondary mb-8"
            >
              Join us in our mission to support and empower young people in our community.
              Let's create lasting impact together.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg">Schedule a Meeting</Button>
              <Button variant="secondary" size="lg">Fill Interest Form</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
} 