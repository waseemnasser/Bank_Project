
import { useState } from "react";
// import FooterTitle from "../FooterTitle/FooterTitle";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SliderSec } from "../SliderSec/SliderSec";

function OurTestimonialsSiction() {
  const [userType, setUserType] = useState('Individuals');

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <section className="white-space section-MarginBottom">
      <SectionTitle
        titlewhite="Our"
        titlegreen=" Testimonials"
        filter={true}
        paragraph="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
        handleUserTypeChange={handleUserTypeChange}
        userType={userType}
      />
      <SliderSec userType={userType} />
    </section>
  );
}

export default OurTestimonialsSiction;
