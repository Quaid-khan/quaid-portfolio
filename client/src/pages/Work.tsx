/** Style reminder — Founder’s Ledger Work page: archived exhibits, source routes, Q seals, and asymmetric proof-led layouts. */
import { ExternalLink, FileDown, FileText, Github } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import { projects } from "@/lib/portfolioData";

export default function Work() {
  return (
    <PageFrame current="work" chapter="02">
      <main className="page-main work-page">
        <section className="page-intro page-intro-ink">
          <p className="eyebrow"><span>02</span> WORK ARCHIVE <b>● PUBLIC EVIDENCE</b></p>
          <h1>Products with<br /><em>proof inside.</em></h1>
          <p>Each entry links directly to a live system where available, the public source archive, and a concise written case study.</p>
        </section>
        <section className="work-ledger-list" aria-label="Selected projects">
          {projects.map((project, index) => (
            <article className={`work-ledger-item item-${index + 1}`} key={project.name}>
              <div className="work-case-number">CASE / {project.number}</div>
              <a className="work-proof-image" href={project.live ?? project.repo} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.name} public product or repository view`} /><span>ARCHIVED EXHIBIT</span><img className="work-seal" src="/manus-storage/qk-monogram_d42e6aa0.png" alt="" /></a>
              <div className="work-ledger-copy">
                <p>{project.type}</p><h2>{project.name}</h2><p className="work-description">{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="work-routes"><span className="work-routes-label">PROOF ROUTES</span>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink /> Live route</a>}
                  <a href={project.repo} target="_blank" rel="noreferrer"><Github /> Source archive</a>
                  {project.caseStudy && <a href={project.caseStudy} target="_blank" rel="noreferrer"><FileText /> Case study <FileDown /></a>}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageFrame>
  );
}
