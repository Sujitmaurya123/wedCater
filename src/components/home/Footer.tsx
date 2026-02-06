import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Wed<span className="text-amber-500">Cater</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Premium wedding catering services delivering unforgettable taste,
            elegant presentation, and flawless service for your special day.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-amber-500">Home</Link></li>
            <li><Link href="/menu" className="hover:text-amber-500">Menu</Link></li>
            <li><Link href="/services" className="hover:text-amber-500">Services</Link></li>
            <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li>Wedding Catering</li>
            <li>Reception & Buffet</li>
            <li>Live Food Counters</li>
            <li>Traditional Indian Cuisine</li>
            <li>Custom Menu Planning</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-amber-500" />
              <span>Serving All Major Wedding Locations in India</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500" />
              <a href="tel:+919999999999" className="hover:text-white">
                +91 99999 99999
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500" />
              <a href="mailto:info@wedcater.com" className="hover:text-white">
                info@wedcater.com
              </a>
            </li>
          </ul>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="hover:text-amber-500">
              <Instagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-amber-500">
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} WedCater. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-amber-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
