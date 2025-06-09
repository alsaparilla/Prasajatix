"use client"; // Add this line for client-side rendering if using hooks

export default function About() {
  return (
    <section id="about" className="bg-[#111827] text-white py-16 px-4">
      <div className="w-full max-w-6xl mx-auto mb-10">
        <div className="relative pb-[56.25%] h-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/m6qDyhnxvng" // Replace with your video link
            title="Prasajati Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
