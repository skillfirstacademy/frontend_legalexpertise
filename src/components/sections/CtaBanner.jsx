import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const CtaBanner = () => (
  <section className="relative py-24 bg-background overflow-hidden">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-lg overflow-hidden border border-primary/30 corner-accent p-1"
      >
        <div className="relative bg-gradient-to-br from-dark-elevated via-dark-surface to-background p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />

          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gradient-gold" />
              <span className="text-xs tracking-[0.35em] uppercase text-primary font-medium">Ready to begin?</span>
              <span className="h-px w-8 bg-gradient-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream max-w-3xl mx-auto">
              Let's build your <span className="gold-text italic">global future</span> together.
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/70 max-w-xl mx-auto">
              Book a free 30-minute consultation with our senior immigration counsel today.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold group h-12 px-8">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/40 text-cream hover:bg-primary/10 hover:text-primary h-12 px-8 bg-background/30 backdrop-blur-sm">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
