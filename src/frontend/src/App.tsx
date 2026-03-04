import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { SkillsSection } from "./components/SkillsSection";
import { useRevealOnScroll } from "./hooks/useIntersection";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  // Run scroll reveal after every render (picks up newly mounted elements)
  useRevealOnScroll();

  // Set theme meta tag on mount
  useEffect(() => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = theme === "dark" ? "#1a1b2e" : "#f7f4ee";
      document.head.appendChild(meta);
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
