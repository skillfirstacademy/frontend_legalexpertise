import React from "react";
import AustraliaRelocation from "../../components/Countries/AustraliaRelocation";
import CountryAboutPage from "../../components/Countries/Countryaboutpage";
import australiaImg from "../../assets/australia.jpg";
import HeroSection from "../../components/Countries/HeroSection";
import australiaVideoSrc from "../../assets/videos/australia.mp4"

const australiaData = {
  country: "Australia",
  heroTagline: "Move to Australia with Confidence",
  heroDescription:
    "Explore opportunities to work, study, travel, or establish a long-term future in Australia. Our experienced consultants guide you through every stage of your immigration process.",
  heroParagraph:
    "Australia is a highly preferred destination for migrants, known for its strong economy, diverse culture, and excellent healthcare and education systems. It consistently ranks among the top countries for quality of life, safety, and career growth.\n\nProfessionals worldwide are drawn to Australia's thriving job market, especially in sectors like engineering, IT, construction, healthcare, hospitality, and education. With various visa options—such as skilled migration, employer-sponsored visas, student visas, and temporary work permits—Australia provides multiple pathways for individuals and families.\n\nReceptive Solutions offers complete support for Australian immigration, including guidance on visa requirements, documentation, eligibility, and the full application process. Whether your goal is a short-term visit or pursuing permanent residency, our team ensures a smooth and well-informed journey.",
  visaTypes: [],
  stats: [],
  highlights: [],
};

const AustraliaPage = () => {
  return (
    <>
      <HeroSection
        videoSrc={australiaVideoSrc}
        countryName="Australia"
        description="Australia is known for its high quality of life, strong economy, world-class education system, and stunning landscapes. Explore pathways to visit, work, study, or settle in Australia with the support of Legal Expertise Group"
      />
      <CountryAboutPage image={australiaImg} data={australiaData} />
      <AustraliaRelocation />
    </>
  );
};

export default AustraliaPage;
