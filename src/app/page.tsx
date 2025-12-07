import ExploreSection from "@/components/ui/ExploreSection";
import HeroSection from "@/components/ui/HeroSection";
import MyContentSection from "@/components/ui/MyContentSection";
import SkillsSection from "@/components/ui/SkillsSection";

export default function Home() {
  return (
    <div className="mt-12 ">
      <HeroSection />
      <ExploreSection />
      <SkillsSection />
      <MyContentSection />
    </div>
  );
}
