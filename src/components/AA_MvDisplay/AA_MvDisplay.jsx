import AA_MissionVision from "../AA_MissionVision/AA_MissionVision"
import SectionTitle  from "../SectionTitle/SectionTitle"

import "./AA_MvDisplay.css"
export default function AA_MvDisplay() {
  return (
  
    <section className="aa-mv-container white-space section-MarginBottom">
      <SectionTitle filter={false} widthtitle={1296} titlegreen="Mission & vision" paragraph={"We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"} />
      <AA_MissionVision AaimageSrc="assets/images/About/mission-and-vision/mission-image.png" Aaborder="aa-right" Aareverse={false}
        MvTitle="Mission" Mvdes="At YourBank, our mission is to empower 
        our customers to achieve financial success. We are dedicated to 
        delivering innovative banking solutions that cater to their unique needs.
        Through personalized services, expert guidance, and cutting-edge technology,
        we aim to build strong, lasting relationships with our customers. Our mission
        is to be their trusted partner, helping them navigate their financial journey and 
        realize their dreams." />
      <AA_MissionVision AaimageSrc="assets/images/About/mission-and-vision/vision-image.png" Aaborder="aa-left" Aareverse={true}
        MvTitle="Vision" Mvdes="Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. 
        Through continuous innovation and collaboration, we strive to be at
        the forefront of the industry, setting new standards for customer-centric banking.
        Our vision is to be the preferred financial institution, known for our unwavering
        commitment to excellence, trust, and customer satisfaction." />
    </section>
  )
}
