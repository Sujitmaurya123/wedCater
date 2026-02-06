"use client";

import { Utensils, ChefHat, Flame, Sparkles } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Wedding Catering",
    description:
      "Complete wedding catering with beautifully crafted menus, premium ingredients, and flawless service.",
  },
  {
    icon: ChefHat,
    title: "Custom Menu Planning",
    description:
      "Personalized menu design tailored to your culture, taste preferences, and wedding theme.",
  },
  {
    icon: Flame,
    title: "Live Food Counters",
    description:
      "Interactive live counters like chaat, dosa, pasta, barbecue, and dessert stations.",
  },
  {
    icon: Sparkles,
    title: "Luxury Presentation",
    description:
      "Elegant buffet setups, decorative food displays, and professional serving staff.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Catering Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From intimate ceremonies to grand wedding celebrations, we provide
            exceptional catering services that your guests will remember.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-500 transition">
                  <Icon
                    size={26}
                    className="text-amber-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
