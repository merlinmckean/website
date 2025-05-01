// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your chosen font
import "./globals.css"; // Import the global styles

// Import your Navbar and Footer components
// Adjust paths if they are different
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure the font (adjust weights as needed)
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Merlin AI - AI Implementation for Boston SMBs",
  description: "Streamlining workflows for small and medium businesses in Boston using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font class name to the body */}
      <body className={inter.className}>
        <Navbar /> {/* Render the Navbar */}
        <main>
          {children} {/* This is where page.tsx content will be rendered */}
        </main>
        <Footer /> {/* Render the Footer */}
      </body>
    </html>
  );
}