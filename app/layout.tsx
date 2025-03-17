import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
// import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import Header from "@/layouts/header/header";
import Footer from "@/layouts/footer/footer";
import './globals.css';

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
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="min-h-screen pt-2 bg-primaryBg text-gray-900 dark:bg-red-950 dark:text-zinc-200">
        <ThemeProvider>
          {/* <AuthProvider> */}
            <div
              className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-4/5 mx-auto bg-primaryBg text-gray-900 dark:bg-red-950 dark:text-zinc-200`}
            >
              <Header></Header>
              <main>{children}</main>
              <Footer></Footer>
              <ToastContainer />
            </div>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
