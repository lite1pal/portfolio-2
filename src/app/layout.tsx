import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GOOGLE_ANALYTICS_ID } from "@/config/env";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://denistarasenko.com"),
  title: {
    default: "Denis Tarasenko",
    template: "%s | Denis Tarasenko",
  },
  description: "Web Developer and UX/UI designer",
  openGraph: {
    title: "Denis Tarasenko",
    description: "Web Developer and UX/UI designer",
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
      <Layout {...{ children }} />
    </html>
  );
}
