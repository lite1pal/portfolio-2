import BlogView from "@/app/blog/blog";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read about my journey in the web dev, design and more.",
  openGraph: {
    title: "Blog",
    description: "Read about my journey in the web dev, design and more.",
  },
  robots: { index: false, follow: false },
};

export default function Blog() {
  redirect("/");
  return (
    <Suspense>
      <BlogView />
    </Suspense>
  );
}
