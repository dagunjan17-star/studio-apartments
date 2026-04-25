import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 title: "Studio Apartments in Gurgaon | Furnished Studio Flats & 1RK for Sale",

description:
"Buy premium studio apartments in Gurgaon with assured rental income, high ROI & modern amenities. Explore verified furnished & affordable studio flats in Sohna Road, Golf Course Extension, DLF Phase & 50+ locations in Gurugram.",

keywords: [
  "studio apartments in Gurgaon", "studio apartment Gurgaon", "studio flat in Gurgaon", "buy studio apartment Gurgaon", "furnished studio apartment Gurgaon", "1RK apartment Gurgaon", "affordable studio apartment Gurgaon", "studio apartment for sale Gurgaon", "studio flat Gurugram", "investment studio apartment Gurgaon", "ready to move studio apartment Gurgaon", "compact apartment Gurgaon", "small apartment Gurgaon", "studio apartment near metro Gurgaon", "studio apartment Sohna Road", "studio apartment Golf Course Extension Gurgaon", "studio apartment DLF Phase Gurgaon", "assured rental income Gurgaon", "high ROI property Gurgaon", "studio apartment for working professionals Gurgaon"
],

  alternates: {
    canonical: "www.studioapartmentsingurgaon.com/",
  },
  verification: {
    google: "PY6gpAzziTPKP-xNoUpnUR4VOh1TmuYLnHl7hjnWa2E",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MSRSXCZB');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SJDE8VVNPT"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJDE8VVNPT');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSRSXCZB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}