import "./HA_UseCaseCard.css";

function HA_UseCaseCard(image, alt, desc) {
  return (
    <div className="useCaseCard">
      <div className="shadow">
        <div className="border">
          <img
            className="image"
            src={`assets/images/Icons/Home-icons/cases-section/${image}`}
            alt={`this is ${alt} icon`}
          />
        </div>
      </div>
      <h2 className="des LexendRegular">{desc}</h2>
    </div>
  );
};

export default HA_UseCaseCard;
