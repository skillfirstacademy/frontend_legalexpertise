import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import Seo from "@/components/common/Seo";
import PageHero from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { siteConfig } from "@/data/site";
import skylineImg from "@/assets/contact-skyline.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out your name, email, and message.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Thank you! Our team will contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setSubmitting(false);
  };

  const channels = [
    {
      Icon: Phone,
      label: "Connect",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      Icon: Mail,
      label: "Inquire",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      Icon: MapPin,
      label: "Location",
      value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    },
    { Icon: Clock, label: "Hours", value: siteConfig.hours },
  ];

  return (
    <>
      <Seo
        title="Contact Us — Free Immigration Consultation"
        description="Reach out to Legal Expertise Group for personalised immigration solutions and expert guidance on study visas, work permits, and residency matters."
        path="/contact"
      />

      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Contact{" "}
            <span className="gold-text italic">Legal Expertise Group</span>
          </>
        }
        description="Reach out for personalised immigration solutions and expert guidance on study visas, work permits, and residency matters. We're here to help."
        image={skylineImg}
        breadcrumb="Contact"
      />

      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        <div style={{ maxWidth: "72rem", margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="relative corner-accent p-1">
                <form
                  onSubmit={onSubmit}
                  className="bg-card border border-border rounded-md p-8 md:p-10 space-y-6"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="h-px w-8" style={{ background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))" }} />
                      <span className="text-xs tracking-[0.35em] uppercase text-primary font-medium">
                        Send a message
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl">
                      Submit your{" "}
                      <span className="gold-text italic">enquiry</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="John Doe"
                        className="bg-input border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className="bg-input border-border focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+91 98765 43210"
                        className="bg-input border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Input
                        id="service"
                        value={form.service}
                        onChange={update("service")}
                        placeholder="e.g. Study Visa, Work Permit"
                        className="bg-input border-border focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your immigration goals..."
                      rows={5}
                      className="bg-input border-border focus-visible:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="w-full sm:w-auto group h-12 px-8"
                    style={{
                      background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
                      color: "hsl(0 0% 4%)",
                      boxShadow: "0 10px 40px -10px hsl(42 65% 52% / 0.4)",
                    }}
                  >
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {channels.map(({ Icon, label, value, href }, i) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    href={href}
                    className="group flex items-start gap-4 p-6 rounded-md border border-border bg-card hover:border-primary/40 transition-all"
                  >
                    <div className="w-11 h-11 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.3em] uppercase text-primary mb-1">
                        {label}
                      </div>
                      <div className="text-sm text-foreground/90 leading-relaxed">
                        {value}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}

              <div className="p-6 rounded-md border border-primary/30 bg-gradient-to-br from-card to-dark-surface">
                <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                  Follow us
                </div>
                <div className="flex gap-3">
                  {[
                    {
                      Icon: FaFacebookF,
                      href: siteConfig.socials.facebook,
                      label: "Facebook",
                    },
                    {
                      Icon: FaInstagram,
                      href: siteConfig.socials.instagram,
                      label: "Instagram",
                    },
                    {
                      Icon: FaTwitter,
                      href: siteConfig.socials.twitter,
                      label: "Twitter",
                    },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="relative h-[420px] overflow-hidden border-t border-primary/20">
        <iframe
          title="Office location"
          src="https://maps.google.com/maps?q=Malad+West+Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full grayscale contrast-110 brightness-75"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </section>
    </>
  );
};

export default Contact; 