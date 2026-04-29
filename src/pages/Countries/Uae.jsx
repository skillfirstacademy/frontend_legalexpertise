import CountriesAbout from "../../components/Countries/CountriesAbout";
import uaeImg from "../../assets/uae-handshake.jpg"; 
import UAERelocation from "../../components/Countries/Uaerelocation";
import uae from "../../assets/uae.jpg"
import CountryAboutPage from "../../components/Countries/Countryaboutpage";

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
    <CountryAboutPage image={uae} data={uaeData} />
    {/* <CountriesAbout
      image={uaeImg}
      imageAlt="Legal Expertise Group – UAE office"
      eyebrow="United Arab Emirates"
      title="Welcome to"
      titleAccent="Legal Expertise Group"
      body="A distinguished leader in immigration and HR consultancy, Legal Expertise Group brings over a decade of proven excellence in India, with an expanding international footprint across the United Kingdom and Dubai."
      services={[
        "Global Immigration & Visa Advisory",
        "Talent Acquisition & Workforce Solutions",
        "Long-Term Residency & Settlement Services",
      ]}
      tagline="We are committed to delivering precision, compliance, and seamless execution at every stage of your journey."
    /> */}
    <UAERelocation/>
    </>
  );
};

export default UAE;