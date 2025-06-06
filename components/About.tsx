export default function About() {
  return (
    <section id="about" className="bg-[#111827] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Larger Video */}
        <div className="w-full max-w-4xl mx-auto mb-10">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/m6qDyhnxvng"
              title="Prasajati Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Prasajati specializes in distributing advanced thermal imaging
          equipment to meet the diverse needs of clients across various sectors.
          The products we offer are built on a solid foundation of technological
          innovation and expertise in photoelectric and optoelectronic imaging
          systems. These solutions are supported by core technological
          advantages and national invention patents, ensuring reliable
          performance and cutting-edge capabilities. Our offerings empower
          clients with high-quality imaging tools that push the boundaries of
          modern optics and photonics.
        </p>
      </div>
    </section>
  );
}
