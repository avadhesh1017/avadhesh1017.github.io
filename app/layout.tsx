import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { LangProvider } from "@/components/common/LangProvider";
import ToastProvider from "@/components/common/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Avadhesh Ghevariya — Android Application Developer",
    template: "%s | Avadhesh Ghevariya",
  },
  description:
    "Portfolio of Avadhesh Ghevariya — Android Developer specializing in Java, Firebase, Material Design 3, MVVM architecture, and mobile application engineering.",
  keywords: [
    "Avadhesh Ghevariya",
    "Android Developer",
    "Java Developer",
    "Firebase",
    "Material Design",
    "Mobile App Developer",
    "Android Studio",
    "MVVM",
    "Application Developer",
  ],
  authors: [{ name: "Avadhesh Ghevariya" }],
  creator: "Avadhesh Ghevariya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Avadhesh Ghevariya — Android Application Developer",
    description:
      "Building native Android applications with clean architecture, Firebase integration, and Material Design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <LangProvider>
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </LangProvider>
      </body>
    </html>
  );
}
