interface Product {
  name: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    name: "MultiFunctional Thermal Imager DT-TW21",
    category: "Thermal Imaging",
    image: "/MultiFunctional Thermal Imager DT-TW21.webp",
  },
  {
    name: "GPNVG Night Vision Quad Goggles DTG-18F",
    category: "Night Vision",
    image: "/GPNVG Night Vision Quad GogglesDTG-18F.webp",
  },
  {
    name: "Night Vision Goggles PVS7 DT-NH9X",
    category: "Night Vision",
    image: "/Night Vision Goggles PVS7 DT-NH9X.webp",
  },
];

export default function TopProducts() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-full max-w-xs p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-contain rounded mb-4"
              />
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
