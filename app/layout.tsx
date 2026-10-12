import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KCP Homebuyers | We Buy Houses Fast for Cash — Nationwide",
  description:
    "KCP Homebuyers purchases homes in any condition nationwide. Get a fair cash offer within 24 hours. No repairs, no commissions, no fees. Close on your schedule.",
  keywords:
    "sell house fast, cash home buyers, we buy houses, sell as-is, no repairs, cash offer, sell house nationwide, KCP Homebuyers",
  openGraph: {
    title: "KCP Homebuyers — We Buy Houses Fast for Cash",
    description:
      "Get a fair cash offer in 24 hours. No repairs, no fees, no commissions. Close on your schedule.",
    type: "website",
    locale: "en_US",
    siteName: "KCP Homebuyers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
