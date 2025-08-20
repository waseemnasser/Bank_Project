import { HA_FaqCard_Data } from "../../data/HA_FaqCard_Data";
import "./HA_FaqCard.css";
import { useEffect, useState } from "react";
export default function HA_FaqCard  () {
   const data = localStorage.getItem('faqData')
   console.log(data)
   const data2 = JSON.parse(data)

   const [load, setLoad] = useState(false)
   useEffect(() => {
      if (!localStorage.getItem("faqData")) {
         localStorage.setItem("faqData", JSON.stringify(HA_FaqCard_Data));
      }
   }, [])
   return (
      <div className="aa-contain">
         <div className={`aa-faq-container-card ${load ? 'aa-container-normal-height' : ' '}  aa-container-height`} >
            {data2.map((card, index) => (
               <div className={`card ${(index === 2 || index === 3) & !load ? "aa-card-shadow aa-card-shadow-text" : ""} faqCard      `}>
                  <p className="FAQ-title LexendMedium">{card.title}</p>
                  <div className="FAQ-divider"></div>
                  <p className="FAQ-des LexendLight">{card.des}</p>
               </div>
            ))}

         </div>
         <button className={`${load ? 'aa-change-content' : '  '} aa-show-less `} onClick={() => setLoad(!load)}>Show Less <img className="showLessArrow" src="assets/images/Icons/faq-arrow.svg" alt="arrow" /></button>
         <button onClick={() => setLoad(!load)} className={`aa-faq-btn  ${load ? 'aa-hide-content' : ' '}     `}>Load All FAQs <img src="assets/images/Icons/faq-arrow.svg" alt="arrow" /></button>
      </div>
   )

};
