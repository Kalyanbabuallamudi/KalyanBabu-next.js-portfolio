import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import ThreeBackground from "./components/ThreeBackground"; // Import your ThreeBackground component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalyan Babu",
  description: "Welcome to my portfolio website",
  icons: {
    icon: "/kalyan.ico", // Path to your favicon file
    apple: "/kalyan.png", // Optional: path to Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThreeBackground /> {/* Add the Three.js background */}
        
        <main className="min-h-screen relative z-10">{children}</main> {/* Main content area with relative positioning and z-index to ensure it's above the background */}
        {/* Remove Footer if not defined */}
      </body>
    </html>
  );
}
