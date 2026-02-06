"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // =====================
  // FUNCTIONS
  // =====================
  const openMobileMenu = () => setMobileOpen(true);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-amber-600">
          WedCater
        </Link>

        {/* =====================
            DESKTOP MENU
        ===================== */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-amber-600 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-amber-600 transition">
            Menu
          </Link>
          <Link href="/services" className="hover:text-amber-600 transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-amber-600 transition">
            About
          </Link>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="bg-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition"
          >
            Book Now
          </Link>
        </div>

        {/* =====================
            MOBILE BUTTON
        ===================== */}
        <button
          onClick={openMobileMenu}
          className="md:hidden text-gray-800"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* =====================
          MOBILE MENU
      ===================== */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60">
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6">
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="mb-8 text-gray-800"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6 text-lg">
              <Link onClick={closeMobileMenu} href="/">
                Home
              </Link>
              <Link onClick={closeMobileMenu} href="/menu">
                Menu
              </Link>
              <Link onClick={closeMobileMenu} href="/services">
                Services
              </Link>
              <Link onClick={closeMobileMenu} href="/about">
                About
              </Link>

              {/* Mobile CTA (Different UX) */}
              <Link
                onClick={closeMobileMenu}
                href="/contact"
                className="mt-4 bg-amber-500 text-black px-6 py-3 rounded-lg text-center font-semibold"
              >
                📞 Book Catering
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
