// components/Patent.tsx

export default function Patent() {
  const patents = [
    "/zhengshu04.webp",
    "/zhengshu06.webp",
    "/zhengshu07.webp",
    "/zhengshu08.webp",
    "/zhengshu09.webp",
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-8">Our Principal's Patents</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {patents.map((patent, index) => (
          <img
            key={index}
            src={patent}
            alt={`Patent ${index + 1}`}
            className="w-72 h-auto object-contain shadow-md rounded"
          />
        ))}
      </div>
    </section>
  );
}
