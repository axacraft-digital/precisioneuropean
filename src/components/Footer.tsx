import { siteConfig, business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div>
            <p className="text-sm font-medium text-stone-900">{siteConfig.name}</p>
            <p className="mt-2 text-sm font-light text-stone-500">
              European auto service,
              <br />
              repair, and performance.
            </p>
          </div>

          <div>
            <p className="text-xs font-light uppercase tracking-widest text-stone-400">
              Location
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.state}{" "}
              {business.address.zip}
            </p>
          </div>

          <div>
            <p className="text-xs font-light uppercase tracking-widest text-stone-400">
              Contact
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={business.phoneHref}
                className="block text-sm font-light text-stone-600 transition-colors hover:text-violet-600"
              >
                {business.phone}
              </a>
              <a
                href="mailto:precisioneuropeanid@gmail.com"
                className="block text-sm font-light text-stone-600 transition-colors hover:text-violet-600"
              >
                precisioneuropeanid@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-light uppercase tracking-widest text-stone-400">
              Social
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.instagram.com/precisioneuropean/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-light text-stone-600 transition-colors hover:text-violet-600"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094321467629"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-light text-stone-600 transition-colors hover:text-violet-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-stone-200 pt-8">
          <p className="text-xs font-light text-stone-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
