import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/data/site";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-dark-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem", width: "100%", position: "relative" }}>
        <SectionHeading
          eyebrow="Client Voices"
          title={<>Stories of <span className="gold-text italic">Global Success</span></>}
          description="Real journeys from clients who trusted us with their immigration dreams."
        />

        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-16 max-w-4xl mx-auto px-4 sm:px-0">
          <div className="relative rounded-lg border border-primary/20 bg-card/60 backdrop-blur-md p-6 sm:p-8 md:p-12 lg:p-14 corner-accent">
            <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="font-display text-lg sm:text-xl md:text-3xl lg:text-3xl leading-snug text-cream italic">
                  "{t.quote}"
                </blockquote>

                <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-8 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-display text-lg sm:text-xl text-background flex-shrink-0"
                    style={{ 
                      background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" 
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm sm:text-base">{t.name}</div>
                    <div className="text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 border-t border-primary/15 pt-4 sm:pt-6">
              <div className="flex gap-1.5 sm:gap-2 order-2 sm:order-1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1 sm:h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 sm:w-8 bg-primary" : "w-1 sm:w-1.5 bg-primary/30 hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-1.5 sm:gap-2 order-1 sm:order-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/40 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/40 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;