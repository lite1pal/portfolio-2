import PageHeader from "@/components/page-header";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative flex flex-col gap-10 py-16">
      <div className="absolute -right-96 -top-64 h-[600px] w-[600px] rounded-full bg-primary max-sm:hidden"></div>
      <div>
        <img src="/me.jpg" className="h-20 w-20 rounded-full object-cover" />
      </div>
      <PageHeader
        header="Software developer, writer and content creator"
        description="Hi 👋, I'm Denis! Working as a remote web developer, I build my own products whenever
          possible because it brings me so much joy."
      />
      <div className="flex items-center gap-7">
        <a target="_blank" href="https://x.com/lite_pal">
          <Twitter className="cursor-pointer hover:fill-base-content" />
        </a>
        <a target="_blank" href="https://github.com/lite1pal">
          <Github className="cursor-pointer hover:fill-base-content" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/denis-tarasenko-39bb44256/"
        >
          <Linkedin className="cursor-pointer hover:fill-base-content" />
        </a>
      </div>

      <Link href="/products" className="btn btn-secondary w-fit px-10">
        Check out my products
      </Link>
    </div>
  );
}

export default HeroSection;
