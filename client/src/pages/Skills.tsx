/** Style reminder — Founder’s Ledger Skills page: concise, truthful tool labels only; no project claims, no descriptions, and no oversized capability cards. */
import { Github } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import { githubProfile } from "@/lib/portfolioData";

const skillGroups = [
  { label: "AI & AUTOMATION", items: ["AI Engineer", "Agentic AI", "Automation", "Prompt Engineering", "Claude Code", "Manus", "Google AI Tools", "Antigravity"] },
  { label: "DEVELOPMENT", items: ["Web Development", "C", "Java", "React", "TypeScript", "JavaScript", "HTML & CSS", "Flutter", "Python"] },
  { label: "TOOLS & IDES", items: ["Git", "GitHub", "VS Code", "Antigravity IDE", "IntelliJ IDEA"] },
  { label: "DATABASES", items: ["MySQL", "PostgreSQL"] },
];

export default function Skills() {
  return (
    <PageFrame current="skills" chapter="03">
      <main className="simple-skills-page">
        <section className="simple-skills-intro">
          <p className="eyebrow"><span>03</span> SKILLS ONLY <b>● USER-CONFIRMED</b></p>
          <h1>Skills &amp;<br /><em>tools.</em></h1>
          <p>Only the skills Quaid wants to show—nothing presented as a separate project.</p>
        </section>
        <section className="simple-skills-board" aria-label="Quaid Khan skills">
          <div className="simple-skills-stamp"><img src="/manus-storage/qk-monogram_d42e6aa0.png" alt="QK monogram" /><span>SKILL INDEX / 03</span></div>
          {skillGroups.map((group) => (
            <div className="simple-skill-group" key={group.label}>
              <p>{group.label}</p>
              <div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          ))}
          <a href={githubProfile} target="_blank" rel="noreferrer" className="simple-github-link"><Github /> Open GitHub</a>
        </section>
      </main>
    </PageFrame>
  );
}
