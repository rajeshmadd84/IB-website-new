"use client";

import { useState } from "react";
import { IconCheck, IconRocket, IconLoader } from "@/components/ib/icons";

const ROLES = ["Developer / Owner", "General Contractor", "EPC", "Consultant / PM", "Other"];

const W3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY || "";

export default function PilotForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", role: "", project: "", note: "" });
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = async () => {
    if (!f.name.trim()) return setErr("Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return setErr("Please enter a valid work email.");
    if (!f.company.trim()) return setErr("Please add your company.");
    if (!f.role) return setErr("Please select your company type.");
    setErr("");
    setLoading(true);
    try {
      const body = new FormData();
      body.append("access_key", W3FORMS_ACCESS_KEY);
      body.append("subject", "New Pilot Application");
      body.append("name", f.name);
      body.append("email", f.email);
      body.append("company", f.company);
      body.append("role", f.role);
      body.append("project", f.project);
      body.append("message", f.note);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setErr(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setErr("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <main>
        <section className="ib-sec">
          <div className="ib-wrap">
            <div className="ib-success">
              <div className="tick">
                <IconCheck width={30} height={30} />
              </div>
              <h2>Pilot request received</h2>
              <p>
                Thanks, {f.name.split(" ")[0]}. We review pilot fit by hand and respond within two business days, usually with a couple of questions about the one site you'd like to connect.
              </p>
              <div className="ib-next">
                <span>
                  <i>01</i> We confirm fit and scope one live site.
                </span>
                <span>
                  <i>02</i> You share a BOM; we point at your existing channels.
                </span>
                <span>
                  <i>03</i> First live coordination dashboard inside 7 days.
                </span>
              </div>
              <a href="/" className="ib-btn ib-btn-ghost">
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="ib-sec" style={{ paddingTop: "clamp(2.5rem,6vh,4rem)", position: "relative" }}>
        <div className="ib-grid-bg" />
        <div className="ib-wrap" style={{ position: "relative" }}>
          <div className="ib-form-grid">
            <aside className="ib-aside">
              <span className="ib-eyebrow">
                <IconRocket /> Join Pilot
              </span>
              <h1>
                Run it on a <span className="cy">live</span> project
              </h1>
              <p className="ib-lead">Free pilot for select developers, GCs, and EPC teams. Connect one site and see autonomous coordination in your own data within three weeks.</p>
              <ul className="ib-steps">
                <li>
                  <span className="n">01</span>
                  <div>
                    <h4>Connect one site</h4>
                    <p>Share a BOM and your existing email / PO channels. No integration work, no IT tickets.</p>
                  </div>
                </li>
                <li>
                  <span className="n">02</span>
                  <div>
                    <h4>Live dashboard in 7 days</h4>
                    <p>Your first real-time coordination view, built from your own project data.</p>
                  </div>
                </li>
                <li>
                  <span className="n">03</span>
                  <div>
                    <h4>First save in 14 days</h4>
                    <p>A real disruption detected and acted on before it reached the site.</p>
                  </div>
                </li>
              </ul>
              <p className="ib-reassure">
                <b>Pre-revenue MVP, live today.</b> Pilots begin from your BOMs; BIM-native ingestion comes later.
                <br />
                No procurement battles. No consulting bill.
              </p>
            </aside>

            <div className="ib-card-form">
              <span className="ce">Pilot application</span>
              <h2>Tell us about your project</h2>
              <div className="ib-field-row">
                <div className="ib-field">
                  <label>
                    Name <span className="req">*</span>
                  </label>
                  <input value={f.name} onChange={set("name")} placeholder="Your name" />
                </div>
                <div className="ib-field">
                  <label>
                    Work email <span className="req">*</span>
                  </label>
                  <input value={f.email} onChange={set("email")} placeholder="you@company.com" type="email" />
                </div>
              </div>
              <div className="ib-field-row">
                <div className="ib-field">
                  <label>
                    Company <span className="req">*</span>
                  </label>
                  <input value={f.company} onChange={set("company")} placeholder="Company name" />
                </div>
                <div className="ib-field">
                  <label>
                    Company type <span className="req">*</span>
                  </label>
                  <select value={f.role} onChange={set("role")}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ib-field">
                <label>Project type & location</label>
                <input value={f.project} onChange={set("project")} placeholder="e.g. residential tower, Singapore" />
              </div>
              <div className="ib-field">
                <label>The one site you'd connect</label>
                <textarea value={f.note} onChange={set("note")} placeholder="A sentence on the site, stage, and the supply-chain pain you'd want us to tackle first." />
              </div>
              {err && (
                <div className="ib-form-error">
                  <span>⚠</span> {err}
                </div>
              )}
              <div className="ib-form-foot">
                <button className="ib-btn ib-btn-primary" onClick={submit} disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? (
                    <>
                      <IconLoader width={18} height={18} style={{ animation: "spin 1s linear infinite", marginRight: "0.5rem" }} />
                      Submitting...
                    </>
                  ) : (
                    <>Apply for Pilot <span className="arw">→</span></>
                  )}
                </button>
                <p className="ib-form-note">We review by hand and reply within 2 business days. No spam, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
