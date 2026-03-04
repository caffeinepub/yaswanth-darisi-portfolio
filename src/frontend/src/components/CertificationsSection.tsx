import { Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "June 2025",
  },
  {
    title: "Oracle Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "July 2025",
  },
  {
    title: "Be10x AI Tools Workshop",
    issuer: "Practical AI Tools & Prompt Engineering",
    date: "2025",
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--section-alt)" }}
      data-ocid="certifications.section"
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 geo-line">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className="stagger-item group relative rounded-2xl border bg-card p-6 card-hover overflow-hidden"
              data-index={i}
              data-ocid={`certifications.card.${i + 1}`}
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 80% at 50% 0%, oklch(0.62 0.165 58 / 0.08), transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Award className="h-5 w-5 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-foreground leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {cert.issuer}
                </p>

                {/* Date badge */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold border border-primary/30 bg-primary/10 text-primary">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
