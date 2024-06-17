import SectionHeader from "@/components/sectionHeader";
import SectionParagraph from "@/components/sectionParagraph";
import SectionTitle from "@/components/sectionTitle";
import Span from "@/components/span";
import { ReactNode } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
import { Button } from "../button";

export default function Services() {
  return (
    <div id="services" className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionTitle>Services</SectionTitle>
        <SectionHeader>Your idea, my implementation</SectionHeader>
        <SectionParagraph>
          I know you have many great ideas lying dusting on the shelf in the
          backyard shed.{" "}
          <Span>
            Bring them to me, and let{"'"}s discuss how to make them shine
          </Span>
        </SectionParagraph>
      </div>
      <div className="group/list mt-3 flex w-full flex-col flex-wrap gap-0 lg:flex-row">
        <ServiceCard
          description="Elevate your blog with a modern design, optimized for all devices. Engaging animations, accessibility, and top-notch performance included."
          includings={[
            "Unique, modern design aligned with your blog's style",
            "Optimized responsiveness for seamless user experience on all devices",
            "Engaging animations and enhanced accessibility features",
            "Highly performant architecture to ensure fast loading times",
            "SEO configuration and optimization for increased visibility",
          ]}
          type="Blog"
          price="$800"
        />

        <ServiceCard
          description="Transform your online store with a customized design, seamless shopping experience, and secure payment integration."
          includings={[
            "Customized and scalable design for an exceptional online store",
            "Responsive design across all devices for a seamless shopping experience",
            "Engaging animations and accessibility for enhanced user interaction",
            "Highly performant and optimized platform for efficient operations",
            "SEO configuration and optimization to boost search engine rankings",
            "Scalable back-end solutions, including a robust database and API integration",
            "Connected Payment gateway integration, such as Stripe, for secure transactions",
          ]}
          type="E-commerce"
          price="$1200"
        />
        <ServiceCard
          description="Get custom-designed pages with attention-grabbing visuals. Collaborative design process with iterative revisions for your satisfaction."
          includings={[
            "Customized design for specific pages aligned with your brand",
            "Responsive layout for optimal viewing on various devices",
            "Attention-grabbing visuals and graphics",
            "Collaborative design process",
            "Iterative revisions to ensure satisfaction",
          ]}
          type="Design for some pages"
          price="Depends on complexity"
        />

        <ServiceCard
          description="Your vision, your solution. Fully customized design and functionality, comprehensive collaboration, and ongoing support for your unique requirements."
          includings={[
            "Fully customized solution based on your unique vision and requirements",
            "Tailored design and functionality to meet your specific needs",
            "Comprehensive collaboration to bring your ideas to life",
            "Iterative development with regular feedback",
            "Ongoing support and updates to adapt to changing requirements",
          ]}
          type="Custom"
          price="Depends on your vision"
        />
      </div>
      <div className="flex w-full flex-col gap-3 lg:flex-row"></div>
    </div>
  );
}

function ServiceCard({
  description,
  type,
  includings,
  price,
}: {
  description: string;
  type: string;
  includings: string[];
  price: string;
}) {
  return (
    <div className="group w-full transition duration-300 hover:!opacity-100 lg:w-1/2 lg:group-hover/list:opacity-20">
      <div className="m-3 flex h-full flex-col items-start gap-3 rounded-lg p-4 transition duration-300">
        <div className="text-xl">{type}</div>
        <div className="text-3xl font-medium text-slate-900 dark:text-slate-50">
          {price}
        </div>
        <p className="text-start text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
        <div className="mt-3 flex flex-col gap-2.5 text-start">
          {includings.map((item, i) => {
            return <ServiceItem key={i}>{item}</ServiceItem>;
          })}
          {/* <ServiceItem>Unique, modern design</ServiceItem>
          <ServiceItem>Responsive layout for all device screens</ServiceItem>
          <ServiceItem>Optimized performance</ServiceItem>
          <ServiceItem>Animations & interactivity</ServiceItem>
          <ServiceItem>SEO-friendly</ServiceItem>
          <ServiceItem included={false}>
            Adaptible, scalable back-end solutions
          </ServiceItem> */}
        </div>
        <Link href="#collaboration" className="mt-5 flex w-full justify-center">
          <Button>Get the package</Button>
        </Link>
      </div>
    </div>
  );
}

function ServiceItem({
  children,
  included = true,
}: {
  children: ReactNode;
  included?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {included ? (
        <CheckCircleIcon fontSize="small" />
      ) : (
        <CheckCircleOutlineIcon
          fontSize="small"
          sx={{ color: "rgb(148 163 184)" }}
        />
      )}
      <div className="text-slate-600 dark:text-slate-400">{children}</div>
    </div>
  );
}
