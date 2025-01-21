"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import useMainStore from "./store/mainStore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getAllData } = useMainStore();

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="bg-cover bg-center h-40"
          style={{ backgroundImage: "url('/header_background.webp')" }}
        >

        </div>
        {children}
      </body>
    </html>
  );
}
