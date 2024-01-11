import SectionHeader from "@/components/base/sectionHeader";
import SectionParagraph from "@/components/base/sectionParagraph";
import SectionTitle from "@/components/base/sectionTitle";
import ServiceCard from "@/components/base/serviceCard";
import Span from "@/components/base/span";

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
