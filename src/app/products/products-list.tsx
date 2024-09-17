import Product from "@/components/cards/product";

const products = [
  {
    imgSrc: "/lasting-habits.png",
    title: "Lasting Habits",
    description: "Invest in your habits and you'll see wonders.",
    link: "https://lastinghabits.app?ref=mywebsite",
  },
  {
    imgSrc: "/nextjs-cap.avif",
    title: "Capnext",
    description: "Build cross-platform apps using Next and Tailwind.",
    // link: "https://lasting-habits.vercel.app",
  },
  {
    imgSrc: "/blogcms.avif",
    title: "NextBlogCMS",
    description: "Drag and drop ready-to-use blog with CMS into your website.",
    // link: "https://lasting-habits.vercel.app",
  },
];

function ProductsList() {
  return (
    <div className="space-y-10">
      <div className="w-fit">
        <Product product={products[0]} />
      </div>

      <div className="flex w-full items-center gap-3 text-base-content/70 sm:gap-10">
        <hr className="flex-1 border-2" />
        In development <hr className="flex-1 border-2" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {products.slice(1).map((product) => (
          <Product key={product.imgSrc} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
