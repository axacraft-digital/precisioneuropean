import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precisioneuropean.com"),
  title: "Precision European — European Auto Service & Performance | Boise, ID",
  description:
    "Specialist European vehicle service, repair, and performance in Boise, Idaho. Mercedes-Benz, BMW, Audi, VW, Volvo, and Porsche. ASE Certified. 11+ years experience.",
  keywords: [
    "European auto repair Boise",
    "Mercedes-Benz service Boise",
    "BMW repair Boise Idaho",
    "Audi mechanic Boise",
    "VW service Boise",
    "Volvo repair Boise",
    "Porsche service Idaho",
    "European car performance Boise",
    "ASE certified European mechanic",
    "Sprinter van service Boise",
    "auto repair Treasure Valley",
  ],
  alternates: {
    canonical: "https://precisioneuropean.com",
  },
  openGraph: {
    title: "Precision European — European Auto Service & Performance",
    description:
      "Specialist European vehicle service, repair, and performance in Boise, Idaho. ASE Certified. 11+ years experience.",
    url: "https://precisioneuropean.com",
    siteName: "Precision European",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/audi-r8-sunset-hero.jpg",
        width: 1920,
        height: 1280,
        alt: "Precision European — European Auto Service in Boise, Idaho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision European — European Auto Service & Performance",
    description:
      "Specialist European vehicle service, repair, and performance in Boise, Idaho. ASE Certified. 11+ years experience.",
    images: ["/images/audi-r8-sunset-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
