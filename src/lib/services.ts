export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt?: string;
}

export const services: Service[] = [
  {
    slug: "inspections",
    title: "Inspections",
    description:
      "Comprehensive vehicle and pre-purchase inspections. Know exactly what you're buying or where your vehicle stands before a single wrench is turned.",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
  },
  {
    slug: "general-service",
    title: "General Service",
    description:
      "Oil changes, transmission fluid, brake fluid, and coolant flushes. The scheduled maintenance that keeps European engines running the way they were designed to.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
  },
  {
    slug: "brakes",
    title: "Brakes",
    description:
      "Pads, rotors, lines, and calipers. European braking systems are engineered for performance — we service them with the precision they demand.",
    image: "/images/audi-rs-brake-caliper-service.jpg",
    alt: "Close-up of an Audi RS red brake caliper behind a bronze alloy wheel",
  },
  {
    slug: "cooling-ac",
    title: "Cooling & A/C",
    description:
      "Full cooling system repair, A/C service, recharge, and repair. Idaho summers are no joke — and neither is an overheating European engine.",
    image: "/images/automotive-ac-coolant-service-gauges.jpg",
    alt: "Mechanic holding A/C pressure gauges over an engine bay during coolant service",
  },
  {
    slug: "suspension",
    title: "Suspension",
    description:
      "Shocks, springs, bushings, control arms, ball joints, and wheel rotation. Restore the ride quality your vehicle was built to deliver.",
    image: "/images/performance-coilover-suspension-springs.jpg",
    alt: "Close-up of blue performance coilover springs and adjustable dampers",
  },
  {
    slug: "performance",
    title: "Performance",
    description:
      "Bigger turbo installs, exhaust upgrades, intercoolers, air induction, engine flash tuning, coilovers, and lowering springs. The work most shops can't or won't do.",
    image: "/images/mercedes-amg-engine-bay-performance.jpg",
    alt: "Mercedes-AMG engine bay with carbon fiber accents and performance intake",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    description:
      "Mechanical and electrical diagnosis, battery testing, oil service light reset, and service interval reset. We find the actual problem — not just the symptom.",
    image: "/images/european-vehicle-diagnostic-scan-tool.jpg",
    alt: "Mechanic running laptop diagnostic software on a vehicle engine with multimeter attached",
  },
  {
    slug: "driveline",
    title: "Driveline",
    description:
      "Axles, driveshafts, center support bearings, clutch and flywheel, manual transmission fluid, and master/slave cylinders. Everything that puts power to the ground.",
    image: "/images/driveline-driveshaft-transmission-service.jpg",
    alt: "Mechanic servicing a driveshaft and transmission housing from underneath a vehicle",
  },
];
