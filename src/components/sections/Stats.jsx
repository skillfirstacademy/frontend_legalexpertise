import { motion } from "framer-motion";
import { stats } from "@/data/site";

const Stats = () => (
  <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-surface border-y border-primary/15 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial opacity-30" />
    <div style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem", width: "100%", position: "relative" }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl gold-text group-hover:scale-110 transition-transform duration-300 inline-block">
              {stat.value}
            </div>
            <div className="mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-xs md:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-muted-foreground">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;