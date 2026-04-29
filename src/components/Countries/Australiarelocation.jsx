import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, Briefcase, Users, TrendingUp, Shield, Clock, Zap, Award, MapPin } from "lucide-react";
import img1 from '../../assets/australia1.jpg'
import img2 from '../../assets/australia2.jpg'
import img3 from '../../assets/australia3.jpg'

const visa_programs = [
  {
    id: "186",
    code: "186",
    title: "Employer Nomination Scheme",
    subtitle: "Your Permanent Gateway",
    tagline: "Permanent Residency",
    description: "A permanent residency visa for skilled workers nominated by an approved Australian employer. Three distinct streams tailored to your situation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    icon: Briefcase,
    topStats: [
      { label: "Visa Type", value: "Permanent" },
      { label: "Duration", value: "Indefinite" },
      { label: "Family", value: "Included" }
    ],
    streams: [
      { name: "Direct Entry", desc: "New to Australia or brief work history" },
      { name: "Temp Residence Transition", desc: "482/457 holders with 3+ years" },
      { name: "Labour Agreement", desc: "Formal labour agreement sponsorship" }
    ],
    requirements: [
      "Age: Under 45 years",
      "English: IELTS 6.0 each band",
      "Experience: 3+ years relevant",
      "Skills Assessment: Positive result",
      "Health & Character: Must satisfy",
      "Employer Nomination: Within 6 months"
    ],
    benefits: [
      "Permanent residency for family",
      "Freedom to work indefinitely",
      "Medicare access & social benefits",
      "Path to citizenship",
      "5-year travel freedom",
      "Sponsor family members"
    ],
    color: "from-amber-500/20 to-orange-500/10"
  },
  {
    id: "482",
    code: "482",
    title: "Temporary Skill Shortage",
    subtitle: "Work & Progress",
    tagline: "Gateway to PR",
    description: "Skilled temporary visa allowing work in Australia. After 3 years, transition to permanent residency. The bridge to your future.",
    image: img2,
    icon: TrendingUp,
    topStats: [
      { label: "Visa Type", value: "Temporary" },
      { label: "Duration", value: "2-4 Years" },
      { label: "PR Path", value: "After 3yrs" }
    ],
    streams: [
      { name: "Short-Term", desc: "Up to 2 years for skilled roles" },
      { name: "Medium-Term", desc: "Up to 4 years in-demand occupations" },
      { name: "Labour Agreement", desc: "Formal labour agreements" }
    ],
    requirements: [
      "Age: No restriction",
      "English: IELTS 5.0 minimum",
      "Experience: 2+ years relevant",
      "Job Offer: From approved employer",
      "Occupation: On skilled list",
      "Health & Character: Must satisfy"
    ],
    benefits: [
      "Legal work authorization",
      "AUD $65,000-70,000 annual",
      "11% superannuation",
      "Family sponsorship",
      "Gateway to PR",
      "Valuable local experience"
    ],
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "400",
    code: "400",
    title: "Temporary Work (Short Stay)",
    subtitle: "Quick Specialized Work",
    tagline: "3-6 Months",
    description: "Short-term visa for highly specialized work. Perfect for contractors and specialists unable to be filled locally. Flexible and fast-tracked.",
    image: img3,
    icon: Zap,
    topStats: [
      { label: "Visa Type", value: "Short-Term" },
      { label: "Duration", value: "3-6 Months" },
      { label: "Salary", value: "$25-27/hr" }
    ],
    streams: [
      { name: "Specialist Work", desc: "Professional specialized assignments" },
      { name: "Event Participation", desc: "Australian event participation" },
      { name: "Contractual Work", desc: "Short-term contract obligations" }
    ],
    requirements: [
      "Age: 18+ years",
      "English: Basic speaking skills",
      "Experience: 2+ years work",
      "Specialization: Required",
      "Health & Character: Must satisfy",
      "Job Offer: From employer"
    ],
    benefits: [
      "Quick processing time",
      "AUD $25-27 per hour",
      "Flexible duration",
      "Extensions available",
      "Path to Subclass 482",
      "Gateway to PR options"
    ],
    color: "from-rose-500/20 to-pink-500/10"
  },
  {
    id: "888",
    code: "888",
    title: "Business Innovation & Investment",
    subtitle: "Invest & Settle",
    tagline: "Permanent Investment",
    description: "For entrepreneurs and investors. Continue business operations permanently. Build your Australian success after 3 years on provisional visa.",
    image:img1,
    icon: Award,
    topStats: [
      { label: "Visa Type", value: "Permanent" },
      { label: "Investment", value: "$1.5M+" },
      { label: "Duration", value: "Indefinite" }
    ],
    streams: [
      { name: "Business Innovation", desc: "Business owners & entrepreneurs" },
      { name: "Investor Stream", desc: "Significant investors in AU" },
      { name: "Significant Investor", desc: "AUD $2.5M+ investors" }
    ],
    requirements: [
      "Previous Visa: Subclass 188 (3yrs)",
      "Investment: AUD $1.5M+ maintained",
      "Residency: 2+ years in Australia",
      "State Nomination: Required",
      "Health & Character: Must satisfy",
      "Compliance: Australian laws"
    ],
    benefits: [
      "Permanent residency",
      "Unlimited business operation",
      "Medicare & benefits access",
      "Path to citizenship",
      "Family sponsorship rights",
      "Full employment rights"
    ],
    color: "from-violet-500/20 to-purple-500/10"
  }
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

const Australiarelocation = () => {
  const navigate = useNavigate();
  const [expandedVisa, setExpandedVisa] = useState(0);

  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="mb-16">
          <Eyebrow label="Australian Immigration" />
          <SectionTitle>Your Path to <em className="gold-text not-italic">Australian Residency</em></SectionTitle>
          <p className="mt-4 text-sm text-muted-foreground max-w-[600px] leading-[1.85] font-light">
            Explore multiple visa pathways designed for skilled workers, entrepreneurs, and investors. Find your perfect fit and start your Australian journey.
          </p>
        </div>

        {/* VISA CARDS — Image + Content Layout */}
        <div className="space-y-8">
          {visa_programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch overflow-hidden rounded-xl border border-primary/25 hover:border-primary/50 transition-all duration-300"
                style={{
                  boxShadow: "0 10px 30px -10px hsl(45 80% 70% / 0.2)"
                }}
              >
                {/* Image Side - 2 columns */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.1 }}
                  className={`lg:col-span-2 relative overflow-hidden group/img ${idx % 2 === 1 ? 'order-2 lg:order-1' : 'order-1'}`}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[300px] lg:h-full object-cover brightness-90 saturate-110 group-hover/img:brightness-100 group-hover/img:scale-105 transition-all duration-500"
                  />
                  {/* Overlay with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${program.color} mix-blend-overlay`} />
                  
                  {/* Visa Code Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-dark-surface/90 backdrop-blur border border-primary/50">
                    <span className="font-display text-2xl font-bold text-primary">{program.code}</span>
                  </div>
                </motion.div>

                {/* Content Side - 3 columns */}
                <div className={`lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'order-1 lg:order-2' : 'order-2'}`}
                  style={{
                    background: "linear-gradient(135deg, rgba(45, 45, 45, 0.6) 0%, rgba(25, 25, 35, 0.8) 100%)"
                  }}
                >
                  {/* Header */}
                  <div>
                    <div className="inline-block mb-3 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{program.tagline}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-primary/70 font-medium mb-4">{program.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>

                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary/20">
                      {program.topStats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{stat.label}</p>
                          <p className="text-sm font-bold text-primary mt-1.5">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <motion.button
                    onClick={() => setExpandedVisa(expandedVisa === idx ? -1 : idx)}
                    whileHover={{ x: 4 }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn"
                    style={{ color: "hsl(45 80% 70%)" }}
                  >
                    {expandedVisa === idx ? "Hide Full Details" : "View Full Details"}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedVisa === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-0 border border-t-0 border-primary/25 rounded-b-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(45, 45, 45, 0.4) 0%, rgba(69, 39, 160, 0.08) 100%)"
                  }}
                >
                  <div className="p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                      {/* Streams */}
                      <div>
                        <h4 className="font-display text-sm font-semibold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                          <span className="w-2 h-2 rounded-full" style={{ background: "hsl(45 80% 70%)" }} />
                          Visa Streams
                        </h4>
                        <div className="space-y-3">
                          {program.streams.map((stream) => (
                            <div key={stream.name} className="group/stream">
                              <p className="text-sm font-semibold text-foreground group-hover/stream:text-primary transition-colors">{stream.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{stream.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="font-display text-sm font-semibold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                          <span className="w-2 h-2 rounded-full" style={{ background: "hsl(45 80% 70%)" }} />
                          Key Requirements
                        </h4>
                        <div className="space-y-2">
                          {program.requirements.map((req) => (
                            <motion.div
                              key={req}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start gap-2 text-xs text-foreground/75"
                            >
                              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-display text-sm font-semibold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                          <span className="w-2 h-2 rounded-full" style={{ background: "hsl(45 80% 70%)" }} />
                          Key Benefits
                        </h4>
                        <div className="space-y-2">
                          {program.benefits.map((benefit) => (
                            <motion.div
                              key={benefit}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start gap-2 text-xs text-foreground/75"
                            >
                              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ELIGIBILITY COMPARISON — Feature Grid */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Eyebrow label="Quick Comparison" />
          <SectionTitle>Find Your <em className="gold-text not-italic">Best Visa Match</em></SectionTitle>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visa_programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative p-6 rounded-xl border border-primary/25 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(69, 39, 160, 0.1) 0%, rgba(45, 45, 45, 0.3) 100%)"
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{
                  background: "linear-gradient(135deg, rgba(69, 39, 160, 0.3) 0%, rgba(69, 39, 160, 0.05) 100%)",
                  border: "1px solid hsl(45 80% 70% / 0.4)"
                }}
              >
                <program.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{program.code}</h3>
              <p className="text-xs text-muted-foreground mb-4">{program.subtitle}</p>

              {/* Quick Facts */}
              <div className="space-y-3 pt-4 border-t border-primary/20">
                {program.topStats.map((stat) => (
                  <div key={stat.label} className="text-xs">
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                    <p className="text-primary font-bold mt-0.5">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <motion.button
                whileHover={{ x: 4 }}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-all"
                style={{ color: "hsl(45 80% 70%)" }}
              >
                Learn More
                <ChevronRight className="w-3 h-3" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="border-y border-primary/20 py-20"
        style={{
          background: "linear-gradient(180deg, rgba(45, 45, 45, 0.5) 0%, rgba(25, 25, 35, 0.7) 100%)"
        }}
      >
        <div className="max-w-[1120px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Eyebrow label="Application Journey" />
            <SectionTitle>Your Path to <em className="gold-text not-italic">Residency in 6 Steps</em></SectionTitle>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Consultation", desc: "Discuss goals and visa options with experts" },
              { num: "02", title: "Assessment", desc: "Evaluate your eligibility and best pathway" },
              { num: "03", title: "Documentation", desc: "Prepare all required supporting documents" },
              { num: "04", title: "Skills Test", desc: "Complete skills assessment if required" },
              { num: "05", title: "Application", desc: "Submit complete application to authorities" },
              { num: "06", title: "Residency", desc: "Receive visa grant and begin your journey" }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 rounded-lg border border-primary/25 hover:border-primary/50 transition-all duration-300 group"
                style={{
                  background: "linear-gradient(135deg, rgba(69, 39, 160, 0.08) 0%, rgba(45, 45, 45, 0.2) 100%)"
                }}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-3xl font-display font-light opacity-20 text-primary">
                  {step.num}
                </div>

                {/* Circle Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 border-2 border-primary"
                  style={{ background: "rgba(69, 39, 160, 0.15)" }}
                >
                  <span className="text-sm font-bold text-primary">{step.num}</span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden p-12 lg:p-16 text-center border border-primary/25"
          style={{
            background: "linear-gradient(135deg, rgba(69, 39, 160, 0.12) 0%, rgba(45, 80, 120, 0.06) 50%, rgba(69, 39, 160, 0.06) 100%)",
            boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.35)"
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <Eyebrow label="Next Steps" />
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.2] mt-4">
              Begin Your <em className="gold-text not-italic">Australian Journey</em>
            </h2>
            <p className="mt-6 text-sm text-muted-foreground max-w-[600px] mx-auto leading-[1.9]">
              Our experienced consultants guide you through every step. Let's find the perfect visa pathway for your Australian dreams.
            </p>

            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 group border border-primary/40"
              style={{
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                color: "hsl(0 0% 4%)",
                boxShadow: "0 20px 60px -20px hsl(42 65% 52% / 0.7)",
              }}
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-xs">
              {[
                { icon: Award, label: "15+ Years" },
                { icon: Users, label: "4000+ Cases" },
                { icon: TrendingUp, label: "99% Success" }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(69, 39, 160, 0.1)",
                    border: "1px solid hsl(45 80% 70% / 0.25)"
                  }}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Australiarelocation;