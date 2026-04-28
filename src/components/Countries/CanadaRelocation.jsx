import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, FileText, Users, Briefcase, GraduationCap, Home, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import immigrationImg from "@/assets/canada-pass.png";
import expressEntryImg from "@/assets/canada-docs.png";
import workPermitImg from "@/assets/canda-overview.png";
import startupImg from "@/assets/canada-skyline.png";
import provincesImg from "@/assets/canada1.jpg";

// ── Static data ──────────────────────────────────────────────────────────────

const visa_pathways = [
  {
    num: "01",
    title: "Visitor / Tourist Visa",
    body: "Perfect for tourism, family visits, or business meetings. Valid for up to 6 months with standard processing and flexible eligibility.",
    tags: ["Up to 6 months", "Tourism", "Family visits"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M11 22H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
        <circle cx="9" cy="9" r="4" />
        <path d="M23 19v4m-2-2h4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Express Entry (FSWP)",
    body: "Federal Skilled Worker Program for professionals with 1+ years experience. Manage through comprehensive ranking system with faster processing.",
    tags: ["Skilled workers", "1+ year experience", "Fast track"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6" />
        <polyline points="15,3 21,3 21,9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Work Permit",
    body: "Legally authorized employment with closed or open permit options. Build Canadian experience as a pathway to permanent residency.",
    tags: ["Legal employment", "Closed/Open", "Residency pathway"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Startup Visa",
    body: "For innovative entrepreneurs seeking permanent residency. Establish your business with support from designated Canadian organizations.",
    tags: ["Entrepreneurs", "Innovation", "Permanent residency"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <path d="M10 12v8M14 12v8" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Provincial Nominee",
    body: "Direct pathway to residency through provincial programs (BC, Alberta, Saskatchewan). Match with employer needs in specific provinces.",
    tags: ["Provincial", "Employer-driven", "Direct pathway"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 2.2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Family Sponsorship",
    body: "Bring your spouse, children, or parents to Canada. Simplified process for established residents with proven financial stability.",
    tags: ["Spouse", "Children", "Parents"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const express_entry_programs = [
  {
    num: "01",
    name: "Federal Skilled Worker Program (FSWP)",
    requirements: [
      "Minimum 1 year continuous full-time (or equivalent part-time) skilled work experience within last 10 years",
      "Meet minimum language requirements (English or French)",
      "Valid Educational Credential Assessment (ECA) if educated outside Canada",
      "Achieve required score based on age, education, experience, language ability, and adaptability",
    ],
    ideal: "Skilled professionals with international credentials",
  },
  {
    num: "02",
    name: "Federal Skilled Trades Program (FSTP)",
    requirements: [
      "Minimum 2 years full-time skilled trade work experience within last 5 years",
      "Meet language proficiency requirements",
      "Valid job offer in skilled trade OR certificate of qualification from Canadian authority",
    ],
    ideal: "Certified tradespeople and skilled laborers",
  },
  {
    num: "03",
    name: "Canadian Experience Class (CEC)",
    requirements: [
      "At least 1 year skilled work experience in Canada within last 3 years",
      "Meet language proficiency requirements",
      "Intend to reside outside the province of Quebec",
    ],
    ideal: "International students and temporary workers with Canadian experience",
  },
];

const express_entry_benefits = [
  "Transparent Comprehensive Ranking System (CRS) evaluation",
  "Regular Invitations to Apply (ITA) rounds throughout the year",
  "Processing time of approximately 6 months",
  "Clear pathway to permanent residency",
  "Access to Canadian job market and networking",
  "Family reunification opportunities",
];

const application_documents = [
  { num: "01", doc: "Valid Passport", desc: "Must remain valid for entire stay duration with at least 2 blank pages", category: "Identity" },
  { num: "02", doc: "Visa Application Form", desc: "Accurately completed form per visa category (tourist, business, family visit)", category: "Application" },
  { num: "03", doc: "Passport-Sized Photographs", desc: "Recent photos with white background per IRCC specifications", category: "Identity" },
  { num: "04", doc: "Proof of Financial Support", desc: "Bank statements, income tax returns, or sponsorship letters", category: "Financial" },
  { num: "05", doc: "Travel Itinerary", desc: "Flight reservations, accommodation details, and travel schedule", category: "Travel" },
  { num: "06", doc: "Purpose of Visit Documentation", desc: "Invitation letter or supporting documentation outlining visit purpose", category: "Purpose" },
  { num: "07", doc: "Police Clearance Certificate", desc: "May be required depending on applicant profile", category: "Security" },
  { num: "08", doc: "Travel Insurance", desc: "Strongly recommended to cover medical and travel emergencies", category: "Insurance" },
  { num: "09", doc: "Proof of Ties to Home Country", desc: "Employment, property ownership, or family ties demonstrating intent to return", category: "Intent" },
  { num: "10", doc: "Additional Documents", desc: "Employment letters, business invitations, or educational enrollment proof", category: "Supplementary" },
];

const startup_visa_requirements = [
  "Qualifying innovative business idea",
  "Letter of Support from designated Canadian organization",
  "Up to 5 co-founders allowed",
  "Language proficiency (English or French)",
  "Sufficient settlement funds for family",
  "Minimum 1 year post-secondary education",
  "Clean criminal record",
  "Medical clearance required",
];

const startup_visa_benefits = [
  "Permanent residency for applicant and entire family",
  "Access to dedicated startup funding and grants",
  "Business mentorship and incubator support",
  "Access to Canada's thriving startup ecosystem",
  "No age restriction on applicants",
  "Connections with designated Canadian organizations",
];

const work_permit_requirements = [
  "Valid job offer from Canadian employer (if required)",
  "Compliance with selected work permit category requirements",
  "Proof of sufficient financial resources",
  "Relevant qualifications and skills",
  "Admissibility based on health and criminal background",
];

const work_permit_documents = [
  { num: "01", doc: "CV / Resume", category: "Application" },
  { num: "02", doc: "Completed Application Forms", category: "Application" },
  { num: "03", doc: "Proof of Status in Canada (if applicable)", category: "Status" },
  { num: "04", doc: "Family Member Status Documents (if applicable)", category: "Family" },
  { num: "05", doc: "Labour Market Impact Assessment (if required)", category: "LMIA" },
  { num: "06", doc: "Written Job Offer", category: "Employment" },
  { num: "07", doc: "Marriage Certificate (if applicable)", category: "Civil" },
  { num: "08", doc: "Certificate d'acceptation du Québec / CAQ (if applicable)", category: "Quebec" },
  { num: "09", doc: "Proof of Financial Means", category: "Financial" },
  { num: "10", doc: "Government Fee Payment Receipt", category: "Payment" },
  { num: "11", doc: "Recent Passport-Sized Photographs", category: "Identity" },
];

// FIXED: medical_requirements is now a clean, standalone array
const medical_requirements = [
  { requirement: "Duration of Stay", desc: "Generally not required for stays under 6 months unless specific conditions apply" },
  { requirement: "Travel / Residence History", desc: "May be required based on country of residence and specific nations visited" },
  { requirement: "Type of Job", desc: "Certain occupations (healthcare, childcare) may require medical examination" },
  { requirement: "IRCC-Approved Physician", desc: "Medical exams must be conducted by designated panel physicians only" },
  { requirement: "Upfront or After Instructions", desc: "Applicants may complete upfront medical exam or wait for official instructions from IRCC" },
];

const provincial_programs = [
  {
    name: "British Columbia Provincial Nominee Program (BC PNP)",
    province: "British Columbia",
    streams: ["Skills Immigration", "Express Entry BC", "Entrepreneur Immigration"],
    categories: ["Skilled Worker", "Healthcare Professional", "International Graduate", "Post-Graduate", "Entry-Level & Semi-Skilled"],
    eligibility: "Minimum education: 12th or higher | Minimum 2 years work experience",
    highlight: "Tech-focused pathways for professionals in high-demand sectors",
    color: "from-blue-500/10",
  },
  {
    name: "Alberta Tech Pathway Program",
    province: "Alberta",
    streams: ["Tech Professionals (Fast-Track)", "Express Entry Stream", "Direct Job Offer"],
    categories: ["Software Engineers", "IT Specialists", "Data Professionals", "Tech Roles"],
    eligibility: "Valid Alberta job offer | Current tech employment | Active Express Entry profile | Full-time minimum 12 months | Wage standards required",
    highlight: "Accelerated processing for technology sector professionals with industry mentorship and funding access",
    color: "from-amber-500/10",
  },
  {
    name: "Saskatchewan Immigrant Nominee Program (SINP)",
    province: "Saskatchewan",
    streams: ["International Skilled Worker", "Saskatchewan Experience", "Entrepreneur and Farm"],
    categories: ["Skilled Workers", "Farm Operators", "Entrepreneurs", "Agriculture Professionals"],
    eligibility: "Minimum 12th grade education | Age 21–55 | Work experience required | IELTS: Minimum 5 band",
    highlight: "Gateway to prairie opportunities with lower competition and direct pathway to residency",
    color: "from-green-500/10",
  },
  {
    name: "Canada Atlantic Immigration Program (AIP)",
    province: "Atlantic Region (NL, NS, NB, PE)",
    streams: ["Employer-Driven", "International Graduate", "Skilled Worker"],
    categories: ["Skilled Professionals", "Recent Graduates", "Entry-Level Workers", "Healthcare Workers"],
    eligibility: "Employer nomination required | Settlement plan mandatory | Direct permanent residency pathway",
    highlight: "Dedicated partnership with Atlantic provinces offering streamlined processing and provincial support",
    color: "from-teal-500/10",
  },
];

const work_permit_types = [
  {
    type: "Closed Work Permits (LMIA Required)",
    description: "Requires Labour Market Impact Assessment and job offer. Includes Temporary Foreign Worker Program, Global Talent Stream, and Quebec Facilitated LMIA.",
    icon: "lock",
    details: "Employer-specific with LMIA processing",
  },
  {
    type: "LMIA-Exempt Permits",
    description: "Job offer required but no LMIA needed. Includes International Mobility Program, CETA/NAFTA Work Permits, and Intra-Company Transfers.",
    icon: "briefcase",
    details: "Faster processing without LMIA",
  },
  {
    type: "Open Work Permits",
    description: "No job offer required. Includes Post-Graduation Work Permit, Spousal Open Work Permit, and International Experience Canada (Working Holiday).",
    icon: "unlock",
    details: "Flexible employment with any employer",
  },
];

const why_canada = [
  {
    title: "World-Class Education",
    body: "Globally recognized universities and affordable tuition rates for international students and permanent residents.",
    icon: <GraduationCap className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Universal Healthcare",
    body: "Comprehensive public healthcare system available to residents with world-class medical facilities and expertise.",
    icon: (
      <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Economic Opportunity",
    body: "Thriving job market across sectors with competitive salaries and strong professional development opportunities.",
    icon: <TrendingUp className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Safe & Stable",
    body: "Consistently ranked among the world's safest countries with strong rule of law and political stability.",
    icon: (
      <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Multicultural Society",
    body: "Diverse, inclusive communities welcoming people from 200+ countries with strong immigrant support networks.",
    icon: <Users className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Provincial Diversity",
    body: "Choose from vibrant regions: tech hubs in BC, Alberta's energy sector, maritime opportunities, or urban centers.",
    icon: <Home className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
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

const Dot = () => (
  <span className="relative flex-shrink-0 w-[18px] h-[18px] rounded-full bg-primary/10 border border-primary/35">
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-primary" />
  </span>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── Page component ────────────────────────────────────────────────────────────
const CanadaRelocation = () => {
  const [showAllDocs, setShowAllDocs] = useState(false);

  return (
    <>
      {/* ── RESIDENCY PATHWAYS ───────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Immigration Pathways" />
        <SectionTitle>Visa <em className="gold-text not-italic">categories</em> for Canada</SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
          Multiple pathways tailored to your goals — whether temporary residence, work experience, or permanent settlement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(42_30%_18%)] border border-[hsl(42_30%_18%)]">
          {visa_pathways.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-dark-surface hover:bg-dark-elevated transition-colors duration-300 p-9 overflow-hidden"
            >
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

      {/* ── EXPRESS ENTRY FEATURE ────────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)] py-24 overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative corner-accent p-3 order-2 lg:order-1"
          >
            <img
              src={expressEntryImg}
              alt="Canada Express Entry"
              className="w-full h-[460px] object-cover brightness-[0.82] saturate-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-surface hidden lg:block" />
            <div className="absolute bottom-6 right-6 bg-dark-elevated/90 border border-[hsl(42_30%_18%)] px-6 py-4">
              <div className="font-display gold-text text-[1.8rem] font-semibold leading-none">⚡ Fast</div>
              <div className="text-[.65rem] tracking-[.2em] uppercase text-muted-foreground mt-1">6 Months Processing</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <Eyebrow label="Featured Program" />
            <SectionTitle>Express Entry <em className="gold-text not-italic">(FSWP)</em></SectionTitle>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground font-light">
              Canada's primary skilled immigration pathway. A transparent, competitive system based on education,
              work experience, language proficiency, and adaptability. Candidates with strong Comprehensive Ranking
              System (CRS) scores receive Invitations to Apply (ITA) for permanent residency.
            </p>
            <ul className="mt-7 flex flex-col gap-3 list-none p-0">
              {express_entry_benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <Dot />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── EXPRESS ENTRY STREAMS DETAIL ───────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Program Streams" />
        <SectionTitle>Express Entry <em className="gold-text not-italic">Pathways</em></SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[600px] leading-[1.75] mb-12">
          Three distinct federal programs under Express Entry, each designed for different professional backgrounds and experience levels.
        </p>

        <div className="space-y-5">
          {express_entry_programs.map((program, idx) => (
            <motion.div
              key={program.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-[hsl(42_30%_18%)] rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="bg-dark-surface p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-[50px] h-[50px] rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-semibold text-primary">{program.num}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{program.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 italic">{program.ideal}</p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-3">Requirements</p>
                <ul className="space-y-2">
                  {program.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                      <CheckIcon />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WORK PERMIT TYPES ──────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Work Authorization" />
        <SectionTitle>Canadian <em className="gold-text not-italic">Work Permit</em> Options</SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
          Choose the work permit type that matches your employment situation and career goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {work_permit_types.map((wp, idx) => (
            <motion.div
              key={wp.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative bg-dark-surface border border-[hsl(42_30%_18%)] rounded-lg p-7 hover:border-primary/30 transition-colors duration-300 h-full flex flex-col">
                <div className="w-[42px] h-[42px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                  {wp.icon === "lock" && (
                    <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  )}
                  {wp.icon === "briefcase" && (
                    <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    </svg>
                  )}
                  {wp.icon === "unlock" && (
                    <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 9.2 1" />
                    </svg>
                  )}
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold mb-3 text-foreground">{wp.type}</h3>
                <p className="text-[0.82rem] text-muted-foreground leading-[1.7] mb-4 flex-1">{wp.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-[hsl(42_30%_18%)] text-xs text-primary font-medium">
                  <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
                  {wp.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WORK PERMIT REQUIREMENTS & DOCUMENTS ──────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24">
          <Eyebrow label="Work Permit Process" />
          <SectionTitle>How to Obtain a <em className="gold-text not-italic">Work Permit</em></SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[600px] leading-[1.75] mb-12">
            A systematic approach to getting authorized employment in Canada, with eligibility criteria and required documentation.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-[40px] h-[40px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                </span>
                Eligibility Requirements
              </h3>
              <div className="space-y-3">
                {work_permit_requirements.map((req, idx) => (
                  <motion.div
                    key={req}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-lg border border-[hsl(42_30%_18%)] hover:border-primary/30 hover:bg-dark-elevated transition-all duration-300"
                  >
                    <CheckIcon />
                    <span className="text-sm text-foreground/80">{req}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xs text-foreground/70 leading-relaxed">
                  <strong className="text-primary">Processing Note:</strong> International students may work part-time under study permits. Most closed permits require a job offer and LMIA. Some applicants may be exempt from LMIA or work permit requirements depending on their category.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-[40px] h-[40px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </span>
                Required Documents
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {work_permit_documents.map((doc, idx) => (
                  <motion.div
                    key={doc.doc}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="p-4 rounded-lg border border-[hsl(42_30%_18%)] hover:border-primary/30 hover:bg-dark-elevated transition-all duration-300"
                  >
                    <p className="text-xs font-semibold text-primary mb-1">{doc.num}</p>
                    <p className="text-xs text-foreground/70 leading-tight">{doc.doc}</p>
                    <p className="text-[0.65rem] text-muted-foreground mt-1">{doc.category}</p>
                  </motion.div>
                ))}
              </div>
              <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xs text-foreground/70 leading-relaxed">
                  <strong className="text-primary">Important:</strong> Exact documentation requirements vary by permit type and province. Quebec applicants may require a CAQ (Certificat d'acceptation du Québec). Ensure all documents are properly certified and in English or French.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS CHECKLIST ────────────────────────────────────────── */}
      <section id="docs" className="bg-dark-surface border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <Eyebrow label="Documentation" />
              <SectionTitle>Required <em className="gold-text not-italic">Documents</em></SectionTitle>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.8] font-light mb-8">
                Essential documentation for a complete and compliant visa application. Organization and accuracy are critical.
              </p>

              <div className="space-y-2 mb-4">
                {application_documents.slice(0, showAllDocs ? application_documents.length : 5).map((doc) => (
                  <div
                    key={doc.doc}
                    className="flex items-center gap-3 p-3 rounded-md border border-[hsl(42_30%_18%)] hover:bg-dark-elevated hover:border-primary/25 transition-all duration-200"
                  >
                    <CheckIcon />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{doc.doc}</p>
                      <p className="text-xs text-muted-foreground">{doc.desc}</p>
                    </div>
                    <span className="text-[0.65rem] px-2 py-0.5 rounded bg-primary/10 text-primary/70 flex-shrink-0">
                      {doc.category}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAllDocs(!showAllDocs)}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                  color: "hsl(0 0% 4%)",
                }}
              >
                {showAllDocs ? "Show Less" : "View All Documents"}
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${showAllDocs ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
              </button>
            </motion.div>

            {/* Right: Document grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              {application_documents.map((doc, idx) => (
                <motion.div
                  key={doc.doc}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-dark-elevated border border-[hsl(42_30%_18%)] rounded-lg p-5 text-center hover:border-primary/30 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="font-display text-2xl font-light opacity-30 gold-text mb-2 group-hover:opacity-50 transition-opacity">
                    {doc.num}
                  </div>
                  <p className="text-xs leading-tight text-muted-foreground group-hover:text-foreground/70 transition-colors">
                    {doc.doc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROVINCIAL PROGRAMS ──────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Provincial Immigration" />
        <SectionTitle>Find your <em className="gold-text not-italic">province</em></SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
          Each Canadian province offers tailored immigration pathways. Match your profile with the best fit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {provincial_programs.map((prog, idx) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-lg border border-[hsl(42_30%_18%)] bg-dark-surface hover:border-primary/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${prog.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-primary">{prog.province}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{prog.name}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-[0.7rem] uppercase tracking-wider text-primary/60 font-semibold">Streams</p>
                  {prog.streams.map((stream) => (
                    <div key={stream} className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {stream}
                    </div>
                  ))}
                </div>

                {prog.categories && (
                  <div className="space-y-2 mb-4">
                    <p className="text-[0.7rem] uppercase tracking-wider text-primary/60 font-semibold">Categories</p>
                    <div className="flex flex-wrap gap-1">
                      {prog.categories.slice(0, 3).map((cat) => (
                        <span key={cat} className="text-[0.65rem] px-2 py-1 rounded bg-primary/10 text-foreground/60">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-[hsl(42_30%_18%)] group-hover:border-primary/20 transition-colors">
                  <p className="text-[0.7rem] uppercase tracking-wider text-primary/60 font-semibold mb-2">Overview</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{prog.highlight}</p>
                  {prog.eligibility && (
                    <p className="text-[0.65rem] text-foreground/50 italic leading-snug">
                      <strong className="text-foreground/70">Eligibility:</strong> {prog.eligibility}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY CANADA ──────────────────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24">
          <Eyebrow label="Why Canada" />
          <SectionTitle>A nation of <em className="gold-text not-italic">opportunity</em></SectionTitle>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(42_30%_18%)] border border-[hsl(42_30%_18%)]">
            {why_canada.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-dark-surface hover:bg-dark-elevated transition-colors duration-300 p-8 group"
              >
                <div className="w-[40px] h-[40px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  {w.icon}
                </div>
                <h3 className="font-display text-[1.1rem] font-semibold mb-3">{w.title}</h3>
                <p className="text-[.8rem] text-muted-foreground leading-[1.7]">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDICAL & BIOMETRICS ─────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Health & Security" />
        <SectionTitle>Medical & <em className="gold-text not-italic">Biometrics</em> Requirements</SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[600px] leading-[1.75] mb-12">
          Understanding health screening and identity verification requirements for Canadian immigration applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Medical Exams */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-3 mb-5">
              <span className="w-[40px] h-[40px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6M15 11h-6" />
                </svg>
              </span>
              Medical Examination
            </h3>
            <div className="space-y-3">
              {medical_requirements.map((med, idx) => (
                <motion.div
                  key={med.requirement}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-4 rounded-lg border border-[hsl(42_30%_18%)] hover:border-primary/30 hover:bg-dark-elevated transition-all duration-300"
                >
                  <p className="text-sm font-semibold text-foreground">{med.requirement}</p>
                  <p className="text-xs text-muted-foreground mt-1">{med.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-xs text-foreground/70 leading-relaxed">
                <strong className="text-primary">Note:</strong> Medical exams must be conducted by IRCC-approved panel physicians. Applicants may complete an upfront medical exam or wait for official instructions from Immigration, Refugees and Citizenship Canada.
              </p>
            </div>
          </motion.div>

          {/* Biometrics & Police Clearance */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-3 mb-5">
              <span className="w-[40px] h-[40px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                </svg>
              </span>
              Biometrics & Security Checks
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-[hsl(42_30%_18%)] hover:border-primary/30 hover:bg-dark-elevated transition-all duration-300">
                <p className="text-sm font-semibold text-foreground">Biometrics</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Applicants outside Canada are required to submit biometrics (fingerprints and photos) after receiving official instructions from IRCC. Temporary exemptions may apply for in-Canada applicants depending on visa category.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-[hsl(42_30%_18%)] hover:border-primary/30 hover:bg-dark-elevated transition-all duration-300">
                <p className="text-sm font-semibold text-foreground">Police Clearance</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Visa officers may require police clearance certificates depending on the application type. Applicants must provide certificates from countries where they have lived for more than 6 months after the age of 18.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-[hsl(42_30%_18%)] hover:border-primary/30 hover:bg-dark-elevated transition-all duration-300">
                <p className="text-sm font-semibold text-foreground">Processing Timeline</p>
                <p className="text-xs text-muted-foreground mt-2">
                  These security and health checks are processed in parallel with your application review, typically taking 2–4 weeks depending on jurisdiction and verification requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STARTUP VISA SPOTLIGHT ──────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[hsl(0_0%_6%)] to-[hsl(0_0%_10%)] border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow label="Entrepreneurs" />
            <SectionTitle>Canada <em className="gold-text not-italic">Startup Visa</em></SectionTitle>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground font-light mb-6">
              For innovative entrepreneurs seeking permanent residency. Establish your business in Canada with support
              from designated Canadian organizations. Bring your ideas to life while securing your family's future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-3">Requirements</p>
                <div className="space-y-2">
                  {startup_visa_requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckIcon />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary/70 font-semibold mb-3">Benefits</p>
                <div className="space-y-2">
                  {startup_visa_benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Dot />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild className="group" style={{
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
              color: "hsl(0 0% 4%)",
              boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.5)",
            }}>
              <Link to="/startup" className="flex items-center gap-2 px-7 py-4">
                Learn More About Startup Visa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative corner-accent p-3"
          >
            <img
              src={startupImg}
              alt="Canada Startup Visa"
              className="w-full h-[400px] object-cover brightness-[0.8] saturate-110"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ──────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <Eyebrow label="Application Timeline" />
        <SectionTitle>Your <em className="gold-text not-italic">journey</em> to Canada</SectionTitle>
        <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-16">
          A structured pathway from eligibility assessment through final approval.
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-20 h-px bg-gradient-to-r from-transparent via-[hsl(42_30%_18%)] to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Eligibility Assessment", desc: "Evaluate profile against program requirements" },
              { step: 2, title: "Documentation Prep", desc: "Organize and prepare all required documents" },
              { step: 3, title: "Application Submission", desc: "Submit through IRCC online portal or designated channel" },
              { step: 4, title: "Processing & Decision", desc: "IRCC reviews application, conducts interviews if needed" },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-dark-surface border-2 border-[hsl(42_30%_18%)] hover:border-primary transition-colors duration-300">
                    <span className="font-display text-lg font-semibold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT & CONSULTATION ─────────────────────────────────────── */}
      <section className="bg-dark-surface border-y border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-24">
          <Eyebrow label="Our Services" />
          <SectionTitle>How we <em className="gold-text not-italic">support</em> you</SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75] mb-12">
            End-to-end guidance from initial assessment through post-landing settlement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Eligibility Assessment", icon: "check", desc: "Evaluate your profile against visa and program requirements" },
              { title: "Documentation Assistance", icon: "file", desc: "Prepare, organize, and review all required application documents" },
              { title: "Application Guidance", icon: "brief", desc: "Expert guidance in accurately completing IRCC forms and portals" },
              { title: "Interview Preparation", icon: "users", desc: "Mock interview sessions and coaching where required" },
              { title: "Tracking & Updates", icon: "trending", desc: "Continuous application monitoring with timely status updates" },
              { title: "Post-Landing Support", icon: "home", desc: "Assistance with housing, banking, healthcare, and settlement services" },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="p-6 rounded-lg border border-[hsl(42_30%_18%)] bg-dark-elevated hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-[44px] h-[44px] rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center mb-4">
                  {service.icon === "check" && <CheckIcon />}
                  {service.icon === "file" && <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />}
                  {service.icon === "brief" && <Briefcase className="w-5 h-5 text-primary" strokeWidth={1.5} />}
                  {service.icon === "users" && <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />}
                  {service.icon === "trending" && <TrendingUp className="w-5 h-5 text-primary" strokeWidth={1.5} />}
                  {service.icon === "home" && <Home className="w-5 h-5 text-primary" strokeWidth={1.5} />}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[hsl(0_0%_6%)] to-[hsl(0_0%_10%)] border-t border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1]">
              Ready to start your <em className="gold-text not-italic">Canadian journey?</em>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-[460px] leading-[1.75]">
              Connect with our immigration specialists for personalized guidance tailored to your goals and situation.
            </p>
          </div>
          <Button asChild className="flex-shrink-0 group" style={{
            background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
            color: "hsl(0 0% 4%)",
            boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.5)",
          }}>
            <Link to="/contact" className="flex items-center gap-2 px-7 py-4">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CanadaRelocation;