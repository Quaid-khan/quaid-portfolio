/** Style reminder — Founder’s Ledger Contact page: direct, composed access to Quaid’s real channels with a premium closing-plate composition. */
import { Facebook, FileDown, Github, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import { contactLinks, githubProfile } from "@/lib/portfolioData";

export default function Contact() {
  return (
    <PageFrame current="contact" chapter="04">
      <main className="page-main contact-page">
        <section className="contact-page-hero">
          <div className="contact-page-photo"><img src="/manus-storage/quaid-profile_a096a8de.jpg" alt="Portrait of Quaid Khan" /><span>QUAID KHAN / AVAILABLE</span></div>
          <div className="contact-page-copy">
            <p className="eyebrow"><span>04</span> CONTACT LEDGER <b>● DIRECT ROUTES</b></p>
            <div className="contact-wordmark"><img src="/manus-storage/qk-monogram_d42e6aa0.png" alt="" aria-hidden="true" /><span>QUAID KHAN / CONTACT PLATE</span></div>
            <h1>Let&apos;s make<br /><em>something clear.</em></h1>
            <p>For internships, freelance work, product collaborations, and thoughtful technical conversations. Every route below goes directly to Quaid.</p>
            <a className="button button-gold" href={contactLinks.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp directly</a>
          </div>
        </section>
        <section className="contact-route-grid" aria-label="Direct contact methods">
          <a href={contactLinks.email}><Mail /><span>Email</span><b>q.khan0q@gmail.com</b></a>
          <a href={contactLinks.phone}><Phone /><span>Phone</span><b>+92 370 912 0096</b></a>
          <a href={githubProfile} target="_blank" rel="noreferrer"><Github /><span>GitHub</span><b>Quaid-khan</b></a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer"><b className="network-letter">in</b><span>LinkedIn</span><b>Quaid Khan</b></a>
          <a href={contactLinks.instagram} target="_blank" rel="noreferrer"><Instagram /><span>Instagram</span><b>@qk.xman</b></a>
          <a href={contactLinks.facebook} target="_blank" rel="noreferrer"><Facebook /><span>Facebook</span><b>Open profile</b></a>
        </section>
        <section className="contact-cv-banner"><div><p className="eyebrow"><span>CURRICULUM</span> DOWNLOADABLE PORTFOLIO CV</p><h2>Need the concise version?</h2></div><a href="/manus-storage/quaid-khan-visual-portfolio-cv_06de65be.pdf" target="_blank" rel="noreferrer" className="button button-ink"><FileDown /> Open portfolio CV</a></section>
      </main>
    </PageFrame>
  );
}
