import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GOOGLE_ANALYTICS_ID } from "@/config/env";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/navbar";
import { Recursive as FontSans } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://denistarasenko.com"),
  title: {
    default: "Denis Tarasenko",
    template: "%s | Denis Tarasenko",
  },
  description:
    "Dev, product maker, indie hacker. Coding my way to independence. Turning ideas into reality one line at a time.",
  openGraph: {
    title: "Denis Tarasenko",
    description:
      "Dev, product maker, indie hacker. Coding my way to independence. Turning ideas into reality one line at a time.",
    url: "https://denistarasenko.com",
    siteName: "Denis Tarasenko",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Denis Tarasenko",
    card: "summary_large_image",
  },
  verification: {
    google: "LHTT-WRptRShm2aPWwLVMp0C_4X2H7QMLYWuLfnvXGk",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="emerald" lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <head>
          <Script
            id="google-analytics-script-1"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          ></Script>
          <Script
            id="google-analytics-script-2"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${GOOGLE_ANALYTICS_ID}');`,
            }}
          ></Script>
        </head>
      </head>
      <body
        className={`${fontSans.className} max-w-screen overflow-x-hidden bg-base-100`}
      >
        <Toaster />
        <main className="container mx-auto flex h-full flex-grow flex-col px-3 md:px-10 xl:px-36">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
