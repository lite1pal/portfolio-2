import BlogView from "@/components/blog/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read about my journey in the web dev, design and more.",
  openGraph: {
    title: "Blog",
    description: "Read about my journey in the web dev, design and more.",
  },
};

export default function Blog() {
  return <BlogView />;
}
