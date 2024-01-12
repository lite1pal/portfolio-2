import { formatDate, getAllPostsMeta } from "@/utils/blog";
import SectionHeader from "../base/sectionHeader";
import Link from "next/link";
import XLine from "../base/xLine";
import SectionParagraph from "../base/sectionParagraph";
import Span from "../base/span";

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
      <div className="flex flex-col gap-5">
        <div className="text-5xl font-medium leading-tight text-slate-900 dark:text-slate-50">
          My Blog
        </div>
        <p className=" text-slate-400">
          Read about my journey in the web dev, where I share{" "}
          <Span>helpful tips and insights!</Span>
        </p>
      </div>
      <XLine />
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
