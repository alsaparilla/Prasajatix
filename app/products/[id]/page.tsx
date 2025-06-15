import products from "../../../public/data/enriched_products_with_categories.json";

type Product = {
  id: string;
  name: string;
  description: string;
  category?: string;
  images?: string[];
  features?: string;
  techSpecs?: { label: string; values: string[] }[];
};

export async function generateStaticParams() {
  return (products as Product[]).map((product) => ({
    id: product.id,
  }));
}

// Use dynamic params from static generation
export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-6 font-roboto">
      {/* Back Button */}
      <div className="mb-4">
        <a
          href="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back to Products</span>
        </a>
      </div>

      {/* Beautiful Breadcrumbs */}
      <div className="mb-8 overflow-x-auto">
        <nav className="inline-flex items-center space-x-1 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-100 shadow-sm min-w-max">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base whitespace-nowrap"
          >
            Home
          </a>

          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mx-1 sm:mx-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>

          <a
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline text-sm sm:text-base whitespace-nowrap"
          >
            Products
          </a>

          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mx-1 sm:mx-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>

          {product.category && (
            <>
              <span className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
                {product.category}
              </span>

              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mx-1 sm:mx-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          )}

          <span className="text-gray-700 font-semibold bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm shadow-sm whitespace-nowrap max-w-[120px] sm:max-w-none truncate">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row gap-12 w-full mb-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          {product.images?.[0] && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full max-w-[700px] h-auto object-contain rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Product Information Section */}
        <div className="flex-2 max-w-xl">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          {product.description && (
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          )}

          {/* Product Features */}
          {product.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <p className="text-gray-700">{product.features}</p>
            </div>
          )}

          {/* Product Tech Specs */}
          {product.techSpecs && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Technical Specifications
              </h3>
              <table className="table-auto w-full border-collapse">
                <tbody>
                  {product.techSpecs.map((spec, index) => (
                    <tr key={index}>
                      <td className="border-b py-2 px-4 text-gray-600 font-medium">
                        {spec.label}
                      </td>
                      <td className="border-b py-2 px-4 text-gray-700">
                        {spec.values.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Inquiry Buttons */}
          <div className="flex gap-4 mt-6 justify-center">
            <a
              href="mailto:info@prasajati.com"
              className="bg-blue-600 text-white py-4 px-8 rounded-lg text-center w-full hover:bg-blue-700 transition text-xl"
            >
              Email Us
            </a>
            <a
              href="tel:021-22467390"
              className="bg-green-600 text-white py-4 px-8 rounded-lg text-center w-full hover:bg-green-700 transition text-xl"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section Removed */}
    </div>
  );
}
