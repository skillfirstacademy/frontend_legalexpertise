import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Users, Briefcase, GraduationCap, Home, TrendingUp, BookOpen, Globe, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentVisaImg from "@/assets/ukstudvisa.png";
import visitorVisaImg from "@/assets/ukworkvisa.png";
import skilledWorkerImg from "@/assets/uk-skilled-worker.jpg";
import entrepreneurImg from "@/assets/uk-entr.jpg";

const visa_categories = [
  {
    num: "01",
    title: "Student / Study Visa",
    body: "Pursue world-class education at prestigious UK universities. Access advanced research facilities and a globally recognized degree with excellent career prospects.",
    tags: ["Tier 4 Sponsor", "Academic Excellence", "2–4 years"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Visitor / Tourist Visa",
    body: "Explore the UK's rich heritage, stunning landscapes, and vibrant cities. Perfect for tourism, family visits, or business meetings with flexible entry.",
    tags: ["Tourism", "Family visits", "Up to 6 months"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Skilled Worker Visa",
    body: "Work in a thriving economy as a skilled professional. Access unlimited opportunities across diverse sectors with competitive salaries and career growth.",
    tags: ["Job Offer Required", "Points-Based", "Unlimited length"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Innovator Visa",
    body: "For experienced entrepreneurs establishing innovative businesses. Build your venture in a world-leading economy with access to markets and talent.",
    tags: ["Business Innovation", "Entrepreneurs", "Permanent pathway"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Start-up Visa",
    body: "Launch your first business venture with backing from designated organisations. Perfect for innovative entrepreneurs with government-endorsed support.",
    tags: ["First-time founders", "Endorsed", "2 years initial"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Family Sponsorship",
    body: "Bring your family members to the UK. Reunite with loved ones through straightforward sponsorship pathways with proven financial stability.",
    tags: ["Spouse", "Children", "Financial proof"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const student_visa_requirements = [
  "Acceptance into a recognized UK institution with Tier 4 sponsor status",
  "Proof of English language proficiency (IELTS/TOEFL as required)",
  "Evidence of financial support for tuition and living expenses",
  "Completion of online visa application and fee payment",
  "TB test depending on nationality and country of origin",
  "Proof of maintenance funds for entire duration of study",
  "Demonstration of genuine intention to study in the UK",
];

const visitor_visa_documents = [
  { num: "01", doc: "Valid Passport", desc: "Valid for entire stay + 1 blank page for visa stamp", category: "Identity" },
  { num: "02", doc: "Visa Application Form", desc: "Accurate completion of official UK Home Office form", category: "Application" },
  { num: "03", doc: "Passport-Sized Photographs", desc: "Recent photos per UK Home Office specifications", category: "Identity" },
  { num: "04", doc: "Proof of Accommodation", desc: "Hotel bookings or invitation letters from hosts", category: "Travel" },
  { num: "05", doc: "Travel Itinerary", desc: "Detailed plan of activities and intended duration", category: "Travel" },
  { num: "06", doc: "Proof of Funds", desc: "Bank statements or financial support documents", category: "Financial" },
  { num: "07", doc: "Employment Documentation", desc: "Letters, salary slips, and employment contracts", category: "Employment" },
  { num: "08", doc: "No Objection Certificate (NOC)", desc: "Employer approval for leave of absence", category: "Employment" },
  { num: "09", doc: "Travel Insurance", desc: "Medical coverage for the entire duration of visit", category: "Insurance" },
  { num: "10", doc: "Supporting Documents", desc: "Marriage cert, birth cert for minors, etc.", category: "Supporting" },
];

const skilled_worker_tiers = [
  {
    name: "Tier 2 (General) Visa",
    description: "Skilled workers with a job offer from a licensed UK sponsor",
    requirements: ["Job offer from licensed sponsor", "Meet salary thresholds", "English language proficiency", "Maintenance funds proof"],
    duration: "3–5 years (renewable)",
  },
  {
    name: "Tier 2 (Intra-Company Transfer)",
    description: "Employees transferred to UK branch of a multinational company",
    requirements: ["Work for multinational company", "Transfer to UK branch", "Meet salary criteria", "English proficiency"],
    duration: "1–3 years based on level",
  },
  {
    name: "Tier 2 (Sportsperson) Visa",
    description: "Elite athletes and coaches endorsed by recognized governing body",
    requirements: ["Recognized sporting achievement", "Endorsement from governing body", "Work for established team", "Salary criteria met"],
    duration: "3–5 years",
  },
  {
    name: "Tier 5 (Youth Mobility Scheme)",
    description: "Young professionals aged 18–40 from eligible countries",
    requirements: ["Age 18–40", "From eligible country", "Sufficient financial resources", "Work for eligible sponsor"],
    duration: "Up to 2 years",
  },
];

const why_uk = [
  {
    title: "World-Renowned Education",
    body: "Home to Oxford, Cambridge, and 160+ internationally ranked universities offering world-class degrees.",
    icon: <BookOpen className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Global Financial Hub",
    body: "Leading economy with thriving sectors: finance, technology, healthcare, creative industries, and more.",
    icon: <TrendingUp className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Rich Cultural Heritage",
    body: "Centuries of history, museums, theatres, and iconic landmarks across England, Scotland, Wales, and Northern Ireland.",
    icon: <Globe className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Innovation & Tech",
    body: "Thriving tech hubs in London, Manchester, and Edinburgh with cutting-edge startups and research institutions.",
    icon: <Zap className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Diverse Opportunities",
    body: "Multiple visa pathways for students, professionals, entrepreneurs, and investors seeking growth and success.",
    icon: <Briefcase className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Safe & Stable",
    body: "Consistent democracy, strong legal system, and recognized as one of the world's safest developed nations.",
    icon: <Home className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
];

const entrepreneur_programs = [
  {
    title: "Innovator Visa",
    subtitle: "For Experienced Entrepreneurs",
    badge: "Experienced",
    description: "Establish an innovative business with demonstrated entrepreneurial experience. Access established networks and market opportunities in the UK.",
    features: [
      "No minimum investment required",
      "Can own and operate existing business",
      "Brings eligible family members",
      "Clear path to permanent residency",
      "Spouse can work in any UK job",
    ],
  },
  {
    title: "Start-up Visa",
    subtitle: "For First-Time Founders",
    badge: "First-Time",
    description: "Launch your first business with backing from designated UK organisations. Perfect for innovative first-time entrepreneurs.",
    features: [
      "Designated organisation endorsement required",
      "No personal investment minimum",
      "2-year initial visa period",
      "Extendable to Innovator Visa",
      "Full family sponsorship available",
    ],
  },
];

const entrepreneur_requirements = [
  "Viable and innovative business plan",
  "Sufficient financial resources to invest",
  "English language proficiency",
  "Detailed proposal addressing market opportunity",
  "Evidence of business acumen and track record",
];

const application_timeline = [
  { step: 1, title: "Assessment", desc: "Evaluate eligibility and visa category fit" },
  { step: 2, title: "Documentation", desc: "Prepare and organize all required documents" },
  { step: 3, title: "Application", desc: "Submit completed form with supporting docs" },
  { step: 4, title: "Processing", desc: "UKVI reviews application — typically 2–8 weeks" },
  { step: 5, title: "Decision", desc: "Receive decision and biometric instructions" },
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

const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const RuleHeading = ({ number, label }) => (
  <div className="flex items-center gap-5 mb-10">
    <span className="font-display text-[4rem] font-light leading-none gold-text opacity-20 select-none">{number}</span>
    <div className="flex-1 h-px bg-[hsl(42_30%_18%)]" />
    <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium">{label}</span>
  </div>
);

const UKRelocation = () => {
  const navigate = useNavigate();
  const [expandedTier, setExpandedTier] = useState(null);
  const [showAllDocs, setShowAllDocs] = useState(false);

  const goldBtn = {
    background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
    color: "hsl(0 0% 4%)",
  };

  return (
    <>
      {/* VISA CATEGORIES — diagonal-accent card strip */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="mb-14">
          <Eyebrow label="UK Immigration" />
          <SectionTitle>Visa <em className="gold-text not-italic">categories</em> for the UK</SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75]">
            Multiple pathways to study, work, and build your future in one of the world's leading nations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visa_categories.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative bg-dark-surface rounded-lg overflow-hidden hover:bg-dark-elevated transition-colors duration-300"
              style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[1px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, hsl(45 80% 70%), hsl(38 60% 38%))" }}
              />
              <div className="absolute top-4 right-4 font-display text-[2.2rem] font-light leading-none opacity-[0.07] gold-text select-none">
                {v.num}
              </div>
              <div className="p-7">
                <div className="w-[36px] h-[36px] rounded-[3px] bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-[0.8rem] text-muted-foreground leading-[1.75] mb-5">{v.body}</p>
                <div className="flex flex-wrap gap-[0.35rem]">
                  {v.tags.map((t) => (
                    <span key={t} className="text-[.68rem] px-[.6rem] py-[.28rem] rounded-full border border-[hsl(42_30%_22%)] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STUDENT VISA — full-bleed split with large rule number */}
      <section className="border-y border-[hsl(42_30%_18%)] overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 py-20">
          <RuleHeading number="01" label="Education Pathway" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <Eyebrow label="Study in the UK" />
              <SectionTitle>UK Student <em className="gold-text not-italic">Visa</em></SectionTitle>
              <p className="mt-4 text-sm leading-[1.9] text-muted-foreground font-light">
                Study at world-renowned universities offering cutting-edge research, diverse academic programs, and
                exceptional student experiences. Gain a globally recognized degree that opens doors to international
                career opportunities.
              </p>
              <ul className="mt-8 space-y-3">
                {student_visa_requirements.map((req, i) => (
                  <motion.li
                    key={req}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-[5px] h-[5px] rounded-full bg-primary" />
                    </span>
                    {req}
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/contact")}
                className="mt-8 group flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200"
                style={goldBtn}
              >
                Explore Student Visa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" />
              <img
                src={studentVisaImg}
                alt="UK Student Visa"
                className="w-full h-[420px] object-cover rounded-sm brightness-[0.82] saturate-110"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 bg-dark-surface/95 border border-[hsl(42_30%_22%)] px-5 py-3 rounded-sm">
                <div className="font-display gold-text text-[1.6rem] font-semibold leading-none">🎓 Academic</div>
                <div className="text-[.62rem] tracking-[.2em] uppercase text-muted-foreground mt-1">Excellence Pathway</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISITOR VISA DOCUMENTS — horizontal rule layout with toggle */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <RuleHeading number="02" label="Tourism & Travel" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <Eyebrow label="Visitor Visa" />
            <SectionTitle>Required <em className="gold-text not-italic">Documents</em></SectionTitle>
            <p className="mt-3 text-sm text-muted-foreground leading-[1.8] mb-8 max-w-[520px]">
              Essential documentation for a smooth UK visitor visa application, organized by category for easy reference.
            </p>

            <div className="space-y-2">
              {visitor_visa_documents.slice(0, showAllDocs ? visitor_visa_documents.length : 5).map((doc, idx) => (
                <motion.div
                  key={doc.doc}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-start gap-4 p-4 rounded-md hover:bg-dark-elevated transition-colors duration-200"
                  style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
                >
                  <span className="font-display text-[0.7rem] font-semibold text-primary/40 mt-0.5 w-6 flex-shrink-0">{doc.num}</span>
                  <CheckIcon />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{doc.doc}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{doc.desc}</p>
                  </div>
                  <span className="text-[0.63rem] px-2 py-0.5 rounded-full bg-primary/10 text-primary/60 flex-shrink-0">
                    {doc.category}
                  </span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setShowAllDocs(!showAllDocs)}
              className="mt-5 flex items-center gap-2 text-sm text-primary font-medium hover:opacity-80 transition-opacity"
            >
              {showAllDocs ? (
                <><ChevronUp className="w-4 h-4" /> Show Less</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> View All {visitor_visa_documents.length} Documents</>
              )}
            </button>
          </div>

          <div className="space-y-4 lg:sticky lg:top-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-md bg-dark-elevated"
              style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
            >
              <h3 className="font-display text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" strokeWidth={1.5} />
                Processing Times
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Standard Visitor Visa", time: "2–3 weeks" },
                  { label: "Priority Service", time: "5–10 days" },
                  { label: "Super Priority", time: "1–3 days" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{t.label}</span>
                    <span className="text-xs font-semibold text-primary">{t.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-md"
              style={{ boxShadow: "inset 0 0 0 1px hsl(42 65% 52% / 0.25)", background: "hsl(42 65% 52% / 0.04)" }}
            >
              <p className="text-xs text-foreground/70 leading-relaxed">
                <strong className="text-primary">Pro Tip:</strong> Organize documents by category for faster processing. Ensure all documents are certified, in English, and include originals or notarized copies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLED WORKER TIERS — accordion style */}
      <section className="border-y border-[hsl(42_30%_18%)] bg-dark-surface">
        <div className="max-w-[1120px] mx-auto px-6 py-20">
          <RuleHeading number="03" label="Employment" />
          <Eyebrow label="Work in the UK" />
          <SectionTitle>Skilled Worker <em className="gold-text not-italic">Tiers</em></SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
            Multiple pathways tailored to different professional backgrounds and career goals.
          </p>

          <div className="space-y-3">
            {skilled_worker_tiers.map((tier, idx) => {
              const isOpen = expandedTier === idx;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="overflow-hidden rounded-md"
                  style={{ boxShadow: isOpen ? "inset 0 0 0 1px hsl(42 65% 52% / 0.35)" : "inset 0 0 0 1px hsl(42 30% 18%)" }}
                >
                  <button
                    onClick={() => setExpandedTier(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-dark-elevated transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-lg font-semibold text-primary/40 w-6 flex-shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-base font-semibold text-foreground">{tier.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{tier.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="hidden sm:block text-xs font-semibold text-primary border border-primary/30 rounded-full px-3 py-1">
                        {tier.duration}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-primary" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 pt-1"
                    >
                      <div className="sm:hidden mb-3">
                        <span className="text-xs font-semibold text-primary border border-primary/30 rounded-full px-3 py-1">
                          {tier.duration}
                        </span>
                      </div>
                      <p className="text-xs uppercase tracking-wider text-primary/60 font-semibold mb-3 ml-10">Requirements</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-10">
                        {tier.requirements.map((req) => (
                          <div key={req} className="flex items-center gap-2 text-sm text-foreground/75">
                            <CheckIcon />
                            {req}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENTREPRENEUR VISAS — side image + cards */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <RuleHeading number="04" label="Entrepreneurship" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow label="Build Your Business" />
            <SectionTitle>Launch in <em className="gold-text not-italic">the UK</em></SectionTitle>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground font-light mb-8">
              For entrepreneurs and innovators ready to establish or expand their ventures in a world-leading economy.
              Two pathways designed for different stages of the entrepreneurial journey.
            </p>

            <div className="space-y-4 mb-8">
              {entrepreneur_programs.map((prog, idx) => (
                <motion.div
                  key={prog.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="p-6 rounded-md hover:bg-dark-elevated transition-colors duration-300"
                  style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-[0.65rem] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold tracking-wide">
                        {prog.badge}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-2">{prog.title}</h3>
                      <p className="text-xs text-muted-foreground">{prog.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{prog.description}</p>
                  <ul className="space-y-2">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-foreground/70">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("/contact")}
                    className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 group"
                    style={goldBtn}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <img
                src={entrepreneurImg}
                alt="UK Entrepreneur Visa"
                className="w-full h-[280px] object-cover rounded-sm brightness-[0.8]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-md bg-dark-elevated"
              style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
            >
              <h3 className="font-display text-sm font-semibold text-foreground mb-4">Common Requirements</h3>
              <div className="space-y-3">
                {entrepreneur_requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3 text-sm text-foreground/75">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY UK — ruled grid, no box borders, just dividers */}
      <section className="border-y border-[hsl(42_30%_18%)] bg-dark-surface">
        <div className="max-w-[1120px] mx-auto px-6 py-20">
          <Eyebrow label="Why the UK" />
          <SectionTitle>Opportunity <em className="gold-text not-italic">Awaits</em></SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-14">
            The United Kingdom offers unparalleled advantages for students, professionals, and entrepreneurs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[hsl(42_30%_18%)] gap-0">
            {why_uk.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group p-8 hover:bg-dark-elevated transition-colors duration-300"
              >
                <div className="w-[40px] h-[40px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold mb-2">{item.title}</h3>
                <p className="text-[.8rem] text-muted-foreground leading-[1.7]">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION TIMELINE — horizontal numbered flow */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <RuleHeading number="05" label="Getting Started" />
        <Eyebrow label="Application Process" />
        <SectionTitle>Your path to <em className="gold-text not-italic">approval</em></SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-14">
          A straightforward path from assessment to visa approval in five structured steps.
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute top-[28px] left-[56px] right-[56px] h-px bg-gradient-to-r from-primary/20 via-[hsl(42_30%_22%)] to-primary/20" />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {application_timeline.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-5 w-[56px] h-[56px] rounded-full bg-dark-surface border-2 border-[hsl(42_30%_22%)] flex items-center justify-center hover:border-primary/50 transition-colors duration-300 cursor-default">
                  <span className="font-display text-xl font-semibold text-primary">{item.step}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="border-y border-[hsl(42_30%_18%)] bg-dark-surface">
        <div className="max-w-[1120px] mx-auto px-6 py-20">
          <Eyebrow label="Our Support" />
          <SectionTitle>Comprehensive <em className="gold-text not-italic">Services</em></SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
            End-to-end immigration guidance for a seamless UK visa experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Visa Assessment", icon: <CheckIcon />, desc: "Evaluate eligibility and recommend best visa pathway for your profile" },
              { title: "Document Support", icon: <FileText className="w-4 h-4 text-primary" strokeWidth={1.5} />, desc: "Comprehensive help preparing and organizing all required documents" },
              { title: "Application Review", icon: <Briefcase className="w-4 h-4 text-primary" strokeWidth={1.5} />, desc: "Expert review of your application before final submission" },
              { title: "Interview Prep", icon: <Users className="w-4 h-4 text-primary" strokeWidth={1.5} />, desc: "Mock interviews and guidance for consular appointments" },
              { title: "Status Tracking", icon: <TrendingUp className="w-4 h-4 text-primary" strokeWidth={1.5} />, desc: "Monitor application progress with timely status updates" },
              { title: "Post-Arrival Help", icon: <Home className="w-4 h-4 text-primary" strokeWidth={1.5} />, desc: "Support with accommodation, banking, healthcare, and settlement" },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-md hover:bg-dark-elevated transition-colors duration-300"
                style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
              >
                <div className="w-[36px] h-[36px] rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[hsl(0_0%_6%)] to-[hsl(0_0%_10%)] border-t border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GoldLine />
              <span className="text-[10px] tracking-[0.38em] uppercase text-primary font-medium">Get Started</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1]">
              Ready to start your <em className="gold-text not-italic">UK journey?</em>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-[460px] leading-[1.75]">
              Connect with our UK visa experts for personalized guidance tailored to your goals and situation.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="flex-shrink-0 group flex items-center gap-2 px-7 py-4 rounded-md text-sm font-semibold transition-all duration-200"
            style={{ ...goldBtn, boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.5)" }}
          >
            Schedule Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </>
  );
};

export default UKRelocation;