import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { navLinks, services, siteConfig } from "@/data/site";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

// TikTok icon (lucide doesn't ship a tiktok glyph)
const TikTok = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
  { Icon: FaFacebookF, href: siteConfig.socials.facebook, label: "Facebook" },
  { Icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { Icon: FaTwitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { Icon: TikTok, href: siteConfig.socials.tiktok, label: "TikTok" },
];

  return (
    <footer className="relative bg-dark-surface border-t border-primary/20 overflow-hidden">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial opacity-40 pointer-events-none" />

      <div className="container-narrow relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-md bg-gradient-gold flex items-center justify-center font-display font-bold text-xl text-background">
                L
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg">
                  Legal <span className="gold-text">Expertise</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Immigration
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Expert legal guidance for your global dreams. Trusted advisory
              for study visas, work permits, and permanent residency.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-base tracking-wider uppercase text-primary mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-base tracking-wider uppercase text-primary mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display text-base tracking-wider uppercase text-primary mb-5">
              Connect
            </h3>
            <ul className="space-y-4 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{siteConfig.address.line1}, {siteConfig.address.line2}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wide">
            Crafted with precision for global aspirations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
