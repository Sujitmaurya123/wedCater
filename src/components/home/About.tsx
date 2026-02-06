import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        {/* IMAGE */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/catering.jpg"
            alt="Wedding Catering Team"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Our Wedding Catering
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We are a passionate wedding catering team dedicated to making your
            special day truly unforgettable. With years of experience in
            catering traditional and modern weddings, we bring together
            authentic flavors, premium ingredients, and elegant presentation.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From intimate family ceremonies to grand wedding celebrations, our
            chefs and service staff ensure every guest enjoys a memorable dining
            experience. We specialize in customized menus designed to match your
            culture, taste, and wedding theme.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-500">500+</p>
              <p className="text-sm text-gray-600">Weddings Catered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-500">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-500">100%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-black hover:bg-amber-400 transition"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
