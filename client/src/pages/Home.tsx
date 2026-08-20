/**
 * Style reminder — Founder’s Ledger Home: a concise, portrait-led landing page that introduces
 * Quaid’s authored portfolio book and directs visitors into distinct Work, Skills, and Contact routes.
 */
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PageFrame from "@/components/PageFrame";

const destinations = [
  {
    number: "02",
    title: "Filed work",
    description: "Inspect three public product systems, their evidence routes, source archives, and case studies.",
    href: "/work",
    label: "Inspect record",
    record: "THESIS / PUBLIC SYSTEM",
    image: "/manus-storage/qk-researcher-live-console_d04c1953.webp",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Direct line",
    description: "Use direct routes for WhatsApp, email, phone, GitHub, LinkedIn, Instagram, and Facebook.",
    href: "/contact",
    label: "Open direct route",
    record: "DIRECT ROUTE / AVAILABLE",
    image: "/manus-storage/quaid-profile_a096a8de.jpg",
    icon: Mail,
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <PageFrame current="home" chapter="01">
      <main className="home-landing">
        <section className="landing-hero" aria-labelledby="home-title">
          <div className="landing-copy">
            <p className="eyebrow"><span>01</span> PRODUCT-MINDED SOFTWARE ENGINEER <b>● LIVE FOLIO</b></p>
            <h1 id="home-title">Software<br /><em>with a point</em><br />of view.</h1>
            <p>I’m Quaid Khan. I build research tools, web systems, and AI-assisted products people can inspect, understand, and use with confidence.</p>
            <a className="button button-ink" href="/work">Inspect the work <ArrowDownRight /></a>
          </div>
          <div className="landing-portrait-stage">
            <span className="landing-live"><i /> LIVE FOLIO</span>
            <div className="landing-avatar-halo" aria-hidden="true"><i className="avatar-orbit orbit-one" /><i className="avatar-orbit orbit-two" /><i className="avatar-orbit orbit-three" /></div>
            <motion.figure className="landing-hero-art" animate={reduceMotion ? {} : { y: [0, -7, 0] }} transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}>
              <img src="/manus-storage/quaid-ledger-hero_eb6fb66d.jpg" alt="Abstract obsidian and gold architectural sculpture" />
              <figcaption><span>QK / FOLIO 01</span><span>2026</span></figcaption>
            </motion.figure>
            <motion.figure className="landing-portrait" animate={reduceMotion ? {} : { y: [0, -9, 0], rotate: [0, 0.6, 0] }} transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}>
              <img src="/manus-storage/quaid-profile_a096a8de.jpg" alt="Quaid Khan" />
              <figcaption>QUAID KHAN / BUILDER</figcaption>
            </motion.figure>
            <span className="landing-photo-stamp photo-stamp-one">WEB + AI SYSTEMS</span>
            <span className="landing-photo-stamp photo-stamp-two">AVAILABLE / 2026</span>
          </div>
        </section>

        <section className="route-directory" aria-labelledby="route-title">
          <span className="route-directory-stamp" aria-hidden="true">LEDGER 01 / INDEXED RECORDS</span>
          <div className="route-directory-heading">
            <p className="eyebrow"><span>LEDGER INDEX</span> FILED RECORDS</p>
            <h2 id="route-title">Filed work.<br /><em>Direct line.</em></h2>
            <p>Public systems with visible evidence, alongside a direct route to Quaid for real conversations and collaboration.</p>
          </div>
          <div className="route-directory-list">
            {destinations.map((destination, index) => {
              const Icon = destination.icon;
              return (
                <a href={destination.href} className={`route-directory-card route-${index + 1}`} key={destination.href}>
                  <div className="route-card-meta"><span>{destination.number}</span><Icon /></div>
                  <div className="route-card-image"><img src={destination.image} alt="" /></div>
                  <div className="route-card-copy"><span className="route-card-status">{destination.record}</span><h3>{destination.title}</h3><p>{destination.description}</p><span>{destination.label} <ArrowUpRight /></span></div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
