"use client"; // Ensure it's a client-side component

import { useEffect, useState } from "react";
import Link from "next/link"; // Use the Link component directly from Next.js

// Define the structure of the product
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images?: string[];
}

export default function TopProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products data
  useEffect(() => {
    fetch("/data/enriched_products_with_categories.json")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle products to get random ones and pick the top 6
        const shuffledProducts = data.sort(() => Math.random() - 0.5);
        setProducts(shuffledProducts.slice(0, 6)); // Get 6 random products
      });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">Top Products</h2>

        {/* Button to navigate to the product list */}
        <Link
          href="/products"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Find More Products
        </Link>
      </div>

      {/* Product Grid - 3 columns, 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-full p-4 flex flex-col items-center"
          >
            {product.images?.[0] && (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-44 object-contain rounded mb-4"
              />
            )}
            <div className="text-center">
              <h3 className="text-base font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            </div>
            {/* View Details Button */}
            <Link
              href={`/products/${product.id}`}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
