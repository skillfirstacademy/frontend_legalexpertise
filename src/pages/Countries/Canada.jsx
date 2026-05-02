import React from "react";
import CanadaRelocation from "../../components/Countries/CanadaRelocation";
import canadaImg from "../../assets/canada3.jpg";
import CountryAboutPage from "../../components/Countries/Countryaboutpage";
import HeroSection from "../../components/Countries/HeroSection";
import canadaVideoSrc from "../../assets/videos/canada.mp4"
const canadaData = {
  country: "Canada",
  heroTagline: "Move to Canada Made Simple",
  heroDescription:
    "Explore a country known for its stunning landscapes, top-quality education system, and strong career prospects. Whether your goal is a short visit or building a future through permanent residency, Canada offers accessible pathways for both individuals and families.",
  heroParagraph:
    "Take the first step toward Canada with professional visa support. From visitor visas and work permits to skilled migration programs and permanent residency options, Receptive Solutions provides complete guidance for a hassle-free immigration experience.",
  visaTypes: [],
  stats: [],
  highlights: [],
};

const Canada = () => {
  return (
    <>
      <HeroSection
        videoSrc={canadaVideoSrc}
        countryName="Canada"
        description="Canada is known for its breathtaking landscapes, multicultural society, strong economy, and high standard of living. From Toronto to Vancouver, explore opportunities for education, work, and immigration"
      />
      <CountryAboutPage image={canadaImg} data={canadaData} />;
      <CanadaRelocation />
    </>
  );
};

export default Canada;
