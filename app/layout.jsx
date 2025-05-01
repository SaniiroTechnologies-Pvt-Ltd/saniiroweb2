import ThemeWrapper from "@/components/ThemeWrapper";
import "./globals.css";
import Script from "next/script";

// Metadata | Default
export const metadata = {
  title: "Best Accounting and Inventory Management Software Company in India | Saniiro",
  description: "Saniiro offers top-tier accounting, inventory management, and CRM solutions tailored for businesses in India.",
  keywords: "Accounting Software, Inventory Management, CRM, Saniiro, Business Solutions, India",
  author: "Saniiro Technologies Pvt. Ltd.",
  openGraph: {
    title: "Best Accounting and Inventory Management Software Company in India | Saniiro",
    description: "Discover Saniiro, the best company for accounting and inventory management system software in India.",
    image: "/saniiro.png",
    url: "https://www.saniiro.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Accounting and Inventory Management Software Company in India | Saniiro",
    description: "Saniiro offers top-tier accounting, inventory management, and CRM solutions tailored for businesses in India.",
    image: "/saniiro.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This allows browsers to use the metadata for features like installing your app as a PWA */}
        <link rel="manifest" href="/manifest.webmanifest" />

        <Script src="/bolt.min.js" strategy="beforeInteractive" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}

