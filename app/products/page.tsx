"use client"; // Ensure it's a client-side component for useState

import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  category?: string;
  images?: string[];
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["All Categories"]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");

  useEffect(() => {
    fetch("../data/enriched_products_with_categories.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Extract unique categories
        const productCategories = [
          "All Categories",
          ...(Array.from(
            new Set(
              data.map((product: Product) => product.category || "category")
            )
          ) as string[]),
        ];
        setCategories(productCategories);

        // Initially, all products are displayed
        setFilteredProducts(data);
      });
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All Categories") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      {/* Category Filter */}
      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            {/* Product Image */}
            {product.images?.[0] && (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
                loading="lazy"
              />
            )}

            {/* Product Name */}
            <h3 className="text-lg font-medium mb-2">
              {product.name.length > 50
                ? product.name.slice(0, 50) + "..."
                : product.name}
            </h3>

            {/* Product Category */}
            <p className="text-sm text-gray-600 mb-4">
              {product.category || "category"}
            </p>

            {/* View Details Button */}
            <a
              href={`/products/${product.id}`}
              className="inline-block bg-green-600 text-white px-6 py-3 w-full text-center rounded-md hover:bg-green-700 transition mt-auto"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
