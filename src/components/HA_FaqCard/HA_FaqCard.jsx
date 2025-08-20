import { useEffect, useState } from "react";
import { HA_FaqCard_Data } from "../../data/HA_FaqCard_Data";
import "./HA_FaqCard.css";
import { motion, AnimatePresence } from "framer-motion";

const HA_FaqCard = () => {
   // initialize localStorage if empty
   useEffect(() => {
      if (!localStorage.getItem("faqData")) {
         localStorage.setItem("faqData", JSON.stringify(HA_FaqCard_Data));
      }
   }, []);

   const [load, setLoad] = useState(false);
   const data2 = JSON.parse(localStorage.getItem("faqData")) || [];

   return (
      <div className="aa-contain">
         <div
            className={`aa-faq-container-card ${load ? "aa-container-normal-height" : ""
               } aa-container-height`}
         >
            <AnimatePresence>
               {data2.map((card, index) => (
                  <motion.div
                     key={index}
                     className="faqCard"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{
                        duration: 0.4,
                        delay: index * 0.1, // staggered animation
                     }}
                  >
                     <p className="title LexendMedium">{card.title}</p>
                     <div className="divider"></div>
                     <p className="FAQ-des LexendLight">{card.des}</p>
                  </motion.div>
               ))}
            </AnimatePresence>
            {!load && <div className="aa-fade-mask"></div>}
         </div>

         {/* toggle buttons */}
         <button
            className={`LexendRegular ${load ? "aa-change-content" : ""} aa-show-less`}
            onClick={() => setLoad(!load)}
         >
            Show Less
         </button>

         <button
            onClick={() => setLoad(!load)}
            className={`aa-faq-btn ${load ? "aa-hide-content" : ""}`}
         >
            Load All FAQs
            <img src="assets/images/Icons/faq-arrow.svg" alt="arrow" />
         </button>
      </div>
   );
};

export default HA_FaqCard;
