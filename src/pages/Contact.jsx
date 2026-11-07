
import ContactSection from "../components/ContactSection";
import ContactInfoCards from "../components/ContactInfoCards";

export default function Contact() {
  return (
    <>
      <ContactSection
        source="Contact Page"
        headingLevel="h1"
        showMap
      />

      <ContactInfoCards />
    </>
  );
}
