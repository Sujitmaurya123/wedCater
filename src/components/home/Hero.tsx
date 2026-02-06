"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/catering.jpg"
        alt="Wedding Catering Service"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Make Your Wedding <span className="text-amber-400">Unforgettable</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Premium wedding catering services with authentic flavors, elegant
            presentation, and unforgettable taste for your special day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-black hover:bg-amber-400 transition"
            >
              Book Catering
            </Link>

            <Link
              href="/menu"
              className="rounded-full border border-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
