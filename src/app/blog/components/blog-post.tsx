import Link from "next/link";

function BlogPost({ post }: any) {
  return (
    <div key={post.id} className="w-full">
      <Link
        href={`/blog/${post.slug}`}
        className="col-span-3 flex flex-col items-start gap-5 rounded-xl p-5 text-sm transition-all duration-300 hover:bg-base-200/50"
      >
        <div className="text-base font-semibold">{post.title}</div>
        <p className="text-base-content/70">{post.summary}</p>

        <button className="link-hover link link-secondary">Read more →</button>
      </Link>
    </div>
  );
}

export default BlogPost;
