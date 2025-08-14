import "./HA_FaqCard.css";
import { useState } from "react";
const HA_FaqCard = () => {
    const data = localStorage.getItem('faqData')
    const data2= JSON.parse(data)

const [load,setLoad]= useState(false)

   return (

   <div className="aa-contain">
         <div className={`aa-faq-container-card ${load ? 'aa-container-normal-height' : ' '}  aa-container-height`} >
         {data2.map((card , index) => (
            <div className={`card ${(index === 2 || index === 3 )& !load? "card-shadow card-shadow-text" : ""} faqCard      `    }>
               <p className="title LexendMedium">{card.title}</p>
               <div className="divider"></div>
               <p className="des LexendLight">{card.des}</p>
            </div>
         ))}
         
      </div>
      <button className={`${load ? 'aa-change-content' : '  '} aa-show-less `} onClick={()=>setLoad(!load)}>show less</button>
      <button  onClick={()=> setLoad(!load)}   className={`aa-faq-btn  ${load ? 'aa-hide-content' : ' '}     `}>Load All FAQs <img src="assets/images/Icons/faq-arrow.svg" alt="arrow" /></button>
   </div>
   )

};

export default HA_FaqCard;
