import { ReactNode } from "react";
import SectionHeader from "./sectionHeader";
import SectionParagraph from "./sectionParagraph";
import SectionTitle from "./sectionTitle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "./button";
import Link from "next/link";

type Props = {
  description: string;
  type: string;
  includings: string[];
  price: string;
};

export default function ServiceCard({
  description,
  type,
  includings,
  price,
}: Props) {
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
