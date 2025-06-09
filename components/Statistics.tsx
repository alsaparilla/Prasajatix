"use client"; // Ensure it's a client-side component

export default function Statistics() {
  return (
    <section className="bg-gray-800 text-white py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">
          OUR PRINCIPAL HAS ALREADY FULFILLED MANY PROJECTS
        </h2>
        {/* Add line between title and statistics */}
        <hr className="my-6 border-t-2 border-white w-1/4 mx-auto" />
      </div>

      {/* Statistics Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="text-center">
          <p className="text-lg">We have Clients in</p>
          <h3 className="text-8xl font-bold">130</h3>
          <p className="text-lg mt-2">Countries</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Successful work with</p>
          <h3 className="text-8xl font-bold">200</h3>
          <p className="text-lg mt-2">Clients</p>
        </div>
        <div className="text-center">
          <p className="text-lg">Successful completed</p>
          <h3 className="text-8xl font-bold">105</h3>
          <p className="text-lg mt-2">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-lg">We have more than</p>
          <h3 className="text-8xl font-bold">150</h3>
          <p className="text-lg mt-2">Exports</p>
        </div>
      </div>
    </section>
  );
}
