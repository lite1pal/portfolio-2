import { formatDate, getAllPostsMeta } from "@/utils/blog";
import SectionHeader from "../base/sectionHeader";
import Link from "next/link";

export type PostMeta = {
  title: string;
  slug: string;
  publishedAt: Date;
  summary: string;
};

export default async function BlogView() {
  const posts: any = await getAllPostsMeta();
  return (
    <div className="mx-auto mt-6 flex max-w-[650px] flex-col gap-10 px-10 sm:px-0">
      <div className="w-5/6 text-4xl font-medium leading-tight text-slate-900 lg:w-4/6 dark:text-slate-50">
        Blog
      </div>
      {posts
        .sort((a: any, b: any) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post: any) => (
          <Link key={post.slug} className="" href={`/blog/${post.slug}`}>
            <div className="flex w-full flex-col gap-0.5">
              <p className="text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.title}
              </p>
              <time className="text-slate-500 dark:text-slate-400">
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </Link>
        ))}
    </div>
  );
}
