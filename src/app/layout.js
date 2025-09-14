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
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        />
        <link
        rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.17.0/devicon.min.css"
        integrity="sha512-6/05LVs+grXBAu5XzdiMFB64yCVF9FL70zWrTKcaTEKygrO7fC5LqfL/SKPpuRpimL2aE0D7Hw/NoED+7+7/VQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
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
