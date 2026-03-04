import { Activity, BarChart2, ExternalLink, Github, Waves } from "lucide-react";

interface Project {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tags: string[];
  accentColor: string;
  githubLink?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Ocean Plastic / Marine Debris Detection using YOLOv5",
    description:
      "Developed an AI-based object detection system to identify marine debris like plastic bottles, foam, and cans using YOLOv5.",
    bullets: [
      "Dataset prepared using Roboflow for training",
      "Model evaluation using Precision, Recall and mAP metrics",
      "Flask web application for image upload and detection results",
    ],
    icon: Waves,
    tags: ["Python", "YOLOv5", "PyTorch", "OpenCV", "Flask"],
    accentColor: "oklch(0.62 0.15 200)",
    githubLink: "https://github.com/yaswanth1768/marine-debris-yolov5",
  },
  {
    title: "FitTrack Pro – Fitness & Calorie Tracking App",
    description:
      "A full-featured fitness and calorie tracking web app built on the Internet Computer (ICP) platform, optimized for mobile use with PWA-style experience.",
    bullets: [
      "Authentication, dashboard with BMI calculator, calorie & workout trackers",
      "Water tracker, step counter, weight logger with line chart progress",
      "Goals system with BMR + TDEE calculation and Indian diet recommendations",
      "Admin panel, gamification with streak system and achievement badges",
    ],
    icon: Activity,
    tags: ["ReactJS", "Motoko", "ICP", "PWA", "TypeScript"],
    accentColor: "oklch(0.65 0.20 25)",
  },
  {
    title: "Traffic Management System (SQL Based)",
    description:
      "Designed a relational database system to manage traffic signals, vehicle flow, and violation records.",
    bullets: [
      "Normalized relational database schema design",
      "Traffic pattern analysis and real-time data logging support",
      "Scalable architecture for smart city systems",
    ],
    icon: BarChart2,
    tags: ["MySQL", "SQL Queries", "ER Modeling"],
    accentColor: "oklch(0.68 0.18 155)",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--section-alt)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Things I've built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 geo-line">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="stagger-item group relative rounded-2xl border bg-card p-6 card-hover overflow-hidden flex flex-col"
              data-index={i}
              data-ocid={`projects.card.${i + 1}`}
              style={
                {
                  "--project-accent": project.accentColor,
                } as React.CSSProperties
              }
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: project.accentColor }}
                aria-hidden="true"
              />

              {/* Subtle background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 100% 80% at 50% 0%, ${project.accentColor}18, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${project.accentColor}22`,
                    }}
                  >
                    <project.icon
                      className="h-5 w-5"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground leading-snug pt-0.5">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-5">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                        aria-hidden="true"
                      />
                      <span className="text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-mono font-medium border"
                      style={{
                        borderColor: `${project.accentColor}40`,
                        color: project.accentColor,
                        background: `${project.accentColor}12`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link (when available) */}
                {project.githubLink && (
                  <div className="mt-auto pt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`projects.github_button.${i + 1}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                      style={{ color: project.accentColor }}
                    >
                      <Github className="h-3.5 w-3.5" />
                      View on GitHub
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
