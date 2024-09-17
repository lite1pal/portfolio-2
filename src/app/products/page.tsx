import Product from "@/components/cards/product";
import PageHeader from "@/components/page-header";
import ProductsList from "./products-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Denis Tarasenko's products",
    template: "%s | Denis Tarasenko's products",
  },
  description: "Products I made and currently working on.",
  openGraph: {
    title: "Denis Tarasenko",
    description: "Products I made and currently working on.",
    url: "https://denistarasenko.com/products",
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
    title: "Denis Tarasenko's products",
    card: "summary_large_image",
  },
  verification: {
    google: "LHTT-WRptRShm2aPWwLVMp0C_4X2H7QMLYWuLfnvXGk",
  },
};

function Products() {
  return (
    <div className="my-10 space-y-10">
      <ProductsList />
    </div>
  );
}

export default Products;
