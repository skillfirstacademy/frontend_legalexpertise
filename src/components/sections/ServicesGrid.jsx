import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Home, Scale, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/data/site";

import imgStudy from "@/assets/service-study.jpg";
import imgWork from "@/assets/service-work.jpg";
import imgRes from "@/assets/service-residency.jpg";
import imgLegal from "@/assets/service-legal.jpg";

const iconMap = { GraduationCap, Briefcase, Home, Scale };
const imageMap = { study: imgStudy, work: imgWork, residency: imgRes, legal: imgLegal };

const ServicesGrid = ({ withHeading = true }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container-narrow relative">
        {withHeading && (
          <SectionHeading
            eyebrow="What we do"
            title={<>Immigration Advisory <span className="gold-text italic">Services</span></>}
            description="Expert guidance for study visas, work permits, and permanent residency to fulfill your global aspirations — backed by 15+ years of legal expertise."
          />
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <Link
                  to="/services"
                  className="block relative h-full rounded-lg overflow-hidden border border-border hover:border-primary/50 bg-card transition-all duration-500 hover:shadow-gold"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imageMap[service.image]}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-md bg-background/80 backdrop-blur-md border border-primary/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 backdrop-blur-md border border-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium">
                      Learn more
                      <span className="h-px w-8 bg-primary group-hover:w-12 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
