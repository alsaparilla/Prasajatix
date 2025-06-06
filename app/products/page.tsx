"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../../lib/getProducts";

export default function ProductPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow bg-white">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="mt-2 font-light text-xs">
              Category: {product.category}
            </p>
            {product.images?.length > 0 && (
              <img
                src={product.images[0]}
                alt={product.name}
                className="mt-2 w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
