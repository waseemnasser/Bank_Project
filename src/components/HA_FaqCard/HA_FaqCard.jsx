import "./HA_FaqCard.css";
import { HA_FaqCard_Data } from "./../../data/HA_FaqCard_Data";

function HA_FaqCard() {
  return (
    <div className="aa-faq-container-card">
      {HA_FaqCard_Data.map((card) => (
        <div className="faqCard">
          <h2 className="title LexendMedium">{card.title}</h2>
          <div className="divider"></div>
          <h3 className="des LexendLight">{card.des}</h3>
        </div>
      ))}
    </div>
  )
};

export default HA_FaqCard;