import React from 'react'
import CanadaRelocation from '../../components/Countries/CanadaRelocation'
import canadaImg from "../../assets/canada3.jpg"
import CountryAboutPage from '../../components/Countries/Countryaboutpage';

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
     <CountryAboutPage image={canadaImg} data={canadaData} />;
    <CanadaRelocation/>
    </>
  )
}

export default Canada