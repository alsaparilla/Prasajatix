"use client"; // Ensure it's a client-side component

export default function Experience() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">OUR PRINCIPAL'S EXPERIENCE</h2>
        {/* Line between title and statistics */}
        <hr className="my-6 border-t-2 border-white w-1/4 mx-auto" />
      </div>

      {/* Statistics Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="text-center">
          <p className="text-lg">Year of</p>
          <h3 className="text-8xl font-bold">20</h3>
          <p className="text-lg mt-2">Experience</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Established in</p>
          <h3 className="text-8xl font-bold">2014</h3>
          <p className="text-lg mt-2">Year</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Factory Employees</p>
          <h3 className="text-8xl font-bold">50</h3>
          <p className="text-lg mt-2">+ Employees</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Partner Countries</p>
          <h3 className="text-8xl font-bold">50</h3>
          <p className="text-lg mt-2">+ Countries</p>
        </div>
      </div>
    </section>
  );
}
