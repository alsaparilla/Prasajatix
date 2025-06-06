export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
            >
              <summary className="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-green-600">
                {faq.question}
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What are night vision devices?",
    answer: `Night vision goggles are devices that allow users to see in darkness or in difficult conditions of poor visibility (smoke, fog, rain or other disasters).`,
  },
  {
    question: "What is the lifetime of night vision devices?",
    answer: `The life of a night vision devices depends on its quality, frequency of use, and care. Most quality night vision goggles have optics and electronics that last for several years.`,
  },
  {
    question: "What are our waterproof test standards?",
    answer: `The international IP67 waterproof test requires the device to be immersed in 1 meter of water for 30 minutes, but we use a more stringent standard and conduct a 30-minute immersion test at a depth of 2 meters to ensure that the device can work normally in more demanding environments.`,
  },
  {
    question: "How to clean and maintain night vision devices?",
    answer: `When cleaning night vision devices, use a soft cloth to wipe the lens and avoid using any corrosive chemicals. Avoid humid environments when storing to extend the life of the device.`,
  },
  {
    question: "What kinds of payment methods do you accept?",
    answer: `You can make the payment to our bank account: 30% deposit in advance, 70% balance against the copy of B/L.`,
  },
  {
    question: "What is the average lead time?",
    answer: `For samples, the lead time is about 14 days. For mass production, the lead time is 40–60 days after receiving the deposit payment. The lead times become effective when (1) we have received your deposit, and (2) we have your final approval for your products. If our lead times do not work with your deadline, please go over your requirements with your sale. In all cases we will try to accommodate.`,
  },
  {
    question: "Do you guarantee safe and secure delivery of products?",
    answer: `Yes, we always use high quality export packaging. We also use specialized hazard packing for dangerous goods and validated cold storage shippers for temperature sensitive items. Specialist packaging and non-standard packing requirements may incur an additional charge.`,
  },
];
