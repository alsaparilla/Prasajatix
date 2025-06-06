export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>

        <div className="space-y-3 text-gray-700 mb-8">
          <p>
            Rukan Avenue No.125 - Jakarta Garden City - Cakung - Jakarta Timur
          </p>
          <p>
            <a
              href="mailto:info@prasajati.com"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              info@prasajati.com
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/622122467390"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              WhatsApp Us
            </a>
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Rukan%20Avenue%20No.125%20Jakarta%20Garden%20City%20Cakung&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
