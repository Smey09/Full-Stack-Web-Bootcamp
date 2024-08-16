import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NevBar from "./Pages/NevBar";
import Footer from "./Pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SabaiCode",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NevBar />
        <div className="p-10 min-h-[calc(100vh-66px-52px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
