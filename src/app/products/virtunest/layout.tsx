import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
 title: "VirtuNest - Home Inspection Platform",
 description:
 "VirtuNest is VirtueByte's home inspection platform for managing inspections, reports, templates, and property operations.",
 alternates: {
 canonical: getCanonicalUrl("/products/virtunest/"),
 },
 openGraph: {
 description:
 "VirtuNest is VirtueByte's home inspection platform for managing inspections, reports, templates, and property operations.",
 },
 twitter: {
 description:
 "VirtuNest is VirtueByte's home inspection platform for managing inspections, reports, templates, and property operations.",
 },
};

export default function VirtuNestLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return children;
}

