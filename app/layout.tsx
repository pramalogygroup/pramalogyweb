import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pramalogy - IT Services & SaaS Solutions",
    template: "%s | Pramalogy",
  },
  description:
    "Leading IT service and SaaS product company providing custom development solutions and innovative subscription-based products.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",

  keywords:
    "IT services, SaaS products, custom development, software solutions, Pramalogy",
  authors: [{ name: "Pramalogy Group" }],
  creator: "Pramalogy",
  metadataBase: new URL("https://pramalogy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pramalogy.com",
    siteName: "Pramalogy Group",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@pramalogy",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
