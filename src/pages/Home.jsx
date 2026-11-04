import Hero from "../components/Hero";
import FeaturedTreatments from "../components/FeaturedTreatments";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedTreatments />
      <AboutSection />
      <ContactSection source="Home Page" headingLevel="h2" />
    </>
  );
}

export default Home;