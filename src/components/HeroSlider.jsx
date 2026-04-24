import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slideHeroHook from "@/assets/slide-hero-hook.jpg";
import slideContentCreation from "@/assets/slide-content-creation.jpg";
import slideSocialGrowth from "@/assets/slide-social-growth.jpg";
import slidePodcastPr from "@/assets/slide-podcast-pr.jpg";
import slideCloser from "@/assets/slide-closer.jpg";

const slides = [
  {
    image: slideHeroHook,
    title: "The Fame Buzz",
    subtitle: "actually do?",
    isHook: true,
  },
  {
    image: slideContentCreation,
    number: "01",
    label: "CONTENT CREATION",
    title: "Content Creation",
    items: [
      { text: "Cinematic shoots", desc: "Premium visuals that stop the scroll" },
      { text: "High-quality edits", desc: "Polished post-production for every frame" },
      { text: "Reels that retain attention", desc: "Hook-driven content built to perform" },
    ],
  },
  {
    image: slideSocialGrowth,
    number: "02",
    label: "SOCIAL MEDIA GROWTH",
    title: "Social Media Growth",
    items: [
      { text: "Strategy", desc: "Data-backed plans tailored to your brand" },
      { text: "Consistency", desc: "Reliable output that builds momentum" },
      { text: "Brand positioning", desc: "Stand out in a crowded market" },
    ],
  },
  {
    image: slidePodcastPr,
    number: "03",
    label: "PODCASTS + PR",
    title: "Podcasts + PR",
    items: [
      { text: "Authority building", desc: "Position yourself as an industry leader" },
      { text: "Visibility", desc: "Get seen by the right audiences" },
      { text: "Trust creation", desc: "Earn credibility that converts" },
    ],
  },
  {
    image: slideCloser,
    title: "We build brands",
    isCloser: true,
    closerLine1: "We don't just chase trends.",
    closerLine2: "We build brands",
    closerHighlight: "that last.",
  },
];

const DiamondDivider = () => (
  <div className="flex items-center gap-3 my-5">
    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
    <div className="h-px flex-1 max-w-40 bg-primary/60" />
    <div className="w-3 h-3 rotate-45 bg-primary" />
    <div className="h-px flex-1 max-w-24 bg-primary/60" />
    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
  </div>
);

const HookContent = () => (
  <div className="text-center mx-auto">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-muted-foreground text-lg md:text-xl italic font-serif"
    >
      What does
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.6 }}
      className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-primary my-3"
    >
      The Fame Buzz
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-cream text-xl md:text-2xl italic font-serif"
    >
      actually do?
    </motion.p>
    <DiamondDivider />
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-muted-foreground text-sm tracking-[0.2em] font-sans"
    >
      Branding &nbsp;•&nbsp; Content &nbsp;•&nbsp; Growth &nbsp;•&nbsp; PR
    </motion.p>
  </div>
);

const ServiceContent = ({ slide }) => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="w-20 h-20 rounded-full border-2 border-primary bg-dark-surface flex items-center justify-center mb-6"
    >
      <span className="text-3xl font-serif font-bold text-primary">
        {slide.number}
      </span>
    </motion.div>

    <h2 className="text-xs md:text-sm tracking-[0.35em] font-sans font-bold text-foreground uppercase mb-1">
      {slide.label}
    </h2>

    <DiamondDivider />

    <div className="space-y-4 mt-6">
      {slide.items?.map((item, i) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className="flex items-start gap-4 bg-dark-elevated/60 backdrop-blur-sm border border-border rounded-lg p-4"
        >
          <div className="w-3 h-3 rotate-45 bg-primary mt-1.5 shrink-0" />
          <div>
            <p className="text-lg md:text-xl font-serif text-cream">
              {item.text}
            </p>
            <p className="text-sm text-muted-foreground italic font-sans mt-0.5">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

const CloserContent = ({ slide }) => (
  <div className="text-center mx-auto">
    <DiamondDivider />
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-xl md:text-2xl text-muted-foreground italic font-serif"
    >
      {slide.closerLine1}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-cream mt-4"
    >
      {slide.closerLine2}
    </motion.h2>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="block text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-primary italic"
    >
      {slide.closerHighlight}
    </motion.span>
    <DiamondDivider />
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="text-primary font-sans font-bold text-sm tracking-[0.4em] uppercase mt-4"
    >
      The Fame Buzz
    </motion.p>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="text-muted-foreground text-xs tracking-[0.2em] font-sans mt-2"
    >
      Content &nbsp;•&nbsp; Growth &nbsp;•&nbsp; Podcasts &nbsp;•&nbsp; PR
    </motion.p>
  </div>
);

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Image */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1280}
            height={960}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>
      </AnimatePresence>

      {/* Corner Accents */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-primary z-20" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-primary/40 z-20" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-primary/40 z-20" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-primary z-20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-2xl"
            >
              {slide.isHook && <HookContent />}
              {slide.items && <ServiceContent slide={slide} />}
              {slide.isCloser && <CloserContent slide={slide} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-primary/30 bg-background/40 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-primary/30 bg-background/40 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Progress Bar */}
        <div className="h-px bg-border">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            key={current}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>

        <div className="flex items-center justify-between px-8 md:px-16 py-4">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-sans tracking-widest">
            <span className="text-primary font-bold">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground/40">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>

          {/* Brand */}
          <p className="hidden md:block text-xs tracking-[0.3em] text-muted-foreground font-sans uppercase">
            The Fame Buzz
          </p>
        </div>
      </div>
    </section>
  );
}