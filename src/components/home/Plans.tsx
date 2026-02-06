"use client";

import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Silver Plan",
    price: "₹799 / Plate",
    description: "Perfect for small & intimate wedding ceremonies",
    features: [
      "Welcome Drinks",
      "Starter (Veg)",
      "3 Main Course Items",
      "Rice & Dal",
      "Salad & Chutney",
      "1 Dessert",
      "Professional Serving Staff",
    ],
    popular: false,
  },
  {
    name: "Gold Plan",
    price: "₹1,199 / Plate",
    description: "Most popular choice for weddings & receptions",
    features: [
      "Welcome Drinks",
      "2 Starters (Veg)",
      "Live Food Counter",
      "5 Main Course Items",
      "Indian Breads",
      "Rice Varieties",
      "2 Desserts",
      "Elegant Buffet Setup",
    ],
    popular: true,
  },
  {
    name: "Platinum Plan",
    price: "₹1,799 / Plate",
    description: "Luxury catering for grand wedding celebrations",
    features: [
      "Premium Welcome Drinks",
      "Veg & Non-Veg Starters",
      "Multiple Live Counters",
      "7+ Main Course Items",
      "Continental & Indian Menu",
      "Premium Desserts",
      "Luxury Buffet & Decor",
      "Dedicated Event Manager",
    ],
    popular: false,
  },
];

const Plans = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Catering Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Flexible wedding catering plans designed to suit every budget and
            celebration style.
          </p>
        </div>

        {/* PLANS */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 shadow-sm hover:shadow-xl transition ${
                plan.popular
                  ? "border-amber-500 bg-amber-50 scale-[1.03]"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="inline-block mb-4 rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-black">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-2 text-gray-600">{plan.description}</p>

              <p className="mt-6 text-3xl font-bold text-amber-600">
                {plan.price}
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="mt-1 text-amber-500"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`mt-8 block text-center rounded-full px-6 py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-black"
                }`}
              >
                Get This Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
