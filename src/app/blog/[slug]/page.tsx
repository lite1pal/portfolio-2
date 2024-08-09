import PostView from "@/app/blog/[slug]/post";
import { Metadata } from "next/types";
import { getPostBySlug } from "../actions";
import { Suspense } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import LeaveComment from "./components/leave-comment";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let { meta } = (await getPostBySlug(params.slug)) as any;
  if (!meta) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description } = meta;

  let ogImage = `https://denistarasenko.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://denistarasenko.com/blog/${meta.slug}`,
      images: [
        {
          url: `https://denistarasenko.com/og?title=${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  return (
    <Suspense>
      <PostView {...{ params }} />
    </Suspense>
  );
}
