import React from "react";
import UKRelocation from "../../components/Countries/UkRelocation";
import CountryAboutPage from "../../components/Countries/Countryaboutpage";
import ukImg from "../../assets/uk1.jpg"

const ukData = {
  country: "United Kingdom",
  heroTagline: "Start Your Journey to the UK from Anywhere in the World",
  heroDescription:
    "Travel to the UK for work, education, tourism, or permanent settlement, and take the next step toward becoming a UK resident.",
  heroParagraph:
    "The United Kingdom provides excellent opportunities for those looking to relocate, pursue education, or establish a long-term career. From dynamic cities such as London, Manchester, and Edinburgh to scenic countryside landscapes, the UK offers a unique blend of modern lifestyle and rich heritage. With globally respected universities, a strong and forward-thinking economy, and a diverse cultural environment, the UK continues to attract individuals from across the world. Whether you plan to study, work, join your family, or invest in business opportunities, we guide you through every stage of the UK immigration process. With proven experience in immigration services, Receptive Solutions assists applicants in handling visa requirements, documentation, and application procedures efficiently. We aim to make your journey to living in the United Kingdom smooth, structured, and successful.",
  visaTypes: [],
  stats: [],
  highlights: [],
};

const UKPage = () => {
  return (
    <>
      <CountryAboutPage image={ukImg} data={ukData} />;
      <UKRelocation />
    </>
  );
};

export default UKPage;
