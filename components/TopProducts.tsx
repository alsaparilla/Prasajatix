"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images?: string[];
}

export default function TopProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/enriched_products_with_categories.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffledProducts = data.sort(() => Math.random() - 0.5);
        setProducts(shuffledProducts.slice(0, 6));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleNavigateToProducts = useCallback(() => {
    router.push("/products");
  }, [router]);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Top Products</h2>

        <div className="flex gap-2">
          {/* Primary navigation button */}
          <button
            key="nav-button"
            onClick={handleNavigateToProducts}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium cursor-pointer"
            type="button"
          >
            Find More Products
          </button>
        </div>
      </div>

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
            <Link
              href={`/products/${product.id}`}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-700 transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
