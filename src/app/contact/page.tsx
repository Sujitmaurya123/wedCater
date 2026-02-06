"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
            Planning a wedding? Let’s talk about your catering needs and create
            a memorable dining experience for your special day.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2">
          
          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Reach out to us for bookings, menu customization, pricing details,
              or any wedding catering queries.
            </p>

            <ul className="mt-8 space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <MapPin className="text-amber-500 mt-1" />
                <span>
                  Serving weddings across major cities in India
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Phone className="text-amber-500" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-amber-600"
                >
                  +91 99999 99999
                </a>
              </li>

              <li className="flex items-center gap-4">
                <Mail className="text-amber-500" />
                <a
                  href="mailto:info@wedcater.com"
                  className="hover:text-amber-600"
                >
                  info@wedcater.com
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <form className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Wedding Details / Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Wedding date, guest count, city, menu preference..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 py-3 text-lg font-semibold text-black hover:bg-amber-400 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP / CTA */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Book Your Wedding Catering Today
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Early bookings help us plan better and serve you perfectly on your
            big day.
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block mt-8 rounded-full bg-green-500 px-10 py-4 text-lg font-semibold text-white hover:bg-green-400 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
