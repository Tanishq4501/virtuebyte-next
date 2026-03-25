"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HeroSection() {
 const [showVideo, setShowVideo] = useState(false);

 useEffect(() => {
 const timer = window.setTimeout(() => setShowVideo(true), 1200);
 return () => window.clearTimeout(timer);
 }, []);

 return (
 <section className="relative min-h-[85vh] flex items-center overflow-hidden">
 {/* YouTube Video Background */}
 <div className="absolute inset-0 z-0">
 {showVideo && (
 <iframe
 src="https://www.youtube.com/embed/VvqWZOE0fzc?autoplay=1&mute=1&loop=1&playlist=VvqWZOE0fzc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] md:w-[150%] md:h-[150%] pointer-events-none"
 allow="autoplay; encrypted-media"
 allowFullScreen
 loading="lazy"
 title="Background Video"
 />
 )}
 <div className="absolute inset-0 bg-[#403068]/90" />
 </div>

 <div className="relative z-10 w-full px-5 md:px-10 lg:px-[60px] py-[40px] md:py-20">
 <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-8">
 <div className="lg:ml-[35px]">
 <AnimatedSection animation="fadeIn">
 <p className="text-[14px] font-semibold tracking-[0.08em] text-primary md:text-[15px]">
 Yours Trusted IT, Salesforce & Cloud Solutions Provider
 </p>
 <h1 className="text-[30px] sm:text-[36px] md:text-[46px] lg:text-[50px] font-semibold text-white font-fira leading-[1.2em]">
 Transforming Businesses with Smart{" "}
 <span className="text-primary">IT</span>,{" "}
 <span className="text-primary">Salesforce</span> &{" "}
 <span className="text-primary">Cloud</span> Solutions
 </h1>
 </AnimatedSection>
 <AnimatedSection animation="fadeInUp" delay={0.2}>
 <p className="mt-4 text-[16px] italic text-primary/80 font-medium">
 &ldquo;Technology should accelerate growth &mdash; not slow it down.&rdquo;
 </p>
 <p className="mt-4 text-[16px] md:text-[18px] leading-[1.5em] md:leading-[1.3em] lg:leading-[24px] text-[#E0E0E0] max-w-2xl tracking-[0.2px] md:tracking-[0.4px]">
VirtueByte helps businesses around the world leverage technology to transform their operations and unlock the power of data-driven decision-making through Salesforce consulting, AI, cloud transformation, and software development. As a trusted provider of IT Consulting Services businesses rely on, we bring together strategy, execution, and innovation to solve real business challenges.
 </p>
 </AnimatedSection>
 <AnimatedSection animation="fadeInUp" delay={0.4}>
 <div className="mt-8">
 <Link
 href="/contact/"
 className="inline-flex items-center justify-center font-lato text-[15px] md:text-[16px] font-semibold uppercase leading-[1.3em] text-white bg-primary border border-primary rounded-[15px] px-[30px] py-[15px] shadow-md transition-all duration-300 hover:shadow-[0px_5px_5px_0px_rgba(251,0,252,0.56)]"
 >
 Request a Free Strategy Call
 <svg
 className="w-5 h-5 ml-2"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M17 8l4 4m0 0l-4 4m4-4H3"
 />
 </svg>
 </Link>
 </div>
 </AnimatedSection>
 </div>

 <AnimatedSection animation="fadeIn" className="flex justify-center items-center">
 <Image
 src="/images/home/hero-banner.webp"
 alt="Modern office interior representing business technology transformation"
 width={800}
 height={800}
 className="w-full max-w-[800px] h-auto"
 priority
 fetchPriority="high"
 sizes="(min-width: 1024px) 45vw, 100vw"
 />
 </AnimatedSection>
 </div>
 </div>
 </section>
 );
}

