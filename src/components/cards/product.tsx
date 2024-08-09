import { Link } from "lucide-react";

type ProductProps = {
  product: {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
  };
};

function Product({ product }: ProductProps) {
  return (
    <a
      href={product.link}
      target="_blank"
      className="group card link relative no-underline"
    >
      <div className="absolute -inset-x-6 h-full w-full rounded-xl transition-all duration-300 "></div>
      <div className="card-body gap-8 px-0">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img src={product.imgSrc} className="h-8 w-8 rounded-full" />
        </div>
        <div className="space-y-3">
          <div className="font-semibold">{product.title}</div>
          <div className="max-w-72 text-sm text-base-content/90">
            {product.description}
          </div>
        </div>
        {product.link && (
          <div className="flex items-center gap-3 text-sm font-medium text-base-content/50 transition-all duration-300 group-hover:text-primary">
            <Link className="h-4 w-4" />
            {product.link}
          </div>
        )}
      </div>
    </a>
  );
}

export default Product;
