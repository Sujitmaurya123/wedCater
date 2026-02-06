import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Wedding Catering Services
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
            From traditional wedding feasts to luxury live counters, we provide
            complete catering solutions tailored to your celebration.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* SERVICE 1 */}
          <ServiceBlock
            title="Complete Wedding Catering"
            description="End-to-end catering services for weddings of all sizes. We manage menu planning, food preparation, buffet setup, and professional service staff so you can enjoy your special day stress-free."
            points={[
              "Veg & Non-Veg menus",
              "Professional chefs & serving staff",
              "Elegant buffet presentation",
              "Small to large guest capacity",
            ]}
          />

          {/* SERVICE 2 */}
          <ServiceBlock
            title="Custom Menu Planning"
            description="Every wedding is unique. We design personalized menus based on your culture, taste preferences, guest profile, and budget."
            points={[
              "North & South Indian cuisine",
              "Jain & Satvik food options",
              "Continental & fusion menus",
              "Special kids & elderly-friendly items",
            ]}
            reverse
          />

          {/* SERVICE 3 */}
          <ServiceBlock
            title="Live Food Counters"
            description="Interactive live cooking stations that add excitement and freshness to your wedding celebration."
            points={[
              "Chaat counter",
              "Dosa & South Indian counter",
              "Pasta & Chinese wok",
              "Tandoor & barbecue live grill",
            ]}
          />

          {/* SERVICE 4 */}
          <ServiceBlock
            title="Luxury Buffet & Presentation"
            description="Beautifully designed buffet layouts with decorative counters that match your wedding theme."
            points={[
              "Theme-based buffet setup",
              "Premium serving equipment",
              "Uniformed & trained staff",
              "Hygienic food display",
            ]}
            reverse
          />

          {/* SERVICE 5 */}
          <ServiceBlock
            title="Pre-Wedding & Post-Wedding Events"
            description="Catering services for all wedding-related functions so you don’t need multiple vendors."
            points={[
              "Engagement ceremonies",
              "Mehndi & Haldi functions",
              "Sangeet nights",
              "Reception & post-wedding brunch",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Looking for the Perfect Wedding Catering?
          </h2>
          <p className="mt-4 text-black/80 text-lg">
            Get a customized catering plan designed specifically for your
            wedding and guest list.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 rounded-full bg-black px-10 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =====================
   REUSABLE SERVICE BLOCK
===================== */

function ServiceBlock({
  title,
  description,
  points,
  reverse = false,
}: {
  title: string;
  description: string;
  points: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-12 lg:grid-cols-2 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* CONTENT */}
      <div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          {description}
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-500"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
<div className="relative h-[320px] rounded-2xl overflow-hidden shadow-md">
  <Image
    src="/images/services1.jpg"
    alt="Wedding catering service"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
    </div>
  );
}
