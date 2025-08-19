import { HA_JobOpeningsCard_Data } from "../../data/HA_JobOpeningsCard_Data";
import "./HA_JobOpeningsCard.css";

const HA_JobOpeningsCard = () => {
  return (
    <div className="HA_JobOpeningsCardWrapper ">
      {HA_JobOpeningsCard_Data.map((card, cardIndex) => (
        <div key={cardIndex} className="HA_JobOpeningsCard">
          <h2 className="head LexendSemiBold">{card.head}</h2>

          <div className="optionsContainer">
            {card.options?.map((option, index) => (
              <button key={index} className="HeadBtn LexendLight">
                {option}
              </button>
            ))}
          </div>

          <h3 className="titleANDrequirementTitle LexendSemiBold">
            About This Job
          </h3>
          <span className="subTitleANDrequirements LexendLight">
            {card.subTitle}
          </span>

          <h3 className="titleANDrequirementTitle LexendSemiBold">
            Requirements & Qualifications
          </h3>
          <div className="requirementsList">
            {card.requirements?.map((req, index) => (
              <div key={index} className="requirementItem">
                <img
                  className="img"
                  src="assets/images/Icons/careers-icons/briefcase-gray.svg"
                  alt="briefcase icon"
                />
                <span className="subTitleANDrequirements LexendLight">
                  {req}
                </span>
              </div>
            ))}
          </div>

          <button className={`btn LexendMedium ${cardIndex==1? 'aa-btn-mt': ''}`}>Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default HA_JobOpeningsCard;
