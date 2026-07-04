import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agents of Change | National Agentic AI Bootcamp & Buildathon",
  description:
    "A 2-day Agentic AI Bootcamp and Buildathon organized by OIST ACM-W — learn to build multi-agent AI systems with LLMs, RAG, and tool calling, then compete to build the Campus AI Assistant. 10–11 July 2026.",
  metadataBase: new URL("https://agentsofchange.oistacmw.org"),
  openGraph: {
    title: "Agents of Change — National Agentic AI Bootcamp & Buildathon",
    description:
      "2-day Agentic AI workshop + team buildathon. Organized by OIST ACM-W. 10–11 July 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
