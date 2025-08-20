import "./OurBenefitsSection.css"
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { exportedBFCardData } from "../../data/OurBenefitsCard"
import { BenefitsCard } from "../BenefitsCard/BenefitsCard"
function OurBenefitsSection() {
    
  return (
    <div className="Ob-section-container white-space section-MarginBottom">
        <SectionTitle titlewhite={"Our"} titlegreen={" Benefits"} filter={false} widthtitle={1296} paragraph={"At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."}></SectionTitle>
        <div className="OB-card-container">
          {exportedBFCardData.map((ele, index)=>{
            return(
            
              <BenefitsCard borderClassName={`${[1, 2].includes(index) ? "ou-border-design" : "ou-second-border-design"}`} key={index} sizeIco={76} srcIco={ele.icon} classNameIco={`OBC-card`} title={ele.title} paragraph={ele.paragraph}></BenefitsCard>
            )
          })}
        </div>
    </div>

  )
}
export default OurBenefitsSection
