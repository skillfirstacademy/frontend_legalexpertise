import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageHero = ({ eyebrow, title, description, image, breadcrumb }) => (
  <section className="relative overflow-hidden min-h-screen flex items-center">
    {/* Background image with gradient overlay */}
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt="" 
        className="w-full h-full object-cover animate-ken-burns" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
    </div>

    {/* Content wrapper */}
    <div className="relative z-10 w-full" style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}>
      {/* Vertical spacing responsive */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Breadcrumb Navigation */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-xs md:text-sm tracking-wider uppercase text-cream/70 mb-4 sm:mb-5 md:mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">{breadcrumb}</span>
          </motion.nav>
        )}

        {/* Eyebrow label */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <span 
              className="h-px w-6 sm:w-8" 
              style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }} 
            />
            <span className="text-xs sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-primary font-medium">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* Main title - Responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] sm:leading-[1.0] text-cream max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Description text - Responsive sizing */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 text-sm sm:text-base md:text-lg text-cream/80 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;