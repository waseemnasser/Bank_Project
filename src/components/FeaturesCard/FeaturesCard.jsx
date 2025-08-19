import "./FeaturesCard.css"
import { FeaturesData } from "../../data/FeaturesData";
export default function FeaturesCard({ group }) {

  const cardGroup = 4;
  const start = group * cardGroup;
  const end = start + cardGroup;
  const visibleCards = FeaturesData.slice(start, end);

  return (
    <div className="aa-container-feature">
      {visibleCards.map((e, index) => (
        <div className="aa-features-card">
          <div className="aa-features-heading LexendRegular">
            <p key={index}>{e.aa_title}</p>
            <img src="assets/images/Icons/features-arrow.svg" alt="arrow" />
          </div>
          <p className="aa-features-description LexendRegular" key={index}>{e.aa_description}</p>
        </div>
      ))}
    </div>
  )


}
