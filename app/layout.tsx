import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/shared/Header";
import Footer from "@/component/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House Hunt",
  description: "Finding housing shouldn't be a drag, Say adios to agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
