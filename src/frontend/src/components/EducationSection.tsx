import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6"
      data-ocid="education.section"
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 geo-line">
            Education
          </h2>
        </div>

        <div className="mt-12 max-w-2xl">
          <div
            className="stagger-item group relative rounded-2xl border bg-card p-8 card-hover overflow-hidden"
            data-index={0}
            data-ocid="education.card.1"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 100% 80% at 50% 0%, oklch(0.62 0.165 58 / 0.08), transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Institution */}
                <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-1">
                  Vellore Institute of Technology, Chennai
                </h3>

                {/* Degree */}
                <p className="text-primary font-semibold text-sm mb-3">
                  B.Tech Computer Science (AI & Machine Learning)
                </p>

                {/* Details row */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Graduation badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold border border-primary/30 bg-primary/10 text-primary">
                    Expected 2027
                  </span>

                  {/* CGPA badge */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border"
                    style={{
                      background: "oklch(0.68 0.18 155 / 0.15)",
                      borderColor: "oklch(0.68 0.18 155 / 0.35)",
                      color: "oklch(0.40 0.14 155)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "oklch(0.68 0.18 155)" }}
                      aria-hidden="true"
                    />
                    CGPA: 8.5 / 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
