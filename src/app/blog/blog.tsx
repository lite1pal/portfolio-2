import Link from "next/link";
import { getAllPostsMeta } from "./actions";
import BlogPost from "@/components/cards/blog-post";
import PageHeader from "@/components/page-header";
import PostsList from "./posts-list";
import { Suspense } from "react";

export type PostMeta = {
  title: string;
  slug: string;
  publishedAt: Date;
  summary: string;
};

export default function BlogView() {
  return (
    <div className="my-16 max-w-3xl space-y-10">
      <PageHeader
        header="Writing on how to become a better developer"
        description="My thoughts, hands-on experience and struggles on development of
          high-quality products."
      />
      <Suspense>
        <PostsList />
      </Suspense>
    </div>
  );
}
