// components/AboutPrasajati.tsx

export default function AboutPrasajati() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl font-semibold mb-6 text-center">
          About Prasajati
        </h2>

        {/* Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-lg text-gray-700">
              Prasajati specializes in distributing advanced thermal imaging
              equipment to meet the diverse needs of clients across various
              sectors. The products we offer are built on a solid foundation of
              technological innovation and expertise in photoelectric and
              optoelectronic imaging systems. After years of dedicated
              development, the company has its own core technological
              advantages, has a number of national invention patents with real
              patent value, and its technological strength has been in the
              forefront of the photoelectric imaging industry.
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-lg text-gray-700 mb-4">
              These solutions are supported by core technological advantages and
              national invention patents, ensuring reliable performance and
              cutting-edge capabilities. Our offerings empower clients with
              high-quality imaging tools that push the boundaries of modern
              optics and photonics.
            </p>
            <p className="text-lg text-gray-700">
              Our products are designed for use in law enforcement,
              anti-terrorism, border security, public safety, military training,
              mining, fire rescue, hunting, and outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
