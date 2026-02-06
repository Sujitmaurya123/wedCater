import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Our Wedding Catering
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
            Crafting unforgettable wedding dining experiences with authentic
            flavors, elegant presentation, and heartfelt service.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are a dedicated wedding catering team with a passion for food
              and celebrations. Over the years, we have proudly served hundreds
              of weddings, from intimate family ceremonies to grand destination
              weddings.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our approach is simple — understand your vision, design the
              perfect menu, and deliver a flawless dining experience that your
              guests will remember forever.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard value="500+" label="Weddings Catered" />
            <StatCard value="10+" label="Years of Experience" />
            <StatCard value="50,000+" label="Happy Guests Served" />
            <StatCard value="100%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To deliver high-quality, hygienic, and delicious wedding catering
              services while creating joyful food experiences for every guest.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become a trusted name in wedding catering by combining
              tradition, innovation, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Why Choose Us
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Expert Wedding Chefs"
              description="Highly skilled chefs experienced in traditional and modern wedding cuisine."
            />
            <FeatureCard
              title="Customized Menus"
              description="Menus designed around your culture, taste, and budget."
            />
            <FeatureCard
              title="Hygiene & Quality"
              description="Strict hygiene standards and premium ingredients in every dish."
            />
            <FeatureCard
              title="Live Food Counters"
              description="Freshly prepared food with interactive live stations."
            />
            <FeatureCard
              title="Elegant Presentation"
              description="Beautiful buffet setups matching your wedding theme."
            />
            <FeatureCard
              title="On-Time Service"
              description="Perfect planning to ensure smooth and timely service."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Let’s Plan Your Wedding Menu
          </h2>
          <p className="mt-4 text-lg text-black/80">
            Share your wedding details and we’ll create a customized catering
            plan just for you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 rounded-full bg-black px-10 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =====================
   REUSABLE COMPONENTS
===================== */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border p-6 text-center">
      <p className="text-3xl font-bold text-amber-500">{value}</p>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-50 p-8 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
