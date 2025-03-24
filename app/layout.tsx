import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
// import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import Header from "@/layouts/header/header";
import './globals.css';
import Breadcrumb from "@/components/breadcumb/bread-cumb";
import ClientWrapper from "./ClientWrapper";
import metadata from './metadata';
import FloatThemeComponent from "@/components/float-theme/float-theme";

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
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-primaryBg text-gray-900 dark:bg-primaryDarkBg dark:text-zinc-200 overflow-x-hidden`}>
      <main>
        <ThemeProvider>
          {/* <AuthProvider> */}
              <div className="w-full">
                <Header />
                <div className="h-20 w-full"></div>
                <Breadcrumb />
                <ClientWrapper>
                  {children}
                </ClientWrapper>
                <div className="h-32 w-full"></div>
                <FloatThemeComponent />
                <ToastContainer />

              </div>
          {/* </AuthProvider> */}
        </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
