import "./useCasesRow.css"
import HA_UseCaseCard from "../HA_UseCaseCard/HA_UseCaseCard"

const UseCasesRow = ({arr , indiv ,title , para , reverce}) => {
    
  return (
    <div className= {`ss-useCases ${reverce ? "ss-reverce" : ""}`}>
      <div className="ss-useCasesCards">
        {arr.map((item,index) => (
            <HA_UseCaseCard key={index} image={item.icon} alt={item.imgAlt} desc={item.title}/>
        ))}
      </div>
      <div className="ss-useCasesIndivs">
        <h2 className="LexendMedium ss-useCasesIndivsTitle">{title}</h2>
        <p className="LexendLight ss-useCasesIndivsDes">{para}</p>
        <div className="ss-useCasesIndivsContainer">
            {indiv.map((indiv , index) => (
              <div key={index} className="ss-useCasesIndivsInnerContainer">
                <div className="ss-useCasesIndivsItem">
                  <span className="LexendMedium ss-useCasesIndivsItemSpan">{indiv.per}</span>
                  <p className="LexendLight ss-useCasesIndivsItemP">{indiv.title}</p>
                </div>
                {index != 2 ? <div className="ss-dashed"></div> : ""}
              </div>
            ))}
        </div>
        <div className="ss-useCasesIndivsButtonContainer">
            <button className="LexendRegular ss-useCasesIndivsButton">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default UseCasesRow
