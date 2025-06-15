"use client"; // Ensure it's a client-side component for useState

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#111827] text-white px-8 py-4 md:py-5 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Prasajati Logo"
            width={60}
            height={60}
            priority
          />
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold uppercase tracking-wide flex-grow justify-center">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-400 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-green-400 transition">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-green-400 transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact Us
          </Link>
        </nav>

        {/* Right: Inquire Now button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Inquire Now
          </Link>
        </div>

        {/* Right: Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#111827] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href="/" className="text-lg font-semibold" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/products"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Inquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
