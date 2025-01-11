import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.16.0/devicon.min.css"
          integrity="sha512-BlFCHJWngPEHme4TwlEob6dPLfoNaQBTTISPwr4344nxR353w2vgGZ7GiSadbbeR20cJeeM0u1I2lAZuIZ1aOQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          async
          defer
        ></script>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
