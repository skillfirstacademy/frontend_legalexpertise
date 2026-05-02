import CountriesAbout from "../../components/Countries/CountriesAbout";
import uaeImg from "../../assets/uae-handshake.jpg";
import UAERelocation from "../../components/Countries/Uaerelocation";
import uae from "../../assets/uae.jpg";
import CountryAboutPage from "../../components/Countries/Countryaboutpage";
import HeroSection from "../../components/Countries/HeroSection";
import uaeVideoSrc from "../../assets/videos/uae.mp4"

const uaeData = {
  country: "United Arab Emirates",
  heroTagline: "Welcome to Legal Expertise Group",
  heroDescription:
    "A well-established name in immigration and HR consultancy with over 12 years of experience in India, now operating globally with a presence in the UK and Dubai. Our skilled professionals offer customized solutions for visa processing, workforce recruitment, and permanent residency.",
  heroParagraph:
    "Planning to relocate to the United Arab Emirates (UAE)? Find out how to secure a UAE residence visa, Emirates ID, and more. Our guide makes the entire immigration process easy to understand and follow.",
  workSectionTitle: "",
  workSectionIntro: "",
  visaTypes: [],
  stats: [],
  highlights: [],
};

const UAE = () => {
  return (
    <>
      <HeroSection
        videoSrc={uaeVideoSrc}
        countryName="UAE"
        description="The UAE is a progressive Middle Eastern nation recognized for its modern lifestyle, innovation, and global career opportunities. Discover immigration, residency, and visa solutions with Legal Expertise Group"
      />
      <CountryAboutPage image={uae} data={uaeData} />
      <UAERelocation />
    </>
  );
};

export default UAE;
