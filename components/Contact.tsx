"use client"; // Add this line to mark the component as a Client Component

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@prasajati.com?subject=Inquiry from ${name}&body=Country: ${country}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="country" className="text-lg text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Send Email
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="w-full md:w-1/2 h-96">
          {" "}
          {/* Fixed height of 20rem */}
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
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
      </div>
    </section>
  );
}
