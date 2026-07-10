import { Flowchart } from "@/components/ib/flowchart";
import { IconCheck, IconZap, IconShield, IconRoute, IconBriefcase, IconBot, IconGear, IconUsers, IconSwap, IconTrendingUp, IconQuestion } from "@/components/ib/icons";
import { DETAILS, type Detail } from "@/components/ib/detail-data";

const OUT_ICONS = [<IconZap key="z" />, <IconShield key="s" />, <IconRoute key="r" />];

function highlight(title: string, cy: string) {
  const i = title.indexOf(cy);
  if (i < 0) return title;
  return (
    <>
      {title.slice(0, i)}
      <span className="cy">{cy}</span>
      {title.slice(i + cy.length)}
    </>
  );
}

export default function DetailPage({ d }: { d: Detail }) {
  const siblings = DETAILS.filter((x) => x.group === d.group && x.slug !== d.slug);
  const groupHref = d.group === "agents" ? "/agents" : "/use-cases";
  const isTeam = !!d.agents;

  return (
    <main>
      <section className="ib-phero">
        <div className="ib-grid-bg" />
        <div className="ib-wrap" style={{ position: "relative" }}>
          <span className="ib-eyebrow">
            {d.eyebrow === "Use Case" ? <IconBriefcase /> : <IconBot />} {d.eyebrow}
          </span>
          <h1>{highlight(d.title, d.cy)}</h1>
          <p>{d.lead}</p>
          {d.intro2 && <p style={{ marginTop: "1.1rem", color: "var(--ib-text-muted)", fontSize: "1rem", maxWidth: "660px" }}>{d.intro2}</p>}
        </div>
      </section>

      {/* flow */}
      <section className="ib-sec">
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconGear /> How it runs
            </span>
            <h2>{d.flow.title.replace(/ [-—].*/, "")}</h2>
          </div>
          <div className="ib-reveal">
            <Flowchart nodes={d.flow.nodes} edges={d.flow.edges} height={d.flow.height} title={d.flow.title} caption={d.flow.caption} legend={d.flow.legend} />
          </div>
        </div>
      </section>

      {/* roster (team only) */}
      {d.agents && (
        <section className="ib-sec alt">
          <div className="ib-wrap">
            <div className="ib-head ib-reveal">
              <span className="ib-eyebrow">
                <IconUsers /> The team
              </span>
              <h2>{d.agentsHead}</h2>
            </div>
            <div className="ib-roster">
              {d.agents.map((a) => (
                <div className="ib-agent ib-reveal" key={a.ref}>
                  <div className="top">
                    <span className="ref">{a.ref}</span>
                    <h3>{a.name}</h3>
                    {a.tag && <span className="atag">{a.tag}</span>}
                  </div>
                  <p className="role">{a.role}</p>
                  <ul>
                    {a.duties.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* workflow (team only) */}
      {d.workflow && (
        <section className="ib-sec">
          <div className="ib-wrap">
            <div className="ib-head ib-reveal">
              <span className="ib-eyebrow">
                <IconRoute /> End to end
              </span>
              <h2>{d.workflowHead}</h2>
            </div>
            <div className="ib-flowsteps ib-reveal">
              {d.workflow.map((s) => (
                <div className="ib-step" key={s.n}>
                  <span className="sn">{s.n}</span>
                  <div>
                    <h4>
                      {s.title}
                      {s.gate && <span className="ib-gate-pill">human gate</span>}
                    </h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* gates (team only) */}
      {d.gates && (
        <section className="ib-sec alt">
          <div className="ib-wrap">
            <div className="ib-head ib-reveal">
              <span className="ib-eyebrow">
                <IconShield /> Authority stays human
              </span>
              <h2>{d.gatesHead}</h2>
            </div>
            <div className="ib-gates ib-reveal">
              {d.gates.map((g, i) => (
                <div className="ib-gate" key={i}>
                  <IconCheck width={18} height={18} />
                  <span>{g}</span>
                </div>
              ))}
            </div>
            {d.gatesNote && <p className="ib-gatenote ib-reveal">{d.gatesNote}</p>}
          </div>
        </section>
      )}

      {/* split (use-case only) */}
      {d.splitHead && (
        <section className="ib-sec alt">
          <div className="ib-wrap">
            <div className="ib-split">
              <div className="ib-reveal">
                <span className="ib-eyebrow">
                  <IconSwap /> The shift
                </span>
                <h2>{d.splitHead}</h2>
                <p>{d.splitBody}</p>
                <ul className="ib-checks">
                  {d.checks?.map((c, i) => (
                    <li key={i}>
                      <IconCheck />
                      <span>
                        <b>{c.b}</b> {c.rest}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href="/pilot" className="ib-btn ib-btn-primary" style={{ marginTop: "1.8rem" }}>
                  Run it on a live project <span className="arw">→</span>
                </a>
              </div>
              <div className="ib-cards ib-reveal" style={{ transitionDelay: "100ms" }}>
                {d.outcomes.map((o, i) => (
                  <div className="ib-card" key={i}>
                    <div className="ib-ic">{OUT_ICONS[i % OUT_ICONS.length]}</div>
                    <h3>{o.h}</h3>
                    <p>{o.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* standalone outcomes (team only) */}
      {!d.splitHead && (
        <section className="ib-sec">
          <div className="ib-wrap">
            <div className="ib-head center ib-reveal">
              <span className="ib-eyebrow">
                <IconTrendingUp /> Outcomes
              </span>
              <h2>{d.outcomesHead}</h2>
            </div>
            <div className="ib-cards c3">
              {d.outcomes.map((o, i) => (
                <div className="ib-card ib-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="ib-ic">{OUT_ICONS[i % OUT_ICONS.length]}</div>
                  <h3>{o.h}</h3>
                  <p>{o.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ + siblings */}
      <section className={"ib-sec" + (isTeam ? " alt" : "")}>
        <div className="ib-wrap">
          <div className="ib-head ib-reveal">
            <span className="ib-eyebrow">
              <IconQuestion /> FAQs
            </span>
            <h2>{isTeam ? "Questions, answered" : `${d.outcomesHead}, answered`}</h2>
          </div>
          <div className="ib-faq ib-reveal">
            {d.faqs.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: "3rem", display: "flex", gap: ".8rem", flexWrap: "wrap", alignItems: "center" }}>
            <span className="ib-strip-label" style={{ marginRight: ".4rem" }}>
              {isTeam ? "Other teams" : "More use cases"}
            </span>
            {siblings.map((s) => (
              <a key={s.slug} href={`${groupHref}/${s.slug}`} className="ib-btn ib-btn-ghost" style={{ padding: ".55em 1.1em", fontSize: ".85rem" }}>
                {s.title.replace("The ", "").replace(" team", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ib-cta">
        <div className="ib-cta-bg" />
        <div className="ib-wrap ib-cta-inner ib-reveal">
          <h2>{highlight(d.ctaTitle, d.ctaCy)}</h2>
          <p>Connect one site and see it run in your own data within three weeks.</p>
          <div className="ib-cta-actions">
            <a href="/contact-us" className="ib-btn ib-btn-primary">
              Join Pilot <span className="arw">→</span>
            </a>
            <a href="/contact-us" className="ib-btn ib-btn-ghost">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
