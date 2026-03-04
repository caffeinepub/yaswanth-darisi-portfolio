import { BookOpen, Code2, Database, Users, Wrench } from "lucide-react";

interface SkillGroup {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Programming Languages",
    icon: Code2,
    variant: "skill-lang",
    skills: ["Python", "Java", "C"],
  },
  {
    label: "Database",
    icon: Database,
    variant: "skill-db",
    skills: ["MySQL"],
  },
  {
    label: "Tools",
    icon: Wrench,
    variant: "skill-tools",
    skills: ["PowerBI", "Git", "GitHub"],
  },
  {
    label: "Coursework",
    icon: BookOpen,
    variant: "skill-course",
    skills: ["Data Structures", "DBMS", "Operating Systems", "OOP"],
  },
  {
    label: "Soft Skills",
    icon: Users,
    variant: "skill-soft",
    skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6"
      data-ocid="skills.section"
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 geo-line">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.label}
              className="section-hidden p-6 rounded-2xl border bg-card"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <group.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground tracking-wide">
                  {group.label}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className={`stagger-item inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${group.variant}`}
                    data-index={gi * 10 + si}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
