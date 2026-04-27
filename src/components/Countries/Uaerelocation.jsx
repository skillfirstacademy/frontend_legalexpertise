import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Images ──────────────────────────────────────────────────────────────────
// Replace these with your own assets in /src/assets/
import heroImg    from "@/assets/dubai-skyline.jpg";       // Dubai skyline
import overviewImg from "@/assets/uae-overview.jpg";  // Dubai city / creek
import goldenImg  from "@/assets/uae-visa.jpg";     // Luxury / golden feature
import docsImg    from "@/assets/uae-application.jpg";       // Documents / office

// ── Static data ──────────────────────────────────────────────────────────────
const services = [
  "Residency Visa Acquisition",
  "Emirates ID Processing",
  "Immigration Compliance",
  "Legal Documentation & Advisory",
];

const stats = [
  { value: "1–10", label: "Years Validity" },
  { value: "0%",   label: "Income Tax" },
  { value: "200+", label: "Nationalities" },
  { value: "#1",   label: "Arab Business Hub" },
];

const pathways = [
  {
    num: "01",
    title: "Golden Visa",
    body: "Up to 10-year residency for investors, entrepreneurs, and exceptional talent. Independent from local sponsorship with full family inclusion.",
    tags: ["10 years", "No sponsor", "Family included"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Corporate / Investor",
    body: "For those establishing or expanding business — LLC, Free Zone, or Offshore. Residency aligned with business ownership and renewable long-term.",
    tags: ["Free Zone", "LLC", "Offshore"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Real Estate Investor",
    body: "Residency tied to property ownership. Access a high-growth market with passive rental income potential and a long-term renewable visa.",
    tags: ["Property-linked", "Rental income"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Employment Visa",
    body: "Issued to professionals with a verified UAE employment offer and binding contract. Includes family sponsorship eligibility.",
    tags: ["Employer-led", "Family sponsor"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Student Visa",
    body: "For international students in accredited UAE institutions. Valid for the academic duration with renewable status and part-time work rights.",
    tags: ["Academic duration", "Part-time work"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Family Sponsorship",
    body: "Sponsor your spouse, children, and parents once resident in the UAE. Requires salary verification, residential proof, and attested civil documents.",
    tags: ["Spouse", "Children", "Parents"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const goldenBenefits = [
  "Complete independence from local sponsorship",
  "Full property ownership privileges",
  "Family and domestic staff sponsorship",
  "Zero personal income tax environment",
  "Access to premium healthcare and education",
  "Enhanced global mobility and lifestyle standards",
];

const processSteps = [
  { num: "01", title: "Entry Permit",     body: "Sponsor submits entry authorization application to UAE authorities" },
  { num: "02", title: "Arrival in UAE",   body: "Entry into the country upon permit approval and clearance" },
  { num: "03", title: "Application Filing", body: "Submission via ICP portal, mobile app, or authorized service centres" },
  { num: "04", title: "Medical & Docs",   body: "Mandatory medical screening and full document verification" },
  { num: "05", title: "Visa Stamping",    body: "Final approval, Emirates ID registration, and visa endorsement" },
];

const documents = [
  "Valid passport",
  "Passport-sized photographs",
  "Entry permit",
  "Sponsor credentials",
  "Financial documentation",
  "Medical fitness certification",
  "DHA-approved health insurance",
  "Employment contract (if applicable)",
  "Business trade license (for investors)",
  "Attested civil documents (marriage / birth)",
];

const whyUAE = [
  {
    title: "Tax-Efficient Economy",
    body: "Zero personal income tax and a business-friendly fiscal environment that maximises wealth retention.",
    icon: <svg className="w-4 h-4 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    title: "Global Business Hub",
    body: "A globally recognised financial centre connecting East and West with world-class infrastructure.",
    icon: <svg className="w-4 h-4 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    title: "Safety & Governance",
    body: "Consistently rated among the world's safest countries with transparent and efficient governance.",
    icon: <svg className="w-4 h-4 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: "Quality of Life",
    body: "Premium healthcare, world-class education, and exceptional lifestyle standards across all Emirates.",
    icon: <svg className="w-4 h-4 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  },
  {
    title: "Strategic Location",
    body: "Positioned at the crossroads of Europe, Asia, and Africa — within 8 hours of two-thirds of the world.",
    icon: <svg className="w-4 h-4 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
  },
  {
    title: "Advanced Infrastructure",
    body: "Cutting-edge connectivity, smart city initiatives, and world-leading transport and logistics networks.",
    icon: <svg className="w-4 h-4 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>,
  },
];

// ── Reusable sub-components ───────────────────────────────────────────────────
const Eyebrow = ({ label }) => (
  <div className="flex items-center gap-3 mb-5">
    <span
      className="block w-7 h-px flex-shrink-0"
      style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }}
    />
    <span className="text-[10px] tracking-[0.38em] uppercase text-primary font-medium">{label}</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] text-foreground">
    {children}
  </h2>
);

const CornerAccent = () => (
  <>
    <span className="absolute top-[14px] left-[14px] w-[22px] h-[22px] border-t-[1.5px] border-l-[1.5px] border-primary" />
    <span className="absolute bottom-[14px] right-[14px] w-[22px] h-[22px] border-b-[1.5px] border-r-[1.5px] border-primary" />
  </>
);

const Dot = () => (
  <span className="relative flex-shrink-0 w-[18px] h-[18px] rounded-full bg-primary/10 border border-primary/35">
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-primary" />
  </span>
);

// ── Page component ────────────────────────────────────────────────────────────
const UAERelocation = () => {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[82vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, hsl(0 0% 4% / 0.2) 0%, hsl(0 0% 4% / 0.65) 60%, hsl(0 0% 4%) 100%),
              linear-gradient(to right, hsl(0 0% 4% / 0.7) 0%, transparent 55%)
            `,
          }}
        />
        <img
          src={heroImg}
          alt="Dubai skyline"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="relative z-10 max-w-[1120px] mx-auto w-full px-6 pb-20">
          <Eyebrow label="United Arab Emirates" />
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.03] font-semibold max-w-[680px]">
            Relocating to the{" "}
            <em className="gold-text not-italic">UAE</em>
          </h1>
          <p className="mt-5 max-w-[460px] text-sm leading-[1.8] text-muted-foreground font-light">
            Comprehensive, end-to-end immigration assistance — from residency visa acquisition to full legal compliance.
          </p>
          <ul className="mt-7 flex flex-col gap-[0.55rem] list-none p-0">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[0.82rem] text-foreground/80">
                <Dot />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative corner-accent p-3"
          >
            <img
              src={overviewImg}
              alt="UAE residency overview"
              className="w-full h-[380px] object-cover brightness-[0.85] saturate-110"
              loading="lazy"
            />
            <div className="absolute bottom-[-1rem] right-[-1rem] bg-dark-elevated border border-[hsl(42_30%_18%)] px-6 py-5 min-w-[130px]">
              <div className="font-display text-[2.25rem] font-semibold leading-none gold-text">10yr</div>
              <div className="text-[.65rem] tracking-[.2em] uppercase text-muted-foreground mt-1">Max Visa Validity</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow label="Residency Framework" />
            <SectionTitle>UAE Residence <em className="gold-text not-italic">Visa</em></SectionTitle>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground font-light">
              An official government authorization enabling foreign nationals to reside, work, or study in the UAE
              for extended durations. Valid from 1 to 10 years and fully renewable — it is the gateway to financial
              services, legal employment, and full access to government infrastructure.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-[hsl(42_30%_18%)] border border-[hsl(42_30%_18%)]">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-dark-surface px-4 py-5 text-center">
                  <div className="font-display text-[2rem] font-semibold leading-none gold-text">{value}</div>
                  <div className="text-[.68rem] tracking-[.18em] uppercase text-muted-foreground mt-2">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESIDENCY PATHWAYS ───────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Residency Pathways" />
        <SectionTitle>Visa <em className="gold-text not-italic">categories</em> in the UAE</SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
          A diverse portfolio of pathways designed for every professional and personal objective.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(42_30%_18%)] border border-[hsl(42_30%_18%)]">
          {pathways.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-dark-surface hover:bg-dark-elevated transition-colors duration-300 p-9 overflow-hidden"
            >
              {/* Gold bottom bar on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }}
              />
              <div className="font-display text-[3rem] font-light leading-none opacity-10 gold-text mb-4">{p.num}</div>
              <div className="w-[38px] h-[38px] rounded-[4px] bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-display text-[1.35rem] font-semibold mb-3">{p.title}</h3>
              <p className="text-[0.8rem] text-muted-foreground leading-[1.75]">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-[0.4rem]">
                {p.tags.map((t) => (
                  <span key={t} className="text-[.7rem] px-[.65rem] py-[.3rem] border border-[hsl(42_30%_18%)] text-muted-foreground rounded-[2px]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── GOLDEN VISA FEATURE ──────────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)] py-24 overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative corner-accent p-3"
          >
            <img
              src={goldenImg}
              alt="UAE Golden Visa"
              className="w-full h-[460px] object-cover brightness-[0.82] saturate-110"
              loading="lazy"
            />
            {/* Fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-surface hidden lg:block" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-dark-elevated/90 border border-[hsl(42_30%_18%)] px-6 py-4">
              <div className="font-display gold-text text-[1.8rem] font-semibold leading-none">⭐ Golden</div>
              <div className="text-[.65rem] tracking-[.2em] uppercase text-muted-foreground mt-1">Flagship Visa Programme</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow label="Featured" />
            <SectionTitle>The UAE <em className="gold-text not-italic">Golden Visa</em></SectionTitle>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground font-light">
              A flagship long-term residency initiative — valid up to 10 years — engineered to attract high-net-worth
              individuals, investors, and exceptional talent from across the globe.
            </p>
            <ul className="mt-7 flex flex-col gap-3 list-none p-0">
              {goldenBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <Dot />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ──────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Application Process" />
        <SectionTitle>From <em className="gold-text not-italic">application</em> to approval</SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-16">
          A structured five-step pathway ensuring compliance at every stage.
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-[21px] left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(to right, transparent, hsl(42 30% 18%), hsl(42 65% 52%), hsl(42 30% 18%), transparent)" }}
          />
          {processSteps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center px-2"
            >
              <div className="w-[42px] h-[42px] rounded-full border border-[hsl(42_30%_18%)] bg-dark-surface mx-auto mb-5 relative z-10 flex items-center justify-center font-display text-sm font-semibold text-primary transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary">
                {s.num}
              </div>
              <h3 className="font-display text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-[.75rem] text-muted-foreground leading-[1.65]">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DOCUMENTS ────────────────────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow label="Documentation" />
            <SectionTitle>Required <em className="gold-text not-italic">Documents</em></SectionTitle>
            <p className="mt-3 text-sm text-muted-foreground leading-[1.8] font-light mb-7">
              A structured checklist to ensure a smooth and compliant application submission.
            </p>
            <div className="flex flex-col gap-1">
              {documents.map((doc, i) => (
                <div
                  key={doc}
                  className="flex items-center gap-3 text-[.83rem] text-foreground/75 px-3 py-[.65rem] border border-transparent rounded-[2px] hover:border-[hsl(42_30%_18%)] hover:bg-dark-elevated transition-all duration-200"
                >
                  <span className="font-display text-[.9rem] text-primary/50 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {doc}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative corner-accent p-3 lg:sticky lg:top-32"
          >
            <img
              src={docsImg}
              alt="Document preparation"
              className="w-full h-[400px] object-cover brightness-[0.8] saturate-110"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHY UAE ──────────────────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Why the UAE" />
        <SectionTitle>Built for <em className="gold-text not-italic">ambition</em></SectionTitle>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(42_30%_18%)] border border-[hsl(42_30%_18%)]">
          {whyUAE.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-dark-surface hover:bg-dark-elevated transition-colors duration-300 p-8"
            >
              <div className="w-[36px] h-[36px] rounded-[4px] bg-primary/10 border border-primary/25 flex items-center justify-center mb-4">
                {w.icon}
              </div>
              <h3 className="font-display text-[1.15rem] font-semibold mb-2">{w.title}</h3>
              <p className="text-[.8rem] text-muted-foreground leading-[1.7]">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[hsl(0_0%_6%)] to-[hsl(0_0%_10%)] border-t border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1]">
              Ready to make the <em className="gold-text not-italic">UAE your home?</em>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-[460px] leading-[1.75]">
              Speak with a Legal Expertise Group specialist. 12+ years of proven immigration excellence, now at your service.
            </p>
          </div>
          <Button asChild className="flex-shrink-0 group" style={{
            background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
            color: "hsl(0 0% 4%)",
            boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.5)",
          }}>
            <Link to="/contact" className="flex items-center gap-2 px-7 py-4">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default UAERelocation;