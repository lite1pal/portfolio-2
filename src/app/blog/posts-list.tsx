import BlogPost from "@/components/cards/blog-post";
import { getAllPostsMeta } from "./actions";

async function PostsList() {
  const posts: any = await getAllPostsMeta();
  return (
    <div className="flex flex-col gap-7">
      {posts.map((post: any, i: number) => (
        <BlogPost key={i} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
