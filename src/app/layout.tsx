import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/layout";

export const metadata: Metadata = {
  title: "Denis Tarasenko",
  description: "Denis Tarasenko's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Layout {...{ children }} />
    </html>
  );
}
