/**
 * Style reminder — Founder’s Ledger: a continuous parchment-and-ink folio frame with Q authorship
 * seals, compact ledger metadata, clear mobile routing, and one decisive gold annotation color.
 */
import { Github, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const githubProfile = "https://github.com/Quaid-khan";

type PageFrameProps = {
  children: ReactNode;
  current: "home" | "work" | "skills" | "contact";
  chapter: string;
};

export default function PageFrame({ children, current, chapter }: PageFrameProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["home", "01 / Folio", "/"],
    ["work", "02 / Filed work", "/work"],
    ["skills", "03 / Capability", "/skills"],
    ["contact", "04 / Direct line", "/contact"],
  ] as const;

  return (
    <div className="site-shell folio-page">
      <aside className={`folio-rail page-rail ${current === "contact" ? "page-rail-dark" : ""}`} aria-label="Portfolio navigation rail">
        <a className="rail-mark" href="/" aria-label="Quaid Khan home">
          <img src="/manus-storage/qk-monogram_d42e6aa0.png" alt="QK monogram" />
        </a>
        <div className="rail-middle" aria-hidden="true">
          <span>QUAID KHAN</span>
          <i />
          <span>FOUNDER&apos;S LEDGER / {chapter}</span>
        </div>
        <div className="rail-index" aria-hidden="true">
          <span>01</span><span>02</span><span>03</span><span>04</span>
        </div>
        <span className="rail-chapter" aria-hidden="true">CHAPTER / {chapter}</span>
        <a className="rail-status" href="/contact"><span /> Available</a>
      </aside>

      <header className={`topbar page-topbar ${current === "contact" ? "page-topbar-dark" : ""}`}>
        <a className="desktop-mark" href="/" aria-label="Quaid Khan home">
          <img src="/manus-storage/qk-monogram_d42e6aa0.png" alt="QK monogram" />
          <span>QUAID KHAN</span><i>PRODUCT & SYSTEMS</i>
        </a>
        <a className="mobile-mark" href="/" aria-label="Quaid Khan home">
          <img src="/manus-storage/qk-monogram_d42e6aa0.png" alt="QK monogram" /><span>Quaid Khan</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Portfolio pages">
          {navItems.map(([id, label, href]) => <a className={current === id ? "nav-current" : ""} href={href} onClick={closeMenu} key={id}>{label}</a>)}
          <a className="nav-github" href={githubProfile} target="_blank" rel="noreferrer"><Github /> Source archive</a>
        </nav>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {children}
      <footer className="page-footer"><span>© {new Date().getFullYear()} Quaid Khan</span><span>FOUNDER&apos;S LEDGER / {chapter}</span><a href="/">Home</a></footer>
    </div>
  );
}
