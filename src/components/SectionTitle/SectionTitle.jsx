import "./SectionTitle.css"

function SectionTitle ( titlewhite, titlegreen, filter, paragraph, order ) {
  return (
    <div className="ST-backgroun">
      <div className="ST-container">
        <div className={`ST - title ${filter ? "ss-width" : "ss-width100"}`}>
          <h1 className="LexendMedium">
            {order ?
              <>
                <span className="whitetitle">{titlewhite}</span>
                <span className="greentitle">{titlegreen}</span>
              </>
              :
              <>
                <span className="greentitle">{titlegreen}</span>
                <span className="whitetitle">{titlewhite}</span>
              </>
            }
          </h1>
          <p className="LexendLight">{paragraph}</p>
        </div>
        <div className={filter ? "filter-IB" : "hidden"}>
          <button className={filter ? "LexendRegular filter-active" : "hidden"}>For Individuals</button>
          <button className={filter ? "LexendRegular" : "hidden"}>For Businesses</button>
        </div>
      </div>
    </div >
  )
}

export default SectionTitle