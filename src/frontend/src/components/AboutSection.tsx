import { Brain, Database, GraduationCap, Rocket } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech CSE (AI & ML) at VIT Chennai",
  },
  {
    icon: Brain,
    label: "Passion",
    value: "AI & Machine Learning",
  },
  {
    icon: Database,
    label: "Focus",
    value: "Database Systems & SQL",
  },
  {
    icon: Rocket,
    label: "Goal",
    value: "Real-World AI Solutions",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--section-alt)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 geo-line">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Bio */}
          <div className="space-y-5 section-hidden">
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
              I'm a{" "}
              <span className="text-primary font-semibold">
                B.Tech Computer Science (AI & ML) student at VIT Chennai
              </span>{" "}
              with hands-on experience in Python-based machine learning and
              database systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have experience in object detection using YOLOv5, data
              preprocessing, SQL query optimization, and problem solving.
              Certified in Oracle AI Foundations and Generative AI, I bring a
              strong foundation in both theory and applied AI concepts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seeking opportunities to apply AI and software development skills
              in real-world projects. Committed to continuous learning and
              delivering impactful solutions that bridge the gap between
              intelligent systems and practical needs.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={item.label}
                className="stagger-item p-5 rounded-2xl border bg-card card-hover"
                data-index={i}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
