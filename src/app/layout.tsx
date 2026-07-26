import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diwanshu | Software Engineer & Frontend Developer",
  description: "Product-minded Software Engineer specializing in building full-stack web applications and AI-integrated products with Next.js, TypeScript, and clean, modern UI/UX design.",
  keywords: [
    "Diwanshu",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UI UX Design",
    "AI Web Apps",
    "Google Gemini API"
  ],
  authors: [{ name: "Diwanshu" }],
  creator: "Diwanshu",
  metadataBase: new URL("https://diwanshu200419-commits.github.io/portfolio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diwanshu200419-commits.github.io/portfolio",
    title: "Diwanshu | Software Engineer & Frontend Developer",
    description: "Product-minded Software Engineer building high-performance, premium web applications. View case studies and projects.",
    siteName: "Diwanshu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diwanshu Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwanshu | Software Engineer & Frontend Developer",
    description: "Product-minded Software Engineer building full-stack web applications and AI-integrated products.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-primary-bg text-text-white font-sans min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
