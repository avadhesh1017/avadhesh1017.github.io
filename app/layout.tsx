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
    default: "Avadhesh Ghevariya — Software Engineer",
    template: "%s | Avadhesh Ghevariya",
  },
  description:
    "Portfolio of Avadhesh Ghevariya — Software Engineer with experience in mobile development, autonomous driving systems, and clean software architecture.",
  keywords: [
    "Avadhesh Ghevariya",
    "Software Engineer",
    "Java Developer",
    "Python",
    "Mobile Development",
    "Autonomous Driving",
    "Sensor Fusion",
    "Software Developer",
    "Full Stack",
  ],
  authors: [{ name: "Avadhesh Ghevariya" }],
  creator: "Avadhesh Ghevariya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Avadhesh Ghevariya — Software Engineer",
    description:
      "Building production-quality software — from mobile apps to sensor-driven systems — with clean architecture and strong engineering fundamentals.",
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
