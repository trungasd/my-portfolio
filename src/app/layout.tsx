import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import "./globals.css";
import { ActiveSectionProvider } from "@/context/active-section-context"; // Import context
import Script from "next/script";

export const metadata = {
  title: "Trung's portfolio",
  description: "A personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P06595YWET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P06595YWET');
          `}
        </Script>
      </head>
      <body>
        <ActiveSectionProvider>
          {" "}
          {/* Bọc toàn bộ ứng dụng */}
          <Header />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
