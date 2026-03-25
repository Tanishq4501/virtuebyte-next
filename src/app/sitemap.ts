import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import fs from "fs";
import path from "path";

export const revalidate = 60;

const BASE_URL = "https://virtuebytech.com";
const DEFAULT_LAST_MODIFIED = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
 const posts = getAllPosts();
 
 const blogSitemaps = posts.map((post) => ({
 url: `${BASE_URL}/blog/${post.slug}/`,
 lastModified: post.date? new Date(post.date).toISOString() : DEFAULT_LAST_MODIFIED,
 priority: 0.64,
 }));

 const staticRoutes = [
 "/",
 "/about",
 "/services",
 "/products",
 "/case-studies",
 "/blog",
 "/contact",
 "/services/salesforce-implementation",
 "/services/ai-ml-consulting",
 "/services/data-science-analytics",
 "/services/offshore-development-centers",
 "/services/cloud-services",
 "/services/devops-consulting-services",
 "/products/virtuelite",
 "/products/virtunest",
 ].map((route) => ({
 url: `${BASE_URL}${route}/`,
 lastModified: DEFAULT_LAST_MODIFIED,
 priority: 0.8,
 }));

 // Read custom sitemap configuration from Keystatic
 let customSitemaps: MetadataRoute.Sitemap = [];
 try {
 const sitemapPath = path.join(process.cwd(), "content", "sitemap-config.json");
 if (fs.existsSync(sitemapPath)) {
 const sitemapData = JSON.parse(fs.readFileSync(sitemapPath, "utf-8"));
 if (sitemapData.urls && Array.isArray(sitemapData.urls)) {
 customSitemaps = sitemapData.urls.map((entry: any) => {
 let customPath = entry.path || "";
 if (customPath.startsWith("/")) customPath = customPath.substring(1);
 return {
 url: `${BASE_URL}/${customPath}${customPath? "/" : ""}`,
 lastModified: DEFAULT_LAST_MODIFIED,
 priority: entry.priority !== undefined? entry.priority : 0.8,
 };
 });
 }
 }
 } catch(e) {
 console.error("Error reading sitemap custom URLs", e);
 }

 if (staticRoutes.length > 0) {
 staticRoutes[0].priority = 1.0;
 }

 return [...staticRoutes,...blogSitemaps,...customSitemaps];
}

