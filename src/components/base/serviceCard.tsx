import { ReactNode } from "react";
import SectionHeader from "./sectionHeader";
import SectionParagraph from "./sectionParagraph";
import SectionTitle from "./sectionTitle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "./button";

export default function ServiceCard({
  type,
  price,
}: {
  type: string;
  price: string;
}) {
  return (
    <div className="group w-full transition duration-300 hover:!opacity-100 group-hover/list:opacity-20 lg:w-1/2">
      <div className="m-3 flex flex-col items-start gap-3 rounded-lg p-4 ">
        <div className="text-xl">{type}</div>
        <div className="text-3xl font-medium text-slate-50">{price}</div>
        <p className="text-start text-sm text-slate-400">
          Whether you want a web app, paired with a marketing website, or a
          cross-platform app, I got you covered.
        </p>
        <div className="flex flex-col gap-2.5 text-start">
          <ServiceItem>Unique, modern design</ServiceItem>
          <ServiceItem>Responsive layout for all device screens</ServiceItem>
          <ServiceItem>Optimized performance</ServiceItem>
          <ServiceItem>Animations & interactivity</ServiceItem>
          <ServiceItem>SEO-friendly</ServiceItem>
          <ServiceItem included={false}>
            Adaptible, scalable back-end solutions
          </ServiceItem>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Button>Get the package</Button>
        </div>
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
      <div className="text-slate-400">{children}</div>
    </div>
  );
}
