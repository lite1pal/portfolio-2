import BlogView from "@/app/blog/blog";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read about my journey in the web dev, design and more.",
  openGraph: {
    title: "Blog",
    description: "Read about my journey in the web dev, design and more.",
  },
};

export default function Blog() {
  return (
    <Suspense>
      <BlogView />
    </Suspense>
  );
}
