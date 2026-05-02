import React from "react";
import EuropeRelocation from "../../components/Countries/Europerelocation";
import europeImg from "../../assets/europe.jpg";
import CountryAboutPage from "../../components/Countries/Countryaboutpage";
import HeroSection from "../../components/Countries/HeroSection";
import europeVideoSrc from "../../assets/videos/europe.mp4"
const europeData = {
  country: "Europe",
  heroTagline: "Work and Settle in Europe with Receptive Solutions",
  heroDescription:
    "With over 12 years of experience in global immigration and HR consulting, Receptive Solutions connects skilled professionals with career opportunities across Europe.",
  heroParagraph:
    "Europe is home to some of the world's strongest economies, offering a wide range of job opportunities in sectors such as technology, engineering, manufacturing, construction, healthcare, and hospitality. European nations provide a high standard of living, quality education, advanced healthcare systems, and strong labor protections. Its rich cultural diversity, historic landmarks, and natural beauty make it a highly preferred destination for migrants worldwide.\n\nReceptive Solutions offers immigration assistance and job placement services in countries including Germany, Poland, Portugal, Estonia, Lithuania, Latvia, Slovakia, Hungary, Malta, Romania, the Czech Republic, and Spain. Our team ensures a streamlined process—from documentation and job placement to visa assistance—helping you move to Europe smoothly and successfully.",
  visaTypes: [],
  stats: [],
  highlights: [],
};

const Europe = () => {
  return (
    <>
      <HeroSection
        videoSrc={europeVideoSrc}
        countryName="Europe"
        description="Europe is known for its rich history, advanced economies, cultural diversity, and strong job markets. Explore visa and employment pathways across multiple European countries with Legal Expertise Group"
      />
      <CountryAboutPage image={europeImg} data={europeData} />
      <EuropeRelocation />
    </>
  );
};

export default Europe;
