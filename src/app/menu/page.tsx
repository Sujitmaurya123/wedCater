export default function MenuPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Wedding Catering Menu
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Carefully crafted menus with authentic flavors, premium ingredients,
            and elegant presentation for your special day.
          </p>
        </div>
      </section>

      {/* MENU CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {/* WELCOME DRINKS */}
          <MenuSection
            title="Welcome Drinks"
            items={[
              "Fresh Lime Soda",
              "Jaljeera",
              "Fruit Punch",
              "Cold Coffee",
              "Mocktails (Seasonal)",
            ]}
          />

          {/* STARTERS */}
          <MenuSection
            title="Veg Starters"
            items={[
              "Paneer Tikka",
              "Veg Seekh Kebab",
              "Hara Bhara Kebab",
              "Crispy Corn",
              "Spring Rolls",
            ]}
          />

          <MenuSection
            title="Non-Veg Starters"
            items={[
              "Chicken Tikka",
              "Chicken Seekh Kebab",
              "Fish Amritsari",
              "Mutton Galouti Kebab",
            ]}
          />

          {/* MAIN COURSE */}
          <MenuSection
            title="Veg Main Course"
            items={[
              "Paneer Butter Masala",
              "Shahi Paneer",
              "Mix Veg",
              "Dal Makhani",
              "Jeera Aloo",
              "Veg Korma",
            ]}
          />

          <MenuSection
            title="Non-Veg Main Course"
            items={[
              "Butter Chicken",
              "Chicken Curry",
              "Mutton Rogan Josh",
              "Fish Curry",
            ]}
          />

          {/* INDIAN BREADS */}
          <MenuSection
            title="Indian Breads"
            items={[
              "Butter Naan",
              "Tandoori Roti",
              "Missi Roti",
              "Lachha Paratha",
            ]}
          />

          {/* RICE */}
          <MenuSection
            title="Rice & Accompaniments"
            items={[
              "Steamed Rice",
              "Veg Biryani",
              "Jeera Rice",
              "Raita",
              "Salad & Chutneys",
            ]}
          />

          {/* LIVE COUNTERS */}
          <MenuSection
            title="Live Food Counters"
            items={[
              "Chaat Counter",
              "Dosa Counter",
              "Pasta Counter",
              "Chinese Wok",
              "Barbecue / Tandoor Live",
            ]}
          />

          {/* DESSERTS */}
          <MenuSection
            title="Desserts"
            items={[
              "Gulab Jamun",
              "Rasgulla",
              "Ice Cream (Multiple Flavors)",
              "Gajar Halwa",
              "Brownie with Hot Chocolate Sauce",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black">
            Want a Custom Wedding Menu?
          </h2>
          <p className="mt-4 text-black/80 text-lg">
            We customize menus based on your culture, budget, and guest
            preferences.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 rounded-full bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800 transition"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </main>
  );
}

/* =====================
   REUSABLE MENU SECTION
===================== */

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-gray-700">
        {items.map((item, index) => (
          <li
            key={index}
            className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-500 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
