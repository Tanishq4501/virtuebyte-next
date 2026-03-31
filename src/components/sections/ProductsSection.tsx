"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const outcomes = [
  "Automated end-to-end operations for an event management company",
  "Built a scalable internship platform connecting students and employers",
  "Developed data-driven systems for operational efficiency in manufacturing",
];

export default function ProductsSection() {
  return (
    <section className="relative py-[60px] bg-[#E5A2FF0A] overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">
        
        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-white text-center font-fira mb-10">
We focus on delivering measurable outcomes          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
              className="h-full"
            >
              <div className="relative h-full bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[18px] p-6 hover:shadow-[0px_5px_25px_rgba(0,0,0,0.35)] transition-all duration-300">

                {/* Small Accent */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>

                {/* Text */}
                <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed">
                  {item}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}