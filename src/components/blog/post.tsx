import { formatDate, getPostBySlug } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import { highlight } from "sugar-high";
import CustomMDX from "../base/mdx";
import rehypeHighlight from "rehype-highlight";

export default async function PostView({
  params,
}: {
  params: { slug: string };
}) {
  const { meta, content } = (await getPageContent(params.slug)) as any;

  return (
    <section className="prose mx-auto mt-16 max-w-[650px] px-4 dark:prose-invert lg:px-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: meta.title,
            datePublished: meta.publishedAt,
            dateModified: meta.publishedAt,
            description: meta.summary,
            image: `https://denistarasenko.com/og?title=${meta.title}`,
            url: `https://denistarasenko.com/blog/${meta.slug}`,
            author: {
              "@type": "Person",
              name: "Denis Tarasenko",
            },
          }),
        }}
      />
      <h1>{meta.title}</h1>
      <p>{formatDate(meta.publishedAt)}</p>
      <hr />

      <CustomMDX source={content.split("---")[2]} />
      {/* <MDXRemote source={mdxSource} /> */}
    </section>
  );
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
