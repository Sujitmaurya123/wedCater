"use client";

import {
  ShieldCheck,
  Leaf,
  Clock,
  Users,
  Award,
  ThumbsUp,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Wedding Specialists",
    description:
      "Years of expertise in handling weddings of all sizes with professional chefs and trained staff.",
  },
  {
    icon: Leaf,
    title: "Fresh & Quality Ingredients",
    description:
      "We use only fresh, hygienic, and premium-quality ingredients for every dish we serve.",
  },
  {
    icon: Users,
    title: "Custom Menus for Every Culture",
    description:
      "North Indian, South Indian, Jain, Continental, and fusion menus designed just for you.",
  },
  {
    icon: Clock,
    title: "On-Time Service Guaranteed",
    description:
      "Precise planning and execution to ensure food service is smooth and perfectly timed.",
  },
  {
    icon: ShieldCheck,
    title: "100% Hygiene & Safety",
    description:
      "Strict hygiene standards followed in food preparation, serving, and presentation.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Happy Couples",
    description:
      "Hundreds of satisfied clients who recommend us for our taste, service, and reliability.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Catering Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We go beyond food to deliver an exceptional wedding dining
            experience for you and your guests.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                  <Icon size={26} className="text-amber-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
