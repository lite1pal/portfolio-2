import SectionHeader from "@/components/base/sectionHeader";
import SectionParagraph from "@/components/base/sectionParagraph";
import SectionTitle from "@/components/base/sectionTitle";
import ServiceCard from "@/components/base/serviceCard";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionTitle>Services</SectionTitle>
        <SectionHeader>Your idea, my implementation</SectionHeader>
        <SectionParagraph>
          I know you have many great ideas lying dusting on the shelf in the
          backyard shed.{" "}
          <span className="text-slate-100">
            Bring them to me, and let's discuss how to make them shine
          </span>
        </SectionParagraph>
        <div className="group/list mt-3 flex w-full flex-col flex-wrap gap-0 lg:flex-row">
          <ServiceCard type="Blog" price="900 $" />
          <ServiceCard type="E-commerce" price="1200 $" />
          <ServiceCard
            type="Design for some pages"
            price="Depends on complexity"
          />
          <ServiceCard type="Custom" price="Depends on your vision" />
        </div>
        <div className="flex w-full flex-col gap-3 lg:flex-row"></div>
      </div>
    </div>
  );
}
