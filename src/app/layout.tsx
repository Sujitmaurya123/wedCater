import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "WedCater | Premium Wedding Catering Services",
    template: "%s | WedCater",
  },
  description:
    "WedCater offers premium wedding catering services with customized menus, live food counters, and luxury buffet setups for unforgettable weddings.",
  keywords: [
    "wedding catering",
    "wedding caterers in india",
    "luxury wedding catering",
    "indian wedding catering services",
    "wedding food services",
    "live food counters wedding",
  ],
  authors: [{ name: "WedCater" }],
  creator: "WedCater",
  publisher: "WedCater",

  openGraph: {
    title: "WedCater | Premium Wedding Catering Services",
    description:
      "Premium wedding catering with authentic flavors, elegant presentation, and professional service.",
    url: "https://www.wedcater.com",
    siteName: "WedCater",
    images: [
      {
        url: "/images/catering.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Catering Services by WedCater",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WedCater | Premium Wedding Catering Services",
    description:
      "Make your wedding unforgettable with premium catering services and custom menus.",
    images: ["/images/catering.jpg"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main>

        {children}

        </main>
        <Footer/>
      </body>
    </html>
  );
}
