import "./UseCaseRow.css"
import UseCaseCard from "../UseCaseCard/UseCaseCard"

const UseCasesRow = ({useCaseData , indiv ,title , para , reverce}) => {
    
  return (
    <div className= {`ss-useCases ${reverce ? "ss-reverce" : ""}`}>
      <div className="WN_UseCaseCards">
        {useCaseData.map((item,index) => (
            <UseCaseCard key={index} CardIcon={item.icon} CardDescription={item.description}/>
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
