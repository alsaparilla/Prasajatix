import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
        <nav className="hidden md:flex space-x-8 text-base font-semibold uppercase tracking-wide">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-400 transition">
            Products
          </Link>
        </nav>

        {/* Right: Search & Language */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-green-400 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
          </button>
          <span className="text-sm">English ▾</span>
        </div>
      </div>
    </header>
  );
}
