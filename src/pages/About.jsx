import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe2, Clock, Target, Heart, Award, Sparkles } from "lucide-react";
import Seo from "@/components/common/Seo";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import aboutImg from "@/assets/about-globe.jpg";
import handshakeImg from "@/assets/services-handshake.jpg";
import { whyChoose } from "@/data/site";

const iconMap = { ShieldCheck, Users, Globe2, Clock };

const values = [
  { Icon: Target, title: "Precision", text: "Every application meticulously crafted to maximise approval odds." },
  { Icon: Heart, title: "Empathy", text: "We treat your dreams as our own and your family as ours." },
  { Icon: Award, title: "Excellence", text: "15+ years of award-winning legal advisory across continents." },
  { Icon: Sparkles, title: "Integrity", text: "Transparent fees, honest counsel, no false promises — ever." },
];

const containerStyle = {
  maxWidth: "72rem",
  margin: "0 auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  width: "100%",
};

const About = () => {
  return (
    <>
      <Seo
        title="About Us — India's Trusted Immigration Advisors"
        description="Meet Legal Expertise Group, India's leading immigration advisory firm with 15+ years of legal expertise across 50+ countries."
        path="/about"
      />

      <PageHero
        eyebrow="About Us"
        title={<>Your Trusted Immigration <span className="gold-text italic">Advisory Partner</span></>}
        description="Legal Expertise Group is India's leading immigration advisory firm — specialising in study visas, work permits, and permanent residency with personalised solutions for your global aspirations."
        image={aboutImg}
        breadcrumb="About"
      />

      <Stats />

      {/* Mission */}
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        <div style={containerStyle}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="h-px w-8" 
                  style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }} 
                />
                <span className="text-xs tracking-[0.35em] uppercase text-primary font-medium">Our Mission</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
                Achieve Your <span className="gold-text italic">Global Dreams</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                With a proven track record across 50+ countries, we navigate the
                complex world of legal immigration — providing tailored
                solutions to help you study, work, and settle abroad seamlessly
                and efficiently. From the first consultation to your post-landing
                support, we stay by your side at every milestone.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Our multilingual team of licensed consultants, lawyers, and
                former visa officers ensures that no detail of your case is
                overlooked. We don't just file paperwork — we build futures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative corner-accent p-3"
            >
              <img
                src={handshakeImg}
                alt="Professional handshake — partnership for global aspirations"
                loading="lazy"
                className="w-full h-[480px] object-cover rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32 bg-dark-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div style={containerStyle}>
          <SectionHeading
            eyebrow="What we stand for"
            title={<>Our Core <span className="gold-text italic">Values</span></>}
            description="Four principles that shape every conversation, every application, and every success story."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative py-24 lg:py-32 bg-background">
        <div style={containerStyle}>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>The <span className="gold-text italic">LEG</span> advantage</>}
            description="What sets us apart from any other immigration consultancy in India."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default About;