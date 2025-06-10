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
      {/* Back Navigation and Breadcrumb */}
      <div className="flex items-center space-x-2 mb-6">
        <a href="/" className="text-blue-600 text-lg">
          ←
        </a>
        <div className="text-gray-600 text-sm">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>{" "}
          &gt;
          <a href="/category" className="hover:text-blue-600">
            {" "}
            Category
          </a>{" "}
          &gt;
          <span>{product.name}</span>
        </div>
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
