import "./HA_FaqCard.css";
const HA_FaqCard = ({ title, des }) => {
  return (
    <div className="faqCard">
      <h2 className="title LexendMedium">{title}</h2>
      <div className="divider"></div>
      <h3 className="des LexendLight">{des}</h3>
    </div>
  );
};

export default HA_FaqCard;
