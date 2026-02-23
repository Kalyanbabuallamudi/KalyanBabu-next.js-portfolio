import { Inter } from "next/font/google";
import "../styles/globals.css"; // Updated path to use the correct globals.css
import Navbar from "./Navbar";
import Projects from "./components/Projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kalyan Babu",
  description: "Welcome to my Java Full Stack Software Engineering portfolio website",
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
      <head>
        <meta name="google-site-verification" content="-nrWrfcxUZ6v-eULcDGeeAOWFoNrYXJgKJ2bRxH889s" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}