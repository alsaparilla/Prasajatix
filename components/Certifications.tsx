export default function Certifications() {
  const certs = [1, 2, 3, 4, 5];

  return (
    <section className="bg-gray-50 py-16 px-4 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-8">
        Principal&apos;s Certification
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {certs.map((n) => (
          <img
            key={n}
            src={`/certification${n}.webp`}
            alt={`Certification ${n}`}
            className="w-72 h-auto object-contain shadow-md rounded" // Increased the width
          />
        ))}
      </div>
    </section>
  );
}
