import type { Metadata } from "next";
import { IconBot, IconCheck, IconLayers, IconLink, IconRocket, IconShield } from "@/components/ib/icons";
import { JsonLd, webPageJsonLd } from "@/components/ib/json-ld";

const TITLE = "About Bricks & Brains | Where Construction Meets Intelligence";
const DESCRIPTION = "Meet the people and ideas behind Bricks & Brains, building decision intelligence for the fragmented decisions that shape construction supply chains.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const philosophy = [
  { icon: <IconLink />, title: "Intelligence should understand context", body: "Construction is not a collection of isolated tasks. A supplier delay can affect logistics, equipment, workforce and the next activity on site. Useful AI must understand these relationships, not simply answer questions from documents." },
  { icon: <IconShield />, title: "AI should support decisions, not hide them", body: "Construction decisions involve commercial judgement, contractual responsibility, safety and real-world consequences. Bricks & Brains helps teams detect issues, understand consequences, coordinate work and prepare recommendations while people remain responsible for important decisions." },
  { icon: <IconRocket />, title: "Start with real operational problems", body: "Construction technology should prove value before asking companies to transform everything. Start with supplier updates, material deliveries, required-on-site dates, logistics coordination, procurement follow-ups and disruptions. Solve something real first, then expand." },
  { icon: <IconLayers />, title: "Project knowledge should not disappear", body: "Every project teaches an organisation something: which suppliers delivered reliably, what caused a delay and which workaround worked. Bricks & Brains is being built to help construction companies learn from every project they deliver." },
];

const team = [
  { initials: "RM", name: "Rajesh Maddineni", role: "Founder & CEO", href: "https://www.linkedin.com/in/rajeshmaddineni/", body: "Brings more than 15 years across construction logistics, supply-chain operations, software products and entrepreneurship." },
  { initials: "TK", name: "Tarun Sai Kalimili", role: "CTO & Co-Founder", href: "https://www.linkedin.com/in/kalimili/", body: "Leads the technology and engineering work behind construction-specific intelligence and connected project context." },
  { initials: "HS", name: "Hari Sagaran", role: "CGO & Co-Founder", href: "https://www.linkedin.com/in/hari-sagaran/", body: "Builds relationships with construction teams and ecosystem partners as Bricks & Brains grows from Singapore." },
  { initials: "JK", name: "Jidesh Kambil", role: "Founding Advisor", href: "https://www.linkedin.com/in/jidesh-kambil-6a43a254/", body: "Advises the founding team as it brings together construction operations, technology and decision intelligence." },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={webPageJsonLd({ name: "About Bricks & Brains", description: DESCRIPTION, path: "/about" })} />
      <section className="ib-phero"><div className="ib-grid-bg" /><div className="ib-wrap" style={{ position: "relative" }}><span className="ib-eyebrow"><IconBot /> About Bricks &amp; Brains</span><h1>Built by people who understand how <span className="cy">construction supply chains</span> actually work.</h1><p>Bricks &amp; Brains was created around a simple belief:</p><p><strong>Construction does not suffer from a lack of software. It suffers from fragmented decisions.</strong></p><p>Projects already generate enormous amounts of information across schedules, suppliers, procurement teams, subcontractors, logistics providers and site operations. The problem is that this knowledge rarely comes together at the moment a decision needs to be made.</p><p>We are building Bricks &amp; Brains to change that.</p></div></section>
      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head center ib-reveal"><span className="ib-eyebrow"><IconShield /> Our philosophy</span><h2>How we think about <span className="cy">the problem.</span></h2></div><div className="ib-cards c2 ib-reveal">{philosophy.map((item) => <div className="ib-card" key={item.title}><div className="ib-ic">{item.icon}</div><h3>{item.title}</h3><p>{item.body}</p></div>)}</div></div></section>
      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-head center ib-reveal"><span className="ib-eyebrow"><IconBot /> Our team</span><h2>The people building <span className="cy">Bricks &amp; Brains.</span></h2><p>Experience across construction supply chains, software engineering, artificial intelligence and product development.</p></div><div className="ib-cards c4">{team.map((member, i) => <article className="ib-card team ib-reveal" key={member.name} style={{ transitionDelay: `${i * 70}ms` }}><div className="ib-ic" style={{ fontFamily: "var(--ib-mono)", fontSize: ".78rem" }}>{member.initials}</div><h3>{member.name}</h3><p><strong>{member.role}</strong></p><p>{member.body}</p><a href={member.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ib-cyan)", fontSize: ".85rem", fontWeight: 600 }}>LinkedIn ↗</a></article>)}</div></div></section>
      <section className="ib-sec"><div className="ib-wrap"><div className="ib-head center ib-reveal"><span className="ib-eyebrow"><IconCheck /> Why Bricks &amp; Brains</span><h2>Where construction <span className="cy">meets intelligence.</span></h2><p><b>Bricks</b> represent the physical reality of construction: materials, equipment, suppliers, logistics, workforce and the site.</p><p><b>Brains</b> represent the intelligence needed to understand how those pieces interact and what should happen next.</p></div></div></section>
      <section className="ib-sec alt"><div className="ib-wrap"><div className="ib-split"><div className="ib-reveal"><span className="ib-eyebrow"><IconLink /> Our name</span><h2>From IntelliByld to <span className="cy">Bricks &amp; Brains.</span></h2><p><b>Bricks &amp; Brains was formerly known as IntelliByld.</b> The new name better reflects what we are building: intelligence designed specifically for the physical and operational realities of construction.</p><p>The company, technology and long-term mission continue under the Bricks &amp; Brains brand.</p></div><div className="ib-card ib-reveal"><span className="ib-eyebrow"><IconRocket /> Building from Singapore</span><p>Bricks &amp; Brains is building its technology and company from Singapore, with an initial focus on the built-environment ecosystem here.</p><p>Singapore gives us the opportunity to work closely with contractors, developers, industry organisations and technology partners while building a platform intended for a much broader construction market.</p></div></div></div></section>
      <section className="ib-cta"><div className="ib-cta-bg" /><div className="ib-wrap ib-cta-inner ib-reveal"><h2>Construction meets <span className="cy">intelligence.</span></h2><p>Construction will not become intelligent simply by putting AI on top of existing software. The next generation of construction technology needs to understand how projects actually work.</p><div className="ib-cta-actions"><a href="/contact-us" className="ib-btn ib-btn-primary">Talk to Bricks &amp; Brains <span className="arw">→</span></a></div></div></section>
    </main>
  );
}
