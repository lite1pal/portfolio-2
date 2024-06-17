import Link from "next/link";
import XLine from "../../components/xLine";
import Span from "../../components/span";
import { formatDate } from "@/lib/utils";
import { getAllPostsMeta } from "@/lib/posts";

export type PostMeta = {
  title: string;
  slug: string;
  publishedAt: Date;
  summary: string;
};

export default async function BlogView() {
  const posts: any = await getAllPostsMeta();
  return (
    <div className="my-20 space-y-10">
      <div className="flex flex-col gap-3">
        <div className="text-4xl font-medium leading-tight text-slate-900 dark:text-slate-50">
          Latest
        </div>
        <p className="text-base-content/60">
          Read about my journey of becoming a solopreneur, where I share{" "}
          <span className="text-base-content">helpful tips and insights!</span>
        </p>
      </div>
      <div className="flex flex-col">
        <hr />
        {posts
          .sort((a: any, b: any) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post: any) => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
}

function Post({ post }: any) {
  return (
    <div className="grid grid-cols-1 border-b py-16 sm:py-20 lg:grid-cols-4">
      <time className="col-span-1 mb-3 text-base-content/80 lg:mb-0">
        {new Date(post.publishedAt).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
      <div className="col-span-3 flex flex-col items-start gap-1">
        <Link
          href={`/blog/${post.slug}`}
          className="link-hover link text-2xl font-medium"
        >
          {post.title}
        </Link>
        <div className="flex items-center gap-3 text-sm uppercase text-indigo-600">
          <div>next-js</div>
          <div>react</div>
        </div>
        <p className="mt-2 text-base-content/70">{post.summary}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="link-hover link link-secondary mt-5"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
