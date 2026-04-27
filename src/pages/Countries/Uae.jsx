import CountriesAbout from "../../components/Countries/CountriesAbout";
import uaeImg from "../../assets/uae-handshake.jpg"; 
import UAERelocation from "../../components/Countries/Uaerelocation";

const UAE = () => {
  return (
    <>
    <CountriesAbout
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
    />
    <UAERelocation/>
    </>
  );
};

export default UAE;