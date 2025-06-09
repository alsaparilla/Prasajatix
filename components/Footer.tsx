export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Company Logo and Info */}
        <div className="flex items-center mb-6 md:mb-0 justify-center md:justify-start">
          <img src="/logo.png" alt="Prasajati Logo" className="h-12 mr-4" />
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Prasajati</p>
            <p className="text-sm">
              <a href="/products" className="hover:underline">
                prasajati.com
              </a>
            </p>
          </div>
        </div>

        {/* Products Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">PRODUCTS</h3>
          <ul className="text-sm">
            <li>
              <a href="/products" className="hover:underline">
                Night Vision
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Digital Optics
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Thermal Imaging
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Other Products
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
          <ul className="text-sm">
            <li>
              Address: Rukan Avenue No. 125 - Jakarta Garden City - Cakung -
              Jakarta Timur
            </li>
            <li>Phone: +62 21 22467390</li>
            <li>
              <a href="mailto:info@prasajati.com" className="hover:underline">
                info@prasajati.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Line above Copyright */}
      <hr className="my-6 border-t-2 border-gray-600" />

      <div className="text-center mt-6 text-sm">
        <p>© 2025 Prasajati. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
