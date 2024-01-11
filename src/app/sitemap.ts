import { getAllPostsMeta } from "@/utils/blog";

export default async function sitemap() {
  const posts: any = (await getAllPostsMeta()).map((post: any) => ({
    url: `https://denistarasenko.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `https://denistarasenko.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
