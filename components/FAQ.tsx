// components/Faq.tsx

"use client"; // <-- Add this line at the top

import { useState } from "react";

const faqData = [
  {
    question: "What are night vision devices?",
    answer:
      "Night vision devices are tools used to see in low light or dark environments by amplifying available light.",
  },
  {
    question: "What is the lifetime of night vision devices?",
    answer:
      "The lifetime of night vision devices varies depending on the type, usage, and maintenance, but most last for several years.",
  },
  {
    question: "What are our waterproof test standards?",
    answer:
      "Our night vision devices undergo rigorous waterproof testing to ensure they function in all weather conditions, with IP67 or higher ratings.",
  },
  {
    question: "How to clean and maintain night vision devices?",
    answer:
      "Regular cleaning with a soft cloth and proper storage can extend the life of night vision devices. Always follow the manufacturer’s instructions.",
  },
  {
    question: "What kinds of payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for payment.",
  },
  {
    question: "What is the average lead time?",
    answer:
      "The average lead time is between 1-2 weeks, depending on the order size and delivery location.",
  },
  {
    question: "Do you guarantee safe and secure delivery of products?",
    answer:
      "Yes, we offer secure delivery options and ensure all products are shipped with tracking and insurance.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        {" "}
        {/* Center the title */}
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {faqData.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <button
              className="w-full text-left text-lg font-semibold focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {open === index && (
              <div className="mt-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
