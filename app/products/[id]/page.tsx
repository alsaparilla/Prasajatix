"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const docRef = doc(db, "product", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct(productData);
          fetchRelated(productData.category);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }

    async function fetchRelated(category: string) {
      const q = query(
        collection(db, "product"),
        where("category", "==", category)
      );
      const snapshot = await getDocs(q);
      const related = snapshot.docs
        .filter((doc) => doc.id !== id)
        .map((doc) => ({ id: doc.id, ...doc.data() }));
      setRelatedProducts(related);
    }

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 mt-8">{error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="list-reset flex">
          <li>
            <a href="/" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="/products" className="text-blue-600 hover:underline">
              Products
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700">{product.name}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-6">{product.description}</p>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {product.images?.map((url: string, idx: number) => (
          <img
            key={idx}
            src={url}
            alt={`Image ${idx + 1}`}
            className="rounded shadow"
          />
        ))}
      </div>

      {/* Features */}
      <h2 className="text-xl font-semibold mb-2">Product Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {product.features?.map((url: string, idx: number) => (
          <img
            key={idx}
            src={url}
            alt={`Feature ${idx + 1}`}
            className="rounded shadow"
          />
        ))}
      </div>

      {/* Tech Specs */}
      <h2 className="text-xl font-semibold mb-2">Technical Specifications</h2>
      <div className="border rounded p-4 bg-gray-50 mb-6">
        <p className="mb-2">
          <span className="font-semibold">Features:</span>
          <br />
          {product.techSpecs?.features}
        </p>
        <p>
          <span className="font-semibold">Specification:</span>
          <br />
          {product.techSpecs?.specification}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Inquire via WhatsApp
        </a>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((item: any) => (
              <div
                key={item.id}
                className="border rounded p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href={`/products/${item.id}`}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
