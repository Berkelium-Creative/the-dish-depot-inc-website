// @ts-nocheck
"use client";

import { Six_Caps, Inter, Anonymous_Pro } from "next/font/google";
import content from "../data/content.json";

const display = Six_Caps({ subsets: ["latin"], weight: ["400"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = Anonymous_Pro({ subsets: ["latin"], weight: ["400", "700"] });

const CHARCOAL = "#0F172A";
const STEEL = "#475569";
const AMBER = "#F59E0B";
const CREAM = "#FAFAFA";
const STONE = "#E2E8F0";
const RACK = "#1E293B";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);
  return (
    <main className={body.className} style={{ backgroundColor: CREAM, color: CHARCOAL, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) forwards; }
      `}</style>

      <div style={{ backgroundColor: AMBER, color: CHARCOAL }}>
        <div className={`${mono.className} max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2`} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
          <span>// THE DISH DEPOT · GLENDALE</span>
          <span>★ B2B · WHOLESALE · WALK-IN</span>
          <span>4.6 / 26</span>
        </div>
      </div>

      <nav style={{ backgroundColor: CREAM, borderBottom: `2px solid ${CHARCOAL}` }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className={display.className} style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", color: CHARCOAL, letterSpacing: "0.04em", lineHeight: 1 }}>THE DISH DEPOT</p>
            <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.32em", color: AMBER, textTransform: "uppercase", marginTop: 4, fontWeight: 700 }}>// RESTAURANT SUPPLY · WHOLESALE</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="#warehouse" className={mono.className} style={{ display: "none", fontSize: 11, color: CHARCOAL, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}><span className="hidden md:inline">// WAREHOUSE</span></a>
            <a href="#stock" className={mono.className} style={{ fontSize: 11, color: CHARCOAL, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}><span className="hidden md:inline">// IN STOCK</span></a>
            <a href="#visit" className={mono.className} style={{ fontSize: 11, color: CHARCOAL, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}><span className="hidden md:inline">// VISIT</span></a>
            <a href={phoneTel} className={display.className} style={{ backgroundColor: CHARCOAL, color: AMBER, padding: "13px 22px", fontSize: 18, letterSpacing: "0.16em" }}>CALL THE DESK</a>
          </div>
        </div>
      </nav>

      <section style={{ backgroundColor: CHARCOAL, color: CREAM, borderBottom: `2px solid ${CHARCOAL}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: AMBER, textTransform: "uppercase", marginBottom: 24, fontWeight: 700 }}>// W GARFIELD AVE · GLENDALE · OPEN MON-SAT</p>
          <h1 className={display.className} style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: CREAM, lineHeight: 0.85, letterSpacing: "0.005em", textTransform: "uppercase" }}>
            EVERYTHING <br /><span style={{ color: AMBER }}>A KITCHEN NEEDS.</span> <br />WHOLESALE PRICING.
          </h1>
          <p className="mt-8 max-w-2xl" style={{ fontSize: "1.1rem", lineHeight: 1.7, color: CREAM, opacity: 0.92 }}>{content.hero.subheading}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={content.hero.ctaLink} className={display.className} style={{ backgroundColor: AMBER, color: CHARCOAL, padding: "18px 30px", fontSize: 22, letterSpacing: "0.04em", border: `2px solid ${AMBER}` }}>{content.hero.ctaText.toUpperCase()}</a>
            <a href="#stock" className={mono.className} style={{ color: AMBER, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 700, borderBottom: `2px solid ${AMBER}`, paddingBottom: 4 }}>// VIEW STOCK</a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: STONE, borderBottom: `2px solid ${CHARCOAL}` }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {[["50K+ SKU", "in stock"], ["B2B", "pricing on file"], ["WALK-IN", "welcome"], ["SAME-DAY", "pickup"]].map(([k, v], i) => (
            <div key={i} className="py-10 px-4" style={{ borderRight: i < 3 ? `1px solid ${CHARCOAL}` : "none" }}>
              <p className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: CHARCOAL, lineHeight: 1, letterSpacing: "0.02em" }}>{k}</p>
              <p className={mono.className} style={{ fontSize: 10, color: STEEL, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 700, marginTop: 6 }}>// {v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="warehouse" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: AMBER, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>// THE WAREHOUSE</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: CHARCOAL, lineHeight: 0.92, letterSpacing: "0.005em", textTransform: "uppercase" }}>{content.about.heading}</h2>
          </div>
          <div className="md:col-span-8 space-y-6" style={{ fontSize: "1.075rem", lineHeight: 1.75, color: CHARCOAL }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section id="stock" style={{ backgroundColor: RACK, color: CREAM, borderTop: `2px solid ${CHARCOAL}`, borderBottom: `2px solid ${CHARCOAL}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: AMBER, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>// IN STOCK · BY DEPARTMENT</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", color: CREAM, lineHeight: 0.9, letterSpacing: "0.005em", textTransform: "uppercase", marginBottom: 14 }}>WHAT WE CARRY.</h2>
          <div className="grid md:grid-cols-3 gap-0">
            {content.services.map((s, i) => (
              <div key={i} style={{ border: `1px solid rgba(245,158,11,0.45)`, padding: "26px 24px" }}>
                <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: AMBER, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>// AISLE {String(i + 1).padStart(2, "0")}</p>
                <h3 className={display.className} style={{ fontSize: "1.8rem", color: CREAM, letterSpacing: "0.02em", lineHeight: 1.05, textTransform: "uppercase" }}>{s.title}</h3>
                <p className="mt-3" style={{ color: CREAM, opacity: 0.85, fontSize: "0.92rem", lineHeight: 1.6 }}>{s.description}</p>
                {s.price && <p className={mono.className} style={{ marginTop: 12, fontSize: 13, color: AMBER, letterSpacing: "0.12em", fontWeight: 700 }}>{s.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: AMBER, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>// CUSTOMER NOTES</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: CHARCOAL, lineHeight: 0.9, letterSpacing: "0.005em", textTransform: "uppercase", marginBottom: 28 }}>FROM THE LOADING DOCK.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} style={{ backgroundColor: CREAM, border: `2px solid ${CHARCOAL}`, padding: "28px 24px" }}>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.32em", color: AMBER, textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>// ORDER №{String(i + 1).padStart(4, "0")} · {r.context.toUpperCase()}</p>
              <p style={{ color: CHARCOAL, fontSize: "1.0rem", lineHeight: 1.65 }}>"{r.text}"</p>
              <p className={display.className} style={{ marginTop: 14, fontSize: 18, color: CHARCOAL, letterSpacing: "0.04em", textTransform: "uppercase" }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" style={{ backgroundColor: AMBER, color: CHARCOAL, borderTop: `2px solid ${CHARCOAL}`, borderBottom: `2px solid ${CHARCOAL}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: CHARCOAL, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>// FRONT DESK</p>
              <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: CHARCOAL, lineHeight: 0.92, letterSpacing: "0.005em", textTransform: "uppercase" }}>W GARFIELD AVE.</h2>
              <div className="mt-8" style={{ backgroundColor: CHARCOAL, color: CREAM, padding: "20px 22px" }}>
                <p className={display.className} style={{ fontSize: 22, color: AMBER, letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 1.2 }}>{content.contact.address.split(",")[0]}</p>
                <p className={mono.className} style={{ fontSize: 11, color: CREAM, letterSpacing: "0.18em", marginTop: 4 }}>{content.contact.address.split(",").slice(1).join(",").trim()}</p>
              </div>
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: CHARCOAL, textTransform: "uppercase", marginTop: 28, marginBottom: 12, fontWeight: 700 }}>// HOURS</p>
              <table className={mono.className} style={{ width: "100%", fontSize: 13 }}>
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => {
                    const closed = String(time).toLowerCase().includes("closed");
                    return (
                      <tr key={day} style={{ borderBottom: `1px solid ${CHARCOAL}` }}>
                        <td style={{ padding: "9px 0", color: CHARCOAL, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>{day.slice(0, 3)}</td>
                        <td className="text-right" style={{ padding: "9px 0", color: CHARCOAL, opacity: closed ? 0.55 : 1 }}>{String(time)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <a href={phoneTel} className={`${display.className} block mt-10`} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: CHARCOAL, letterSpacing: "0.02em", lineHeight: 1 }}>{content.contact.phone}</a>
            </div>
            <div className="md:col-span-7">
              <div style={{ border: `2px solid ${CHARCOAL}`, minHeight: 460 }}>
                <iframe title="Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: 458, display: "block", filter: "saturate(0.85)" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: CHARCOAL, color: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
            <p className={display.className} style={{ fontSize: 26, color: CREAM, letterSpacing: "0.04em", textTransform: "uppercase" }}>THE DISH DEPOT</p>
            <div className={mono.className} style={{ fontSize: 12, color: CREAM, letterSpacing: "0.06em" }}>
              <p>{content.contact.address}</p>
              <p className="mt-1">{content.contact.phone}</p>
            </div>
            {content.social && (
              <div className="flex flex-wrap gap-3 md:justify-end">
                {Object.entries(content.social).map(([platform, url]) => (
                  <a key={platform} href={String(url)} className={mono.className} style={{ color: AMBER, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", borderBottom: `1px solid ${AMBER}`, paddingBottom: 2, fontWeight: 700 }}>// {platform}</a>
                ))}
              </div>
            )}
          </div>
          <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", borderTop: `2px solid ${AMBER}`, paddingTop: 14, color: CREAM, opacity: 0.7, textTransform: "uppercase", fontWeight: 700 }}>© {new Date().getFullYear()} THE DISH DEPOT, INC // GLENDALE · CALIFORNIA</p>
        </div>
      </footer>
    </main>
  );
}
