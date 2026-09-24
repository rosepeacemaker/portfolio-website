import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/layout/Navbar";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rose | Full Stack Developer",
  description:
    "Portfolio of Rose — Full Stack Developer building modern web applications and AI-powered experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(montserrat.variable, cormorant.variable, "font-sans", geist.variable)}>
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}