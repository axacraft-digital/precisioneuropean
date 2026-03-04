# CLAUDE.md — Precision European

## Project
precisioneuropean.com — website redesign for Precision European, a European automotive service, repair, and performance shop in Boise, Idaho. Owned by Paris Risk. Built by Axacraft.

## Business Info
- **Name**: Precision European
- **Current domain**: precisioneuropeanboi.com
- **Location**: 816 W Elba St, Boise, ID 83709
- **Phone**: 208-488-2851
- **Owner**: Paris Risk — 11+ years experience as a European mechanic
- **Credentials**: ASE Certified, Specialized in Mercedes-Benz, Certified TIG Welder, American Fabrication Academy graduate (Valedictorian)
- **Specialty**: European vehicles — Mercedes-Benz, BMW, Audi, VW, Volvo, Sprinter, Toyota
- **Also services**: Mercedes Sprinter Vans (including Dodge Brand and Freightliner)

### Services Offered
1. Inspections (Vehicle, Pre-Purchase)
2. General Service (Oil, Transmission, Brake Fluid, Coolant Flush)
3. Brakes (Pads, Rotors, Lines, Calipers)
4. Cooling System Repair (A/C Service, Recharge, Repair)
5. Suspension (Shocks, Springs, Bushings, Control Arms, Ball Joints, Wheel/Tire Rotation)
6. Driveline (Axles, Driveshafts, Center Support Bearings, Manual Transmission Fluid, Clutch/Flywheel, Clutch Master/Slave Cylinder)
7. Mechanical & Electrical Diagnosis (Battery Testing, Oil Service Light Reset, Service Interval Reset)
8. Interior Component Repair & Replacement (Window Regulator, Gaskets and Seals)
9. Turbos, Ignition Upgrades (Turbo System Repair, Intercooler Installs, Spark Plugs, Ignition Coils)
10. Fuel System Repairs & Upgrades (Fuel Pumps, Injectors, Tune-ups, Air Filter/Intake, Engine Replacement)
11. Aftermarket & Performance Parts Installation (Suspension Systems, Coilovers, Lowering Springs, Engine Flash Tuning, Bigger Turbo Installs, Exhaust, Intercooler, Air Induction)

### Key Differentiators
- Only works on European vehicles to maintain quality
- Competitive pricing for Treasure Valley
- Performance parts installation AND software tuning (rare for most shops)
- One-stop shop: cars AND SUVs with off-roading expertise
- Open shop door policy — customers can see their vehicle being worked on

## Stack
- Next.js 16 (App Router, static export)
- React 19, TypeScript
- Tailwind CSS 4 (CSS-based config in `src/app/globals.css`, no tailwind.config.ts)
- Lucide React icons (always strokeWidth={1.25})
- Deployed on Vercel via GitHub

## Commands
- `npm run dev -- --port 3004` — start dev server
- `npx next build` — verify production build
- `npx next lint` — run ESLint

## Architecture
- All content lives in code, no CMS
- `src/lib/data.ts` — site config, navigation, business content
- `src/lib/services.ts` — all services with slugs, descriptions, features
- `src/components/` — shared components (Navigation, Footer, etc.)
- `src/app/layout.tsx` — root layout with Navigation + Footer
- Fonts loaded via `next/font/google` in layout.tsx
- `@/*` path alias maps to `./src/*`

## Design System

### Reference
- **Primary inspiration**: play.studio — Swiss minimalism, maximum restraint
- **Philosophy**: Less is more. Repeating simple grids. Typography does the heavy lifting. Unusual amounts of whitespace. No decoration, no icons for social links, no visual noise.

### Font
- **Inter** — weights 300 (light), 400 (regular), 500 (medium)
- Headlines: light (300), large sizes, tight tracking
- Body: light (300), relaxed leading
- Labels/overlines: light (300), uppercase, wide letter-spacing
- Nav/links: light (300) for items, medium (500) for logo

### Colors
- **Page background**: stone-50 (`#fafaf9`) — reads as white but subtly warm
- **Text primary**: stone-900 (`#1c1917`) — warm near-black
- **Text secondary**: stone-500 — descriptions, body copy
- **Text tertiary**: stone-400 — labels, overlines, muted elements
- **Borders**: stone-200 — section dividers
- **Accent**: violet-600 (`#7c3aed`) — links only, used very sparingly
- **Footer background**: stone-100 — light warm gray
- All grays use the Tailwind `stone` palette for subtle warmth

### Layout
- **Max width**: `max-w-7xl` (1280px) — wide, generous
- **Horizontal padding**: `px-6 md:px-12`
- **Section padding**: `py-24 md:py-40` — generous vertical breathing room
- **Grid**: Simple two-column (text left, image right) repeating pattern
- **Images**: Large, full-column width, object-cover

### Component Patterns
- **Navigation**: Fixed, logo left (text only), links right, light weight, backdrop blur
- **Footer**: stone-100 background, 4-column grid, generous padding (py-24 md:py-32), social links spelled out as text (not icons)
- **Section labels**: Tiny uppercase tracking-widest overlines in stone-400
- **Stats**: Massive type for values, small descriptive text beside

## Content Guidelines
- **Photography**: This is an automotive shop — real photos of the shop, cars, and work ARE appropriate here (unlike agency sites). Kelly will source these from the client.
- **Copy voice**: Trustworthy, direct, knowledgeable. Not salesy. A mechanic who knows what he's doing and respects your time.
- **Avoid**: Generic auto shop clichés ("your trusted partner," "we treat your car like our own"), stock photography of random cars
- **Core message**: European specialists who actually know these vehicles inside and out. One-stop shop for service AND performance.
- **Kelly refines copy.** Get it 80% right. Don't agonize.

## Workflow — How We Build Sites

### Phase 0: Scaffold (COMPLETE)
- Create project with `npx create-next-app@latest`
- Install exact stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide React
- Set up folder structure: `src/app/`, `src/components/`, `src/lib/`
- Create this CLAUDE.md with business info and stack docs
- Push to GitHub, connect to Vercel

### Phase 1: Design Reference Study (COMPLETE)
- Reference: play.studio — Swiss minimalism, restraint, typography-driven
- Design system documented above

### Phase 2: Build (IN PROGRESS)
- Implement all pages using the synthesized design system
- Content-first: port real business content from current site
- All content in code (`src/lib/data.ts`, `src/lib/services.ts`)
- Build shared components first (Navigation, Footer, PageHero, etc.)
- Then build page by page

### Phase 3: Refine
- Kelly reviews, provides feedback
- Polish copy, spacing, responsive behavior
- Add any photography the client provides
- Final QA and build verification

### Phase 4: Launch
- Client approves the design
- Flip DNS to Vercel
- Decommission old site

## Site Structure (Planned)
- Homepage (hero, services overview, brands, why choose us, location/contact)
- /services (overview of all services)
- Individual service pages (if warranted by depth)
- /about (owner bio, shop story, credentials)
- /contact (address, phone, hours, map, appointment request)

## Git Workflow
- Push to `main` branch — Vercel deploys automatically
- Commit often with descriptive messages
- Never force push to main
