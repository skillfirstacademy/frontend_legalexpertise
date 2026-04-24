import Seo from "@/components/common/Seo";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/data/site";
import PageHero from "../components/sections/PageHero";

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.socials),
  };

  return (
    <>
      <Seo
        title="Immigration Lawyers & Visa Consultants in India"
        description="Legal Expertise Group — India's trusted immigration advisory firm for study visas, work permits, and permanent residency. 15+ years, 98% approval rate."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesGrid />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default Home;
