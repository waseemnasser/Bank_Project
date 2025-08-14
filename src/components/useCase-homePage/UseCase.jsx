import { SectionTitle } from "../SectionTitle/SectionTitle"
import UseCasesRow from "../useCaseComponent/UseCasesRow"
import "./useCase.css"

const UseCase = () => {
  let arrOne =[{
        icon :"ManagingPersonalFinances.svg",
        title:"Managing Personal Finances",
        imgAlt:"icon"
    },
    {
        icon : "Saving-future.svg",
        title:"Saving for the Future",
        imgAlt:"icon"
    },
    {
        icon : "Homeownership.svg",
        title:"Homeownership",
        imgAlt:"icon"
    },
    {
        icon : "EducationFunding.svg",
        title:"Education Funding",
        imgAlt:"icon"
    },
  ]
  let arrTwo =[{
        icon :"StartupsandEntrepreneurs.svg",
        title:"Startups and Entrepreneurs",
        imgAlt:"icon"
    },
    {
        icon : "CashFlowManagement.svg",
        title:"Cash Flow Management",
        imgAlt:"icon"
    },
    {
        icon : "BusinessExpansion.svg",
        title:"Business Expansion",
        imgAlt:"icon"
    },
    {
        icon : "currency-dollar.svg",
        title:"Payment Solutions",
        imgAlt:"icon"
    },
  ]
  let individualsOne = [{
        per : "78%",
        title:"Secure Retirement Planning"
    },
    {
        per:"63%",
        title :"Manageable Debt Consolidation"
    },
    {
        per:"91%",
        title :"Reducing financial burdens"
    },
  ]
  let individualsTwo = [{
        per : "65%",
        title:"Cash Flow Management"
    },
    {
        per:"70%",
        title :"Drive Business Expansion"
    },
    {
        per:"45%",
        title :"Streamline payroll processing"
    },
  ]
  return (
    <div className="white-space">
      <SectionTitle titlegreen = "Use Cases" paragraph="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"/>
      <UseCasesRow arr = {arrOne} indiv = {individualsOne} title="For Individuals" para = "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"/>
      <UseCasesRow arr = {arrTwo} indiv = {individualsTwo} title="For Business" para = " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them" reverce/>
    </div>
  )
}

export default UseCase
