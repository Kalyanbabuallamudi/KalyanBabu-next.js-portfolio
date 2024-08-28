import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar'; // Import your Navbar component
import ThreeBackground from "./components/ThreeBackground";

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
        <Navbar /> {/* Render the Navbar here */}
        <main className="min-h-screen">{children}</main> {/* Main content area */}
        {/* Remove Footer if not defined */}
      </body>
    </html>
  );
}
