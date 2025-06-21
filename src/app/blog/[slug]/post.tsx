import Image from "next/image";
import { highlight } from "sugar-high";
import CustomMDX from "../../../components/mdx";
import { formatDate } from "@/lib/utils";
import { getPostBySlug } from "../actions";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import LeaveComment from "./components/leave-comment";

export default async function PostView({
  params,
}: {
  params: { slug: string };
}) {
  const { meta, content } = (await getPageContent(params.slug)) as any;

  return (
    <section className="mx-auto my-16 max-w-[700px] space-y-7">
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
      <Link
        href="/blog"
        className="link-hover link absolute left-10 mt-5 flex items-center gap-1.5 text-sm font-medium"
      >
        <ChevronLeft className="h-4 w-4 text-base-content/50" />
        Go back
      </Link>
      <h1 className="text-3xl font-bold sm:text-4xl">{meta.title}</h1>

      <div className="flex items-center gap-3">
        <div>
          <img src="/me.jpg" className="h-10 w-10 rounded-full object-cover" />
        </div>
        <div className="text-sm font-semibold">
          <div>Denis Tarasenko</div>
          <a className="text-primary/60 link no-underline hover:text-primary">
            @shipwithdenis
          </a>
        </div>
      </div>

      <div className="prose dark:prose-invert">
        <CustomMDX source={content.split("---")[2]} />
      </div>
      <LeaveComment />
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
