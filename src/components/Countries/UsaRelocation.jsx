import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Users, Briefcase, GraduationCap, Home, TrendingUp, BookOpen, Globe, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentVisaImg from "@/assets/usa-student-visa.png";
import touristVisaImg from "@/assets/usa-tourist-visa.jpg";

const visa_categories = [
  {
    num: "01",
    title: "Student / Study Visa",
    body: "Elevate your academic journey with Receptive Immigration, your trusted partner in securing a study visa for the United States. Discover limitless opportunities and access world-class education with our expert guidance and personalized support.",
    tags: ["Full-Time Study", "Academic Excellence", "1–4+ years"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    eligibility: [
      "Valid Passport: Ensure your passport remains valid for at least six months beyond your intended date of entry to the United States. An expired passport may result in visa rejection, so renewal should be completed if necessary.",
      "Completed Visa Application Form: Submit a fully completed and accurate visa application form as part of the process.",
    ],
  },
  {
    num: "02",
    title: "Tourist Visa",
    body: "Begin your journey of exploration with Receptive Immigration's tourist visa services for the United States. We simplify the application process, allowing you to focus on creating memorable experiences in this diverse and welcoming destination.",
    tags: ["Tourism", "Family visits", "Up to 6 months"],
    icon: (
      <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    eligibility: [
      "Valid Passport: Ensure your passport is valid for the required duration as per visa guidelines.",
    ],
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

const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const USARelocation = () => {
  const navigate = useNavigate();
  const [expandedVisa, setExpandedVisa] = useState(0);

  const goldBtn = {
    background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
    color: "hsl(0 0% 4%)",
  };

  return (
    <>
      {/* VISA CATEGORIES — Two sections with images */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="mb-14">
          <Eyebrow label="USA Immigration" />
          <SectionTitle>Visa <em className="gold-text not-italic">Types</em> for the USA</SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground max-w-[500px] leading-[1.75]">
            Multiple pathways to study, explore, and build your future in the United States.
          </p>
        </div>

        {/* STUDENT VISA — Left content, right image */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
        >
          <div className="order-2 lg:order-1">
            <div
              className="relative bg-dark-surface rounded-lg overflow-hidden"
              style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: "linear-gradient(90deg, hsl(45 80% 70%), hsl(38 60% 38%))" }}
              />
              <div className="absolute top-4 right-4 font-display text-[2.2rem] font-light leading-none opacity-[0.07] gold-text select-none">
                01
              </div>

              <div className="p-7">
                <div className="w-[36px] h-[36px] rounded-[3px] bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                  <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="font-display text-[1.3rem] font-semibold mb-3 text-foreground">{visa_categories[0].title}</h3>
                <p className="text-[0.9rem] text-muted-foreground leading-[1.75] mb-6">{visa_categories[0].body}</p>

                <div className="flex flex-wrap gap-[0.35rem] mb-6">
                  {visa_categories[0].tags.map((t) => (
                    <span key={t} className="text-[.68rem] px-[.6rem] py-[.28rem] rounded-full border border-[hsl(42_30%_22%)] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer"
                  onClick={() => setExpandedVisa(expandedVisa === 0 ? -1 : 0)}
                  style={{ color: "hsl(45 80% 70%)" }}
                >
                  {expandedVisa === 0 ? "Hide Details" : "View Eligibility"}
                  {expandedVisa === 0 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>

                {/* Eligibility Section */}
                {expandedVisa === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-6 mt-6 border-t border-[hsl(42_30%_22%)]"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-4 gold-text">Eligibility Requirements</h4>
                    <ul className="space-y-3">
                      {visa_categories[0].eligibility.map((req, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <span className="w-[5px] h-[5px] rounded-full bg-primary" />
                          </span>
                          <span>{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-3 -left-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" />
            <img
              src={studentVisaImg}
              alt="USA Student Visa"
              className="w-full h-[420px] object-cover rounded-sm brightness-[0.82] saturate-110"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 bg-dark-surface/95 border border-[hsl(42_30%_22%)] px-5 py-3 rounded-sm">
              <div className="font-display gold-text text-[1.6rem] font-semibold leading-none">🎓</div>
              <div className="text-[.62rem] tracking-[.2em] uppercase text-muted-foreground mt-1">Education Pathway</div>
            </div>
          </div>
        </motion.div>

        {/* TOURIST VISA — Left image, right content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" />
            <img
              src={touristVisaImg}
              alt="USA Tourist Visa"
              className="w-full h-[420px] object-cover rounded-sm brightness-[0.82] saturate-110"
              loading="lazy"
            />
            <div className="absolute bottom-5 right-5 bg-dark-surface/95 border border-[hsl(42_30%_22%)] px-5 py-3 rounded-sm">
              <div className="font-display gold-text text-[1.6rem] font-semibold leading-none">✈️</div>
              <div className="text-[.62rem] tracking-[.2em] uppercase text-muted-foreground mt-1">Tourism Journey</div>
            </div>
          </div>

          <div>
            <div
              className="relative bg-dark-surface rounded-lg overflow-hidden"
              style={{ boxShadow: "inset 0 0 0 1px hsl(42 30% 18%)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: "linear-gradient(90deg, hsl(45 80% 70%), hsl(38 60% 38%))" }}
              />
              <div className="absolute top-4 right-4 font-display text-[2.2rem] font-light leading-none opacity-[0.07] gold-text select-none">
                02
              </div>

              <div className="p-7">
                <div className="w-[36px] h-[36px] rounded-[3px] bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                  <svg className="w-[17px] h-[17px] stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="font-display text-[1.3rem] font-semibold mb-3 text-foreground">{visa_categories[1].title}</h3>
                <p className="text-[0.9rem] text-muted-foreground leading-[1.75] mb-6">{visa_categories[1].body}</p>

                <div className="flex flex-wrap gap-[0.35rem] mb-6">
                  {visa_categories[1].tags.map((t) => (
                    <span key={t} className="text-[.68rem] px-[.6rem] py-[.28rem] rounded-full border border-[hsl(42_30%_22%)] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer"
                  onClick={() => setExpandedVisa(expandedVisa === 1 ? -1 : 1)}
                  style={{ color: "hsl(45 80% 70%)" }}
                >
                  {expandedVisa === 1 ? "Hide Details" : "View Eligibility"}
                  {expandedVisa === 1 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>

                {/* Eligibility Section */}
                {expandedVisa === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-6 mt-6 border-t border-[hsl(42_30%_22%)]"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-4 gold-text">Eligibility Requirements</h4>
                    <ul className="space-y-3">
                      {visa_categories[1].eligibility.map((req, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <span className="w-[5px] h-[5px] rounded-full bg-primary" />
                          </span>
                          <span>{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[hsl(0_0%_6%)] to-[hsl(0_0%_10%)] border-t border-[hsl(42_30%_18%)]">
        <div className="max-w-[1120px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GoldLine />
              <span className="text-[10px] tracking-[0.38em] uppercase text-primary font-medium">Get Started</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1]">
              Ready to start your <em className="gold-text not-italic">USA journey?</em>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-[460px] leading-[1.75]">
              Connect with our USA visa experts for personalized guidance tailored to your goals and situation.
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

export default USARelocation;