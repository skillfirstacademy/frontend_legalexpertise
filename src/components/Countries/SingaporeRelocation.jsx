import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight, Check, Briefcase, TrendingUp, Globe, MapPin,
  DollarSign, Users, Zap, Award, Building2, Heart, ChevronRight,
} from "lucide-react";
import singaporeEPassImg from "@/assets/singapore-epass.png";
import singaporeLifestyleImg from "@/assets/singapore-lifestyle.png";

/* ─── Data ─────────────────────────────────────────────────────── */

const permit_types = [
  {
    id: 0,
    num: "01",
    tag: "E Pass",
    title: "Singapore Employment Pass",
    subtitle: "For Professionals & Executives",
    description:
      "A work visa designed for foreign professionals, managers, executives, and business owners who wish to live and work in Singapore.",
    image: singaporeEPassImg,
    imageAlt: "Singapore Employment Pass",
    overlayIcon: <Award className="w-5 h-5 text-primary" />,
    overlayTitle: "Professional Gateway",
    overlayDesc: "Perfect for professionals seeking career advancement in global business hubs",
    benefits: [
      { label: "Validity", value: "Up to 3 years" },
      { label: "Renewal", value: "Renewable options" },
      { label: "Family", value: "Subject to eligibility" },
      { label: "Economy", value: "Global opportunities" },
    ],
    highlights: [
      "Access to high-quality job opportunities",
      "Tied to employer (job change requires new application)",
      "Work in multicultural environment",
      "Strategic Asia-Pacific gateway",
    ],
  },
  {
    id: 1,
    num: "02",
    tag: "Temp Permit",
    title: "Temporary Employment Permit",
    subtitle: "For Short-Term Opportunities",
    description:
      "Suitable for individuals who want to work in Singapore for a shorter duration or explore opportunities before committing long-term.",
    image: singaporeLifestyleImg,
    imageAlt: "Singapore Lifestyle",
    overlayIcon: <Zap className="w-5 h-5 text-primary" />,
    overlayTitle: "Quick Start",
    overlayDesc: "Flexible option to explore opportunities and test career suitability",
    benefits: [
      { label: "Flexibility", value: "Limited period" },
      { label: "Processing", value: "Quick & easy" },
      { label: "Commitment", value: "No long-term tie" },
      { label: "Opportunity", value: "Can lead to permanent" },
    ],
    highlights: [
      "Flexibility without long-term commitment",
      "International exposure in Asian market",
      "Usually faster processing",
      "Helps decide long-term relocation plans",
    ],
  },
];

const eligibility_data = [
  {
    title: "General Requirements",
    items: ["Age: 21 years and above"],
  },
  {
    title: "E Pass (Professionals)",
    items: [
      "Professional qualification/degree",
      "Relevant work experience",
      "Employer sponsorship required",
    ],
  },
  {
    title: "S Pass (Skilled Workers)",
    items: [
      "Minimum qualification: Graduation",
      "Prior work experience (varies by role)",
      "Employer sponsorship",
    ],
  },
  {
    title: "Work Permit (Semi-skilled)",
    items: [
      "No minimum qualification required",
      "Employer sponsorship required",
      "Subject to quota",
    ],
  },
];

const work_benefits = [
  { num: "01", title: "Strong Economy", description: "Highly stable financial system with global business opportunities and world-class infrastructure.", icon: <TrendingUp className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "lg" },
  { num: "02", title: "High Standard of Living", description: "World-class infrastructure, healthcare, education, and public services.", icon: <Building2 className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "sm" },
  { num: "03", title: "Career Growth", description: "Excellent opportunities for skill development and professional advancement.", icon: <Briefcase className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "sm" },
  { num: "04", title: "Competitive Salaries", description: "Attractive packages across technology, finance, healthcare, and other premium industries.", icon: <DollarSign className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "sm" },
  { num: "05", title: "Multicultural Environment", description: "Diverse and inclusive workplace with colleagues from around the world.", icon: <Users className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "lg" },
  { num: "06", title: "Strategic Location", description: "Gateway to Asia-Pacific. Access to emerging economies and regional business hubs.", icon: <MapPin className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "sm" },
  { num: "07", title: "Work-Life Balance", description: "Strong emphasis on employee well-being and quality of life.", icon: <Heart className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "sm" },
  { num: "08", title: "Global Business Hub", description: "Home to Fortune 500 companies, fintech startups, and leading tech firms.", icon: <Globe className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, size: "lg" },
];


const GoldLine = () => (
  <span
    className="block w-7 h-px flex-shrink-0"
    style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }}
  />
);

const Eyebrow = ({ label }) => (
  <div className="flex items-center gap-3 mb-5">
    <GoldLine />
    <span className="text-[10px] tracking-[0.38em] uppercase text-primary font-medium">{label}</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.1] text-foreground">
    {children}
  </h2>
);

const SingaporeRelocation = () => {
  const navigate = useNavigate();
  const [activePermit, setActivePermit] = useState(0);

  const active = permit_types[activePermit];

  return (
    <>
      {/* ── HERO / INTRO ──────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-16">
          <div>
            <Eyebrow label="Singapore Employment" />
            <SectionTitle>
              Singapore <em className="gold-text not-italic">Work Permits</em>
            </SectionTitle>
            <p className="mt-4 text-sm text-muted-foreground max-w-[580px] leading-[1.85] font-light">
              Singapore is globally recognized for its strong business infrastructure, strategic geographic
              location, and stable robust economy — a top destination for careers in finance, technology, and healthcare.
            </p>
          </div>
          {/* Stat pills */}
          <div className="flex gap-3 flex-wrap lg:flex-nowrap">
            {[
              { value: "3 Yrs", label: "Max Validity" },
              { value: "S$5k+", label: "Min Salary" },
              { value: "4 Types", label: "Permit Classes" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-xl text-center"
                style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.35)" }}
              >
                <p className="font-display text-xl font-semibold gold-text">{s.value}</p>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PERMIT TABS ─────────────────────────────────────────── */}
        {/* Tab row */}
        <div className="flex gap-3 mb-8">
          {permit_types.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePermit(p.id)}
              className="relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              style={
                activePermit === p.id
                  ? {
                      background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                      color: "hsl(0 0% 4%)",
                    }
                  : { boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.3)", color: "hsl(45 80% 70%)" }
              }
            >
              <span className="opacity-50 text-xs mr-2">{p.num}</span>
              {p.tag}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePermit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-stretch"
          >
            {/* Left: content */}
            <div
              className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between"
              style={{ boxShadow: "inset 0 0 0 1.5px hsl(45 80% 70%)" }}
            >
              {/* Top gold bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, hsl(45 80% 70%), transparent)" }}
              />

              <div>
                <span className="text-[3.5rem] font-display font-light gold-text opacity-15 leading-none">
                  {active.num}
                </span>

                <h3 className="font-display text-[1.5rem] font-semibold text-foreground mt-2">
                  {active.title}
                </h3>
                <p className="text-xs text-primary/70 tracking-widest uppercase mt-1">{active.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-[1.85] mt-5 mb-8">{active.description}</p>

                <div className="space-y-2.5 mb-8">
                  {active.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-foreground/75">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits grid */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Key Details
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {active.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg border border-primary/15 hover:border-primary/30 transition-colors"
                    >
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{b.label}</p>
                      <p className="text-sm font-semibold text-primary mt-1">{b.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative rounded-2xl overflow-hidden group min-h-[340px]">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="w-full h-full object-cover brightness-[0.82] saturate-110 group-hover:brightness-[0.95] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/85 via-transparent to-transparent" />

              {/* Corner deco */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-primary/25 rounded-xl pointer-events-none" />
              <div className="absolute bottom-20 left-4 w-10 h-10 border border-primary/20 rounded-lg pointer-events-none" />

              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-dark-surface/95 backdrop-blur border border-primary/40 rounded-xl p-4">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {active.overlayIcon}
                    <span className="font-display gold-text text-sm font-semibold">{active.overlayTitle}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{active.overlayDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── ELIGIBILITY ─────────────────────────────────────────────── */}
      <section className="border-y border-[hsl(42_30%_18%)] bg-dark-surface">
        <div className="max-w-[1120px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14 items-start">
            {/* Sticky label col */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24"
            >
              <Eyebrow label="Eligibility" />
              <SectionTitle>
                Who Can <em className="gold-text not-italic">Apply?</em>
              </SectionTitle>
              <p className="mt-4 text-sm text-muted-foreground leading-[1.85]">
                Singapore offers multiple work permit categories tailored to different skill levels and qualifications.
              </p>

              {/* Vertical accent */}
              <div
                className="mt-10 w-px h-32 rounded-full"
                style={{ background: "linear-gradient(to bottom, hsl(45 80% 70% / 0.6), transparent)" }}
              />
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {eligibility_data.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.09 }}
                  className="group p-6 rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.3)" }}
                >
                  {/* index number bg */}
                  <span className="absolute top-3 right-4 font-display text-[4rem] font-light gold-text opacity-[0.06] leading-none select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-sm font-semibold gold-text mb-4">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/75 group-hover:text-foreground/90 transition-colors">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <Eyebrow label="Singapore Advantage" />
          <SectionTitle>
            Benefits of <em className="gold-text not-italic">Working in Singapore</em>
          </SectionTitle>
          <p className="mt-4 text-sm text-muted-foreground max-w-[600px] leading-[1.85]">
            Discover why Singapore is the preferred destination for ambitious professionals seeking career growth and lifestyle excellence.
          </p>
        </motion.div>

        {/* Alternating list layout */}
        <div className="space-y-3">
          {work_benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex items-center gap-6 px-7 py-5 rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-default"
              style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.25)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Number */}
              <span className="font-display text-[0.7rem] text-primary/40 tracking-widest w-8 flex-shrink-0">
                {benefit.num}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 transition-all">
                {benefit.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:gold-text transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{benefit.description}</p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[hsl(42_30%_18%)] bg-gradient-to-br from-dark-surface via-dark-elevated/30 to-dark-surface">
        <div className="max-w-[1120px] mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center relative rounded-2xl overflow-hidden p-10 sm:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(69,39,160,0.1) 0%, rgba(45,80,120,0.05) 50%, rgba(69,39,160,0.05) 100%)",
            //   boxShadow: "inset 0 0 0 2px hsl(45 80% 70% / 0.4), 0 10px 40px -10px hsl(45 80% 70% / 0.2)",
            }}
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <Eyebrow label="Ready to Apply" />
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold leading-[1.2]">
                Start Your <em className="gold-text not-italic">Singapore Career</em> Today
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-[520px] leading-[1.9]">
                Whether you're a skilled professional, fresher, or exploring short-term opportunities,
                Singapore offers flexible pathways to work and grow.
              </p>

              {/* Trust badges */}
              <div className="mt-6 flex items-center gap-6 flex-wrap text-xs text-muted-foreground">
                {["Visa Expert", "Fast Processing", "Full Support"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 "
              style={{
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                color: "hsl(0 0% 4%)",
                // boxShadow: "0 15px 50px -15px hsl(42 65% 52% / 0.6), inset 0 1px 0 0 rgba(255,255,255,0.2)",
              }}
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SingaporeRelocation;