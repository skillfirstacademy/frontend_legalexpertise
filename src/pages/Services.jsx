import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Home, Scale, Check, ArrowRight } from "lucide-react";
import Seo from "@/components/common/Seo";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/button";
import { services, processSteps } from "@/data/site";
import handshakeImg from "@/assets/services-handshake.jpg";

import imgStudy from "@/assets/service-study.jpg";
import imgWork from "@/assets/service-work.jpg";
import imgRes from "@/assets/service-residency.jpg";
import imgLegal from "@/assets/service-legal.jpg";

const iconMap = { GraduationCap, Briefcase, Home, Scale };
const imageMap = { study: imgStudy, work: imgWork, residency: imgRes, legal: imgLegal };

const Services = () => {
  return (
    <>
      <Seo
        title="Immigration Services — Study, Work & PR Visas"
        description="Explore our full suite of immigration services: study visas, work permits, permanent residency, and legal advisory across 50+ countries."
        path="/services"
      />

      <PageHero
        eyebrow="Our Services"
        title={<>Immigration <span className="gold-text italic">Services</span></>}
        description="Expert guidance for study visas, work permits, residency solutions, and complex legal matters — all under one trusted roof."
        image={handshakeImg}
        breadcrumb="Services"
      />

      {/* Services list — alternating layout */}
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        <div style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}>
          <div className="space-y-24 lg:space-y-32">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const reverse = i % 2 === 1;
              return (
                <div
                  key={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="relative corner-accent p-3"
                  >
                    <img
                      src={imageMap[service.image]}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-[420px] object-cover rounded-md"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                        0{i + 1} / 0{services.length}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl leading-[1.05]">{service.title}</h3>
                    <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="mt-8 group" style={{
                      background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                      color: "hsl(0 0% 4%)",
                      boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.4)",
                    }}>
                      <Link to="/contact" className="flex items-center">
                        Enquire Now
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 lg:py-32 bg-dark-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem", position: "relative" }}>
          <SectionHeading
            eyebrow="Our Process"
            title={<>From consultation to <span className="gold-text italic">landing</span></>}
            description="A four-step pathway designed to make your immigration journey transparent, efficient, and stress-free."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-500">
                  <div className="font-display text-6xl gold-text opacity-30 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-px bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default Services;