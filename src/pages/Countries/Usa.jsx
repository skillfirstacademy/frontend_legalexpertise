import React from "react";
import USARelocation from "../../components/Countries/UsaRelocation";
import usaImg from "../../assets/usa1.jpg"
import CountryAboutPage from "../../components/Countries/Countryaboutpage";

const usaData = {
  country: "United States of America",
  heroTagline: "Build Your Future in the USA from Anywhere in the World",
  heroDescription:
    "Start your journey toward living, studying, or working in the United States with reliable immigration support from Receptive Solutions.",
  heroParagraph:
    "The United States is known for its exceptional opportunities in education, career advancement, and innovation. With globally recognized universities and a powerful economy, it continues to be a preferred destination for students, professionals, and families aiming for a brighter future. With extensive experience in international immigration services, we assist applicants in navigating the USA visa process, including work visas, student visas, visitor visas, and long-term residency options. Our team provides end-to-end support, from document preparation to final visa submission, ensuring a smooth and successful process. Whether your goal is to study at leading institutions, build a career in top industries, or settle in the United States, Receptive Solutions stands as your trusted partner—guiding you at every stage of your journey.",
  visaTypes: [],
  stats: [],
  highlights: [],
};

const Usa = () => {
  return (
    <>
      <CountryAboutPage image={usaImg} data={usaData} />
      <USARelocation />
    </>
  );
};

export default Usa;
