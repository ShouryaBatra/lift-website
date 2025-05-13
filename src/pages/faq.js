import React from "react";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";

const faqs = [
  {
    question: "What is LIFT?",
    answer:
      "LIFT is a platform designed to provide financial literacy and professional development to those who need it the most.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply join a chapter in your area and start attending meetings.",
  },

  {
    question: "Is there a mobile app available?",
    answer:
      "Currently, LIFT is accessible through your web browser. We're working on a mobile app to enhance your experience on the go.",
  },
];

export default function FAQ() {
  return (
    <MainLayout>
      <Head>
        <title>FAQ - LIFT</title>
        <meta
          name="description"
          content="Frequently asked questions about LIFT - Your financial literacy and professional development platform"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about LIFT
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </main>
    </MainLayout>
  );
}
