import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import "./globals.css";
import { ActiveSectionProvider } from "@/context/active-section-context"; // Import context

export const metadata = {
  title: "Trung's portfolio",
  description: "A personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
