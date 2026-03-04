import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center section-hidden">
        {/* Decorative icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6 mx-auto">
          <FileText className="h-8 w-8 text-primary" />
        </div>

        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
          Resume
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          My Qualifications
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          Download my resume to learn more about my experience, education, and
          qualifications. I'm always open to new opportunities and challenges.
        </p>

        <Button
          size="lg"
          data-ocid="resume.primary_button"
          className="rounded-full px-8 font-semibold gap-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          style={{ boxShadow: "0 4px 24px var(--hero-glow)" }}
          onClick={() => {
            /* Replace with real resume URL when available */
          }}
        >
          <Download className="h-5 w-5" />
          Download Resume
        </Button>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground/50 text-xs font-mono tracking-widest uppercase">
            Always learning
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>
    </section>
  );
}
