import Image from "next/image";
import { siteConfig, business, stats, brands, otherVehicles } from "@/lib/data";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h1 className="max-w-3xl text-3xl font-light leading-snug tracking-tight text-stone-900 md:text-5xl md:leading-tight">
            European auto service, repair, and performance — built on precision
            and nothing else.
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-stone-500 md:text-lg">
            Specialist care for Mercedes-Benz, BMW, Audi, VW, Volvo, and
            Porsche in Boise, Idaho.
          </p>
          <a
            href={business.phoneHref}
            className="mt-8 inline-block text-sm font-light text-violet-600 transition-colors hover:text-violet-700"
          >
            Schedule a visit &mdash; {business.phone}
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <Image
            src="/images/audi-r8-sunset-hero.jpg"
            alt="Matte gray Audi R8 with custom bronze wheels parked on a mountain road at sunset"
            width={1920}
            height={1280}
            className="h-[400px] w-full object-cover md:h-[600px]"
            priority
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-xs font-light uppercase tracking-widest text-stone-400">
            Services
          </p>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-stone-900 md:text-3xl">
            What we do
          </h2>

          <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
            {services.map((service) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16"
              >
                <div className="flex flex-col justify-center md:py-8">
                  <h3 className="text-xl font-light tracking-tight text-stone-900 md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 md:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt || service.title}
                    width={800}
                    height={540}
                    className="h-[300px] w-full object-cover md:h-[400px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-stone-200 py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-xs font-light uppercase tracking-widest text-stone-400">
            At a glance
          </p>

          <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-1 items-baseline gap-4 md:grid-cols-2 md:gap-16"
              >
                <h3 className="text-5xl font-light tracking-tight text-stone-900 md:text-7xl">
                  {stat.value} <span className="text-3xl md:text-5xl">{stat.label}</span>
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-stone-200 py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-xs font-light uppercase tracking-widest text-stone-400">
            Vehicles we service
          </p>

          <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand.name} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-light tracking-wide text-white md:text-2xl">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm font-light text-stone-400">
            Also servicing{" "}
            {otherVehicles.join(", ")}
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-stone-200 py-24 md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-light uppercase tracking-widest text-stone-400">
                Owner
              </p>
              <h2 className="mt-4 text-2xl font-light tracking-tight text-stone-900 md:text-3xl">
                {business.owner}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
                With over 11 years of experience as a European mechanic, Paris
                Risk founded Precision European to do one thing well: service
                European vehicles with the care and knowledge they require.
              </p>
              <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
                ASE Certified and specialized in Mercedes-Benz, Paris is also a
                certified TIG welder and graduate of the American Fabrication
                Academy, where he was valedictorian. That combination of
                mechanical expertise and fabrication skill means there&apos;s very
                little we can&apos;t handle in-house.
              </p>
              <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
                We keep an open shop door policy. You&apos;re welcome to see your
                vehicle being worked on at any time. No mystery, no surprises —
                just precision work on European machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-stone-200 py-24 md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-light uppercase tracking-widest text-stone-400">
                Contact
              </p>
              <h2 className="mt-4 text-2xl font-light tracking-tight text-stone-900 md:text-3xl">
                Get in touch
              </h2>
              <a
                href={business.phoneHref}
                className="mt-6 inline-block text-sm font-light text-violet-600 transition-colors hover:text-violet-700"
              >
                {business.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-light leading-relaxed text-stone-500 md:text-base">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-light text-violet-600 transition-colors hover:text-violet-700"
              >
                View on map
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
