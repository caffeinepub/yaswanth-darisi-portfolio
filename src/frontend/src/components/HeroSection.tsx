import { Button } from "@/components/ui/button";
import { ChevronDown, Download, FolderOpen, Mail } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg dot-pattern"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1440x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--hero-glow)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--glow-teal)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-medium mb-8 stagger-item"
          data-index="0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4 stagger-item"
          data-index="1"
        >
          <span className="text-gradient">Darisi</span>
          <br />
          <span className="text-foreground">Yaswanth</span>
        </h1>

        {/* Title */}
        <p
          className="font-body text-base sm:text-lg md:text-xl text-muted-foreground font-medium tracking-wide mb-4 stagger-item"
          data-index="2"
        >
          AI & Machine Learning Student
          <span className="mx-2 text-primary">|</span>
          Software Developer
        </p>

        {/* Intro */}
        <p
          className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10 stagger-item"
          data-index="3"
        >
          B.Tech Computer Science (AI & ML) student at{" "}
          <span className="text-foreground font-medium">VIT Chennai</span>
          {", "}specializing in machine learning, object detection, and software
          development.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 stagger-item"
          data-index="4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("projects")}
            data-ocid="hero.view_projects_button"
            className="rounded-full px-6 font-medium gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            style={{ boxShadow: "0 4px 24px var(--hero-glow)" }}
          >
            <FolderOpen className="h-4 w-4" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("contact")}
            data-ocid="hero.contact_button"
            className="rounded-full px-6 font-medium gap-2 border-primary/40 hover:bg-primary/10 hover:border-primary"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="ghost"
            data-ocid="hero.download_resume_button"
            className="rounded-full px-6 font-medium gap-2 hover:bg-muted"
            onClick={() => {
              /* resume download placeholder */
            }}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center stagger-item" data-index="5">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors duration-200 group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-mono tracking-wider uppercase">
              Scroll
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce group-hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
