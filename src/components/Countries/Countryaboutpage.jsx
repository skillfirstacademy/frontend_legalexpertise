import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight, Check, ChevronDown, ChevronUp,
  Shield, TrendingUp, Globe, Briefcase, Star, Users,
} from "lucide-react";


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


const CountryAboutPage = ({ image, data }) => {
  const navigate = useNavigate();
  const [activeVisa, setActiveVisa] = useState(0);

  const hasVisaTypes = data?.visaTypes?.length > 0;
  const hasStats = data?.stats?.length > 0;
  const hasHighlights = data?.highlights?.length > 0;
  const hasWorkSection = hasVisaTypes || !!data?.workSectionTitle || !!data?.workSectionIntro;

  const active = hasVisaTypes ? data.visaTypes[activeVisa] : null;

  const goldBtn = {
    background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
    color: "hsl(0 0% 4%)",
    boxShadow: "0 15px 50px -15px hsl(42 65% 52% / 0.6), inset 0 1px 0 0 rgba(255,255,255,0.2)",
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-between"
          >
            <div>
              <Eyebrow label={data?.country} />
              <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-foreground">
                {data?.heroTagline?.split(data?.country).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <em className="gold-text not-italic">{data?.country}</em>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </h1>

              <p className="mt-5 text-sm text-muted-foreground max-w-[520px] leading-[1.9] font-light">
                {data?.heroDescription}
              </p>

              {data?.heroParagraph && (
                <p className="mt-3 text-sm text-muted-foreground max-w-[520px] leading-[1.9] font-light">
                  {data.heroParagraph}
                </p>
              )}
            </div>

            {/* Stats row — only when data provided */}
            {hasStats && (
              <div className="mt-10 flex gap-4 flex-wrap">
                {data.stats.map((s) => (
                  <div
                    key={s.label}
                    className="px-5 py-3 rounded-xl"
                    style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.35)" }}
                  >
                    <p className="font-display text-xl font-semibold gold-text">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Highlight pills — only when data provided */}
            {hasHighlights && (
              <div className="mt-8 flex gap-3 flex-wrap">
                {data.highlights.map((h) => (
                  <div
                    key={h?.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs text-foreground/75"
                    style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.2)" }}
                  >
                    {h?.icon}
                    {h?.label}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            {/* Corner decorators */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-2xl pointer-events-none z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl pointer-events-none z-10" />

            <div className="relative rounded-2xl overflow-hidden group h-full min-h-[400px]">
              {image ? (
                <img
                  src={image}
                  alt={data?.country}
                  className="w-full h-full object-cover brightness-[0.82] saturate-110 group-hover:brightness-[0.95] group-hover:scale-[1.02] transition-all duration-700"
                />
              ) : (
                <div
                  className="w-full h-full min-h-[400px] flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(42 30% 10%), hsl(42 20% 14%))" }}
                >
                  <Globe className="w-20 h-20 text-primary/20" />
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/70 via-transparent to-transparent" />

              {/* Country badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-dark-surface/95 backdrop-blur border border-primary/40 rounded-xl px-5 py-4">
                  <p className="text-[10px] tracking-widest uppercase text-primary/60 mb-1">Destination</p>
                  <p className="font-display text-lg font-semibold gold-text">{data?.country}</p>
                  <p className="text-xs text-muted-foreground mt-1">{data?.heroTagline}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WORK OPPORTUNITIES — hidden entirely when no visa/section data ── */}
      {hasWorkSection && (
        <section className="border-y border-[hsl(42_30%_18%)] bg-dark-surface">
          <div className="max-w-[1120px] mx-auto px-6 py-20">

            {/* Section header */}
            {(data?.workSectionTitle || data?.workSectionIntro) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <Eyebrow label="Visa Programs" />
                {data?.workSectionTitle && (
                  <SectionTitle>{data.workSectionTitle}</SectionTitle>
                )}
                {data?.workSectionIntro && (
                  <p className="mt-4 text-sm text-muted-foreground max-w-[620px] leading-[1.85]">
                    {data.workSectionIntro}
                  </p>
                )}
              </motion.div>
            )}

            {/* Tab switcher + panel — only when visaTypes exist */}
            {hasVisaTypes && (
              <>
                <div className="flex gap-3 mb-8 flex-wrap">
                  {data.visaTypes.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVisa(i)}
                      className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                      style={
                        activeVisa === i
                          ? goldBtn
                          : { boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.3)", color: "hsl(45 80% 70%)" }
                      }
                    >
                      {v.tag}
                      <span className="ml-2 text-[10px] opacity-60">{v.label}</span>
                    </button>
                  ))}
                </div>

                {/* Visa panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVisa}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6"
                  >
                    {/* Main card */}
                    <div
                      className="relative rounded-2xl overflow-hidden p-8"
                      style={{ boxShadow: "inset 0 0 0 1.5px hsl(45 80% 70%)" }}
                    >
                      {/* Gold top bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ background: "linear-gradient(90deg, hsl(45 80% 70%), transparent)" }}
                      />

                      <span className="text-[3.5rem] font-display font-light gold-text opacity-10 leading-none">
                        {String(activeVisa + 1).padStart(2, "0")}
                      </span>

                      <h3 className="font-display text-[1.4rem] font-semibold text-foreground mt-1">{active.title}</h3>
                      <p className="text-xs tracking-widest uppercase text-primary/60 mt-1">{active.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-[1.85] mt-5 max-w-[560px]">
                        {active.description}
                      </p>

                      {/* Benefits */}
                      {active.benefits?.length > 0 && (
                        <div className="mt-8">
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                            Key Benefits
                          </p>
                          <div className="space-y-2.5">
                            {active.benefits.map((b, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-start gap-3 text-sm text-foreground/75"
                              >
                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                {b}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Eligible for sidebar */}
                    <div
                      className="rounded-2xl p-7 flex flex-col justify-between"
                      style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.3)" }}
                    >
                      {active.eligibleFor?.length > 0 && (
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                            Eligible For
                          </p>
                          <div className="space-y-3">
                            {active.eligibleFor.map((role, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.07 }}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                                style={{ boxShadow: "inset 0 0 0 1px hsl(45 80% 70% / 0.2)" }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {role}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      <motion.button
                        onClick={() => navigate("/contact")}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                        style={goldBtn}
                      >
                        Apply for {active.tag}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            )}
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden p-10 sm:p-14 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(69,39,160,0.1) 0%, rgba(45,80,120,0.05) 50%, rgba(69,39,160,0.05) 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <Eyebrow label="Ready to Apply" />
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.2]">
                Start Your <em className="gold-text not-italic">{data?.country} Career</em> Today
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-[520px] leading-[1.9]">
                Whether you're a skilled professional, fresher, or exploring short-term opportunities,{" "}
                {data?.country} offers flexible pathways to work and grow internationally.
              </p>
              <div className="mt-6 flex items-center gap-6 flex-wrap text-xs text-muted-foreground">
                {["Visa Expert", "Fast Processing", "Full Support"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold whitespace-nowrap group"
              style={goldBtn}
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CountryAboutPage;