import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piyush-sagar.dev"),
  title: "Piyush Sagar — Portfolio",
  description: "B.Tech IT @ VIT Vellore | Competitive Programming, Python, Japanese, Design",
  openGraph: {
    title: "Piyush Sagar — Portfolio",
    description: "B.Tech IT @ VIT Vellore | Competitive Programming, Python, Japanese, Design",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Piyush Sagar — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Sagar — Portfolio",
    description: "B.Tech IT @ VIT Vellore | Competitive Programming, Python, Japanese, Design",
    images: ["/og.svg"],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
