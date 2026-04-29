import React from 'react'
import SingaporeRelocation from '../../components/Countries/SingaporeRelocation'
import CountryAboutPage from '../../components/Countries/Countryaboutpage'
import {
  ArrowRight, Check, ChevronDown, ChevronUp,
  Shield, TrendingUp, Globe, Briefcase, Star, Users,
} from "lucide-react";
import singapore from "../../assets/singapore.jpg"

const defaultData = {
  country: "Singapore",
  heroTagline: "Build Your Future in Singapore",
  heroDescription:
    "Singapore offers excellent opportunities for skilled workers, professionals, and students looking to grow in an international environment. With its competitive job market, high quality of life, and world-class infrastructure, Singapore stands out as one of the top global destinations for talent.",
  heroParagraph:
    "Known for its economic stability, safety, and innovation-driven industries, Singapore provides the perfect platform to build a strong and successful career.",
  workSectionTitle: "Work Opportunities in Singapore",
  workSectionIntro:
    "Singapore's key work visa programs — the S Pass and Employment Pass (E Pass) — enable foreign professionals and workers to legally live and work in the country while benefiting from its dynamic economy.",
  visaTypes: [
    {
      id: "spass",
      tag: "S Pass",
      label: "For Mid-Skilled Workers",
      title: "S Pass",
      subtitle: "For Mid-Skilled Workers",
      description:
        "The S Pass is designed for mid-skilled professionals who bring technical expertise and specialist knowledge to Singapore's growing industries.",
      eligibleFor: ["Technicians", "Supervisors", "Specialists"],
      benefits: [
        "Legal authorization to work in Singapore",
        "Flexible employment options (change of employer allowed under regulations)",
        "Opportunity to bring dependents (subject to eligibility criteria)",
        "Exposure to international work standards",
        "Opportunity to upgrade skills and move to higher visa categories",
      ],
    },
    {
      id: "epass",
      tag: "E Pass",
      label: "For Skilled Professionals",
      title: "Employment Pass (E Pass)",
      subtitle: "For Skilled Professionals",
      description:
        "The Employment Pass is ideal for high-skilled foreign professionals seeking to advance their careers at the highest levels of Singapore's economy.",
      eligibleFor: ["Professionals", "Managers", "Executives", "Business owners"],
      benefits: [
        "Work in top sectors like finance, IT, healthcare, and business",
        "Higher salary packages and career growth opportunities",
        "Validity up to 2–3 years, renewable",
        "Eligibility to bring family members",
        "Opportunity to apply for long-term residency pathways",
      ],
    },
  ],
 
  highlights: [
    { icon: <Shield className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, label: "Safe & Stable" },
    { icon: <TrendingUp className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, label: "Strong Economy" },
    { icon: <Globe className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, label: "Global Hub" },
    { icon: <Briefcase className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, label: "Top Employers" },
    { icon: <Star className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, label: "Quality of Life" },
    { icon: <Users className="w-5 h-5 stroke-primary" strokeWidth={1.5} />, label: "Multicultural" },
  ],
};

const Singapore = () => {
  return (
    <div>
        <>
        <CountryAboutPage data={defaultData} image={singapore}/>
        <SingaporeRelocation/>
        </>
    </div>
  )
}

export default Singapore