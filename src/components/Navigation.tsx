"use client";

import Link from "next/link";
import { siteConfig, business, navigation } from "@/lib/data";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="text-sm font-medium tracking-tight text-stone-900">
          {siteConfig.name}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href={business.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900"
          >
            Directions
          </a>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="text-sm font-light text-stone-500 transition-colors hover:text-stone-900"
          >
            {business.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
