import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "TC's Portfolio",
  description: "Portfolio in Nextjs",
  author: "Terence Chen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
        rel="stylesheet"
        href="/font-awesome/all.min.css"
        />
        <link
        rel="stylesheet"
        href="/font-awesome/brands.min.css"
        />
        <link
        rel="stylesheet"
        href="/font-awesome/regular.min.css"
        />
        <link
        rel="stylesheet"
        href="/font-awesome/solid.min.css"
        />
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          async
          defer
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
