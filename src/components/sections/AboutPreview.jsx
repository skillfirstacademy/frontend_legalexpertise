import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-globe.jpg";

const points = [
  "Government-licensed immigration consultants",
  "98% visa approval rate over 10,000+ cases",
  "Personal case manager for every client",
  "End-to-end legal & post-landing support",
];

const AboutPreview = () => (
  <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
    <div style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem", width: "100%" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative corner-accent p-2 sm:p-3">
            <div className="relative overflow-hidden rounded-md">
              <img
                src={aboutImg}
                alt="Golden globe representing global immigration reach"
                loading="lazy"
                className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary/10" />
            </div>
          </div>

          {/* Floating badge - Responsive sizing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 lg:-right-12 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center text-background"
            style={{
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
              boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.4)",
            }}
          >
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">15+</div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-1">Years</div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase">Of Trust</div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span 
              className="h-px w-6 sm:w-8" 
              style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }}
            />
            <span className="text-xs sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-primary font-medium">About Us</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Leading immigration advisory <span className="gold-text italic">firm in India</span>
          </h2>
          
          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Specialising in personalised solutions for study visas, work permits,
            and permanent residency. We combine deep legal expertise with a
            human touch — guiding every applicant through the most complex
            global immigration pathways.
          </p>

          <ul className="mt-6 sm:mt-7 md:mt-8 space-y-2 sm:space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/85"
              >
                <span className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0 flex-shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                </span>
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>

          <Button 
            asChild 
            className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 group h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base"
            style={{
              background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
              color: "hsl(0 0% 4%)",
              boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.4)",
            }}
          >
            <Link to="/about" className="flex items-center gap-1 sm:gap-2">
              <span>Learn More About Us</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPreview;