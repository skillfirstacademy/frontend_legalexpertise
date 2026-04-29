import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, ChevronUp, Briefcase, Users, TrendingUp, Shield, Clock, Euro, Zap, Award, MapPin, DollarSign } from "lucide-react";
import skilledWorkerImg from "@/assets/europe-skilled-worker.jpg";
import unskilledWorkerImg from "@/assets/europe-unskilled-worker.jpg";

const job_categories = [
  {
    num: "01",
    title: "Skilled Professionals",
    subtitle: "High-Demand Expertise",
    body: "Skilled professionals can explore opportunities across sectors such as technology, engineering, finance, healthcare, and more, where specific qualifications and experience are typically required.",
    tags: ["Technology", "Engineering", "Finance", "Healthcare"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 11h6M9 15h6M9 7h6" />
      </svg>
    ),
    eligibility: [
      "Age Criteria: 22 to 55 years",
      "Minimum Qualification: Graduation or Diploma",
      "Experience: Minimum 2 years within the last 5 years",
    ],
    benefits: [
      { label: "Contract Duration", value: "3 years" },
      { label: "Working Hours", value: "8 to 10 hours/day" },
      { label: "Salary Package", value: "€2,500 to €4,000/month" },
      { label: "Facilities", value: "Accommodation, Food, Transport, Medical Insurance" },
    ],
  },
  {
    num: "02",
    title: "Semi-Skilled & Unskilled Workers",
    subtitle: "Diverse Opportunities",
    body: "Employment opportunities in hospitality, retail, manufacturing, agriculture, and construction, offering options for individuals without advanced educational qualifications.",
    tags: ["Hospitality", "Retail", "Manufacturing", "Agriculture"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    eligibility: [
      "Age Criteria: 18 to 65 years",
      "Minimum Qualification: 10th Grade",
      "Experience: Not mandatory",
    ],
    benefits: [
      { label: "Contract Duration", value: "3 years" },
      { label: "Working Hours", value: "8 to 10 hours/day" },
      { label: "Salary Package", value: "€1,500 to €2,500/month" },
      { label: "Facilities", value: "Accommodation, Food, Transport, Medical Insurance" },
    ],
  },
];

const why_choose = [
  {
    title: "Expertise and Experience",
    body: "Our team possesses in-depth knowledge of EU immigration laws and regulations. We provide accurate guidance and strategic advice to improve your chances of visa approval.",
    icon: <Briefcase className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Reliability and Trustworthiness",
    body: "RGC has a proven track record of successfully assisting clients with visa applications. You can rely on our team to manage your application with professionalism.",
    icon: <Shield className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Comprehensive Services",
    body: "We offer end-to-end services tailored to your requirements, including consultation, documentation, and application submission.",
    icon: <TrendingUp className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Personalized Assistance",
    body: "Our team provides dedicated support throughout your application journey, addressing your concerns and queries promptly.",
    icon: <Users className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Compliance and Accuracy",
    body: "We ensure that your application fully complies with all relevant regulations, minimizing the risk of errors or delays.",
    icon: <Check className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
  {
    title: "Timely Updates",
    body: "We keep you informed at every stage of the application process, providing regular updates on progress and requirements.",
    icon: <Clock className="w-5 h-5 stroke-primary" strokeWidth={1.5} />,
  },
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

const EuropeRelocation = () => {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState(0);

  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="mb-16">
          <Eyebrow label="Europe Job Market" />
          <SectionTitle>Who is Eligible for <em className="gold-text not-italic">Jobs in Europe?</em></SectionTitle>
          <p className="mt-4 text-sm text-muted-foreground max-w-[600px] leading-[1.85] font-light">
            Europe's job market accommodates a wide range of skills and expertise, making it an attractive destination for diverse job seekers. Explore opportunities across multiple sectors where your qualifications match market demands.
          </p>
        </div>

        {/* JOB CATEGORIES — Completely New Design with Image + Content */}
        <div className="space-y-20">
          {/* SKILLED PROFESSIONALS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch">
              {/* Image - 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2 relative overflow-hidden"
              >
                <img
                  src={skilledWorkerImg}
                  alt="Skilled Professionals in Europe"
                  className="w-full h-[400px] lg:h-full object-cover brightness-[0.95] saturate-125"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-transparent to-transparent" />
              </motion.div>

              {/* Content - 3 columns */}
              <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-between"
                style={{
                  background: "linear-gradient(135deg, rgba(69, 39, 160, 0.15) 0%, rgba(45, 45, 45, 0.6) 100%)",
                  borderLeft: "3px solid hsl(45 80% 70%)"
                }}
              >
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/15 border border-primary/40">
                    <div className="w-2 h-2 rounded-full" style={{ background: "hsl(45 80% 70%)" }} />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Category 01</span>
                  </div>

                  <h3 className="font-display text-3xl font-semibold text-foreground mt-4 mb-2">{job_categories[0].title}</h3>
                  <p className="text-sm text-primary/80 font-medium">{job_categories[0].subtitle}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed mt-5">{job_categories[0].body}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {job_categories[0].tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-dark-surface/80 border border-primary/25 text-primary/70 font-medium uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setExpandedJob(expandedJob === 0 ? -1 : 0)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
                  style={{ color: "hsl(45 80% 70%)" }}
                >
                  {expandedJob === 0 ? (
                    <>
                      <ChevronUp className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                      View Details
                    </>
                  )}
                </button>
              </div>
            </div>

            {expandedJob === 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-10 lg:p-14"
                style={{
                  background: "linear-gradient(135deg, rgba(45, 45, 45, 0.4) 0%, rgba(69, 39, 160, 0.08) 100%)",
                  borderTop: "2px solid hsl(45 80% 70%)"
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-primary/40" />
                      Eligibility Requirements
                    </h4>
                    <div className="space-y-4">
                      {job_categories[0].eligibility.map((req, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80">{req}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-primary/40" />
                      Benefits Package
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {job_categories[0].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-4 rounded-lg bg-dark-surface/60 border-l-3 border-primary/50"
                        >
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{benefit.label}</p>
                          <p className="text-lg font-bold text-primary mt-2">{benefit.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* SEMI-SKILLED & UNSKILLED WORKERS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch">
              <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-between order-2 lg:order-1"
                style={{
                  background: "linear-gradient(135deg, rgba(45, 45, 45, 0.6) 0%, rgba(69, 39, 160, 0.15) 100%)",
                  borderRight: "3px solid hsl(45 80% 70%)"
                }}
              >
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/15 border border-primary/40">
                    <div className="w-2 h-2 rounded-full" style={{ background: "hsl(45 80% 70%)" }} />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Category 02</span>
                  </div>

                  <h3 className="font-display text-3xl font-semibold text-foreground mt-4 mb-2">{job_categories[1].title}</h3>
                  <p className="text-sm text-primary/80 font-medium">{job_categories[1].subtitle}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed mt-5">{job_categories[1].body}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {job_categories[1].tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-dark-surface/80 border border-primary/25 text-primary/70 font-medium uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setExpandedJob(expandedJob === 1 ? -1 : 1)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
                  style={{ color: "hsl(45 80% 70%)" }}
                >
                  {expandedJob === 1 ? (
                    <>
                      <ChevronUp className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                      View Details
                    </>
                  )}
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2 relative overflow-hidden order-1 lg:order-2"
              >
                <img
                  src={unskilledWorkerImg}
                  alt="Semi-Skilled Workers in Europe"
                  className="w-full h-[400px] lg:h-full object-cover brightness-[0.95] saturate-125"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-dark-surface via-transparent to-transparent" />
              </motion.div>
            </div>

            {expandedJob === 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-10 lg:p-14"
                style={{
                  background: "linear-gradient(135deg, rgba(69, 39, 160, 0.08) 0%, rgba(45, 45, 45, 0.4) 100%)",
                  borderTop: "2px solid hsl(45 80% 70%)"
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-primary/40" />
                      Eligibility Requirements
                    </h4>
                    <div className="space-y-4">
                      {job_categories[1].eligibility.map((req, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80">{req}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-primary/40" />
                      Benefits Package
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {job_categories[1].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-4 rounded-lg bg-dark-surface/60 border-l-3 border-primary/50"
                        >
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{benefit.label}</p>
                          <p className="text-lg font-bold text-primary mt-2">{benefit.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION — Timeline Style */}
      <section className="border-y border-primary/20 py-24"
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
            className="text-center mb-20"
          >
            <Eyebrow label="Why Choose RGC" />
            <SectionTitle>Why Receptive <em className="gold-text not-italic">Immigration?</em></SectionTitle>
            <p className="mt-4 text-sm text-muted-foreground max-w-[650px] mx-auto leading-[1.85]">
              Selecting Receptive Immigration, a trusted immigration consultancy for EU work permits, simplifies your application and enhances your chances of success.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 -translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
              {why_choose.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative p-8 rounded-lg transition-all duration-300 group ${idx % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}
                  style={{
                    background: "linear-gradient(135deg, rgba(69, 39, 160, 0.1) 0%, rgba(45, 45, 45, 0.3) 100%)",
                    border: "1px solid hsl(45 80% 70% / 0.25)"
                  }}
                >
                  <div className="hidden lg:block absolute top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-surface border-3 border-primary"
                    style={{ left: idx % 2 === 0 ? 'calc(100% + 8px)' : 'calc(0% - 8px)' }}
                  />

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        background: "linear-gradient(135deg, rgba(69, 39, 160, 0.3) 0%, rgba(69, 39, 160, 0.05) 100%)",
                        border: "1px solid hsl(45 80% 70% / 0.4)"
                      }}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION & CTA — Split Content */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Eyebrow label="Next Steps" />
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.2] mt-4">
              Ready to start your <em className="gold-text not-italic">European work journey?</em>
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-[1.9]">
              Partnering with RGC simplifies the application process, enhances your chances of success, and provides professional support to navigate European immigration complexities with confidence.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Expert Guidance from Immigration Specialists",
                "Proven Success Track Record with Clients",
                "Complete Support Throughout Application Process"
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(45 80% 70%)" }}>
                    <Check className="w-3 h-3" style={{ color: "hsl(0 0% 4%)" }} />
                  </div>
                  <span className="text-sm text-foreground/80">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 group border border-primary/50"
              style={{
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                color: "hsl(0 0% 4%)",
                boxShadow: "0 20px 60px -20px hsl(42 65% 52% / 0.8)",
              }}
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "500+", label: "Successful Cases" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Client Support" },
              { number: "12", label: "Years Experience" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                className="p-6 rounded-lg text-center transition-all duration-300 group hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(69, 39, 160, 0.15) 0%, rgba(45, 45, 45, 0.4) 100%)",
                  border: "2px solid hsl(45 80% 70% / 0.3)",
                  boxShadow: "inset 0 0 20px hsl(45 80% 70% / 0.1)"
                }}
              >
                <p className="font-display text-3xl font-bold text-primary group-hover:text-yellow-300 transition-colors">{stat.number}</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default EuropeRelocation;