import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-passport.jpg";

const quickServices = [
  { Icon: GraduationCap, label: "Study Visas" },
  { Icon: Briefcase, label: "Work Permits" },
  { Icon: HomeIcon, label: "Permanent Residency" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Open Indian passport with global visa stamps"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Decorative grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />

      <div className="container-narrow relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-medium">
              India's Trusted Immigration Advisory
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-4xl xl:text-5xl leading-[0.95] text-cream"
          >
            Your Legal Pathway to{" "}
            <span className="gold-text italic">Global Opportunities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg md:text-lg text-cream/80 max-w-2xl leading-relaxed"
          >
            Expert immigration solutions for your global dreams — study visas,
            work permits, and permanent residency, delivered with the precision
            of seasoned legal counsel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold group h-12 px-8">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/40 text-cream hover:bg-primary/10 hover:text-primary h-12 px-8 bg-background/30 backdrop-blur-sm">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Quick service chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-3"
          >
            {quickServices.map(({ Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-primary/25 bg-background/40 backdrop-blur-md hover:border-primary/60 hover:bg-primary/5 transition-all"
              >
                <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-cream/90">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
      </motion.div>
    </section>
  );
};

export default Hero;
