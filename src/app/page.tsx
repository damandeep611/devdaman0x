import CaseStudy from "@/components/ui/CaseStudy";
import ExploreSection from "@/components/ui/ExploreSection";
import GallerySearch from "@/components/ui/GallerySearch";
import HeroSection from "@/components/ui/HeroSection";
import MyContentSection from "@/components/ui/MyContentSection";
import SkillsSection from "@/components/ui/SkillsSection";
import { allPosts } from "content-collections";

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)
    .map((post) => ({
      title: post.title,
      description: post.description,
      date: new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      tag: post.tags?.[0] || "Tech",
      image: post.image || "/logos/laptop3dicon.png",
      url: post.url,
    }));

  return (
    <div className="mt-4 sm:mt-12 flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <HeroSection />
      <GallerySearch />
      <CaseStudy />
      <SkillsSection />
      <MyContentSection posts={latestPosts} />
      <ExploreSection />
    </div>
  );
}
