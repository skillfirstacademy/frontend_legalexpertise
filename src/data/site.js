// Centralized site content — easy to update across pages
export const siteConfig = {
  name: "Legal Expertise Group",
  shortName: "LEG",
  tagline: "Your Legal Pathway to Global Opportunities",
  description:
    "India's leading immigration advisory firm specializing in study visas, work permits, and permanent residency. Expert legal guidance for your global aspirations.",
  url: "https://legalexpertisegroup.com",
  email: "connect@legalexpertisegroup.com",
  emailAlt: "info@legalexpertisegroup.com",
  phone: "+91-9876543210",
  phoneAlt: "+91-1234567890",
  address: {
    line1: "504 Advent Atria Tower, Chincholi Bunder Road",
    line2: "Malad West, Mumbai 400064",
    city: "Mumbai",
    country: "India",
  },
  hours: "Mon – Sat: 9 AM – 6 PM",
  socials: {
    facebook: "https://facebook.com/legalexpertisegroup",
    instagram: "https://instagram.com/legalexpertisegroup",
    twitter: "https://twitter.com/legalexpertise",
    tiktok: "https://tiktok.com/@legalexpertisegroup",
    linkedin: "https://linkedin.com/company/legalexpertisegroup",
  },
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const services = [
  {
    slug: "study-visa",
    title: "Study Visa Assistance",
    short: "Personalized guidance for your study visa needs.",
    description:
      "End-to-end support for student visas to USA, UK, Canada, Australia, Germany, and more. From university shortlisting and SOP drafting to financial documentation and visa interviews — we craft a roadmap built around your academic goals.",
    icon: "GraduationCap",
    image: "study",
    features: [
      "University shortlisting & application support",
      "SOP, LOR & resume drafting",
      "Financial documentation & loan guidance",
      "Mock visa interviews",
      "Pre-departure briefing",
    ],
  },
  {
    slug: "work-permit",
    title: "Work Permit Solutions",
    short: "Secure your work permit with expert assistance.",
    description:
      "Comprehensive work-permit and skilled-migration services tailored to your profession. We handle eligibility assessment, employer sponsorship coordination, points-based applications, and dependent visas for your family.",
    icon: "Briefcase",
    image: "work",
    features: [
      "Skilled migration eligibility scoring",
      "Employer sponsorship coordination",
      "Points-based visa filing",
      "Dependent & spouse visas",
      "Post-landing settlement support",
    ],
  },
  {
    slug: "residency",
    title: "Permanent Residency",
    short: "Achieve permanent residency with confidence.",
    description:
      "Permanent residency pathways for Canada Express Entry, Australia PR, US Green Card, UK ILR, and EU Golden Visa programs. We design a long-term strategy that maximises your approval odds.",
    icon: "Home",
    image: "residency",
    features: [
      "PR pathway selection & strategy",
      "Express Entry & EOI profiling",
      "Investment & golden-visa routes",
      "Citizenship-by-investment options",
      "Long-term family settlement plans",
    ],
  },
  {
    slug: "legal-matters",
    title: "Legal Advisory",
    short: "Complex immigration matters handled with care.",
    description:
      "Specialist legal counsel for visa refusals, appeals, character certificates, and compliance issues. Our in-house lawyers represent you across consulates and tribunals worldwide.",
    icon: "Scale",
    image: "legal",
    features: [
      "Visa refusal review & appeals",
      "Character & medical clearance",
      "Compliance & status restoration",
      "Tribunal representation",
      "Document legalisation & apostille",
    ],
  },
];

export const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer, Now in Toronto",
    rating: 5,
    quote:
      "Legal Expertise Group made my immigration process seamless and stress-free. Their expert guidance and personalised solutions truly helped me achieve my global dreams effortlessly.",
  },
  {
    name: "Rahul Sharma",
    role: "MBA Student, London Business School",
    rating: 5,
    quote:
      "From SOP drafting to visa interview prep, their team was with me at every step. I received my UK student visa in just 18 days. Highly recommend!",
  },
  {
    name: "Rajesh Kumar",
    role: "Permanent Resident, Australia",
    rating: 5,
    quote:
      "After two refused applications elsewhere, LEG rebuilt my profile and secured my Australian PR within 9 months. True professionals.",
  },
  {
    name: "Priya Mehta",
    role: "Registered Nurse, Canada",
    rating: 5,
    quote:
      "Their work-permit team handled everything from credential assessment to employer sponsorship. I'm now living and working in Vancouver.",
  },
];

export const stats = [
  { value: "15+", label: "Years of Expertise" },
  { value: "10K+", label: "Successful Cases" },
  { value: "50+", label: "Countries Covered" },
  { value: "98%", label: "Approval Rate" },
];

export const whyChoose = [
  {
    icon: "ShieldCheck",
    title: "Licensed & Trusted",
    text: "Government-registered consultants with full legal accreditation.",
  },
  {
    icon: "Users",
    title: "Personal Case Manager",
    text: "A dedicated advisor stays with you from consultation to landing.",
  },
  {
    icon: "Globe2",
    title: "Global Network",
    text: "Partner offices and counsel across 50+ destination countries.",
  },
  {
    icon: "Clock",
    title: "Faster Approvals",
    text: "Streamlined documentation cuts your processing time by up to 40%.",
  },
];

export const processSteps = [
  { step: "01", title: "Free Consultation", text: "Share your goals and we'll map the best legal pathway for you." },
  { step: "02", title: "Eligibility Assessment", text: "Detailed profile scoring and country-fit recommendation." },
  { step: "03", title: "Documentation & Filing", text: "We prepare, review, and submit every document end-to-end." },
  { step: "04", title: "Approval & Landing", text: "Visa stamping, pre-departure briefing, and post-landing support." },
];
