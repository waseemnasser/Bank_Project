import "./SectionTitle.css"

export const SectionTitle = ({titlewhite, titlegreen, filter, paragraph, reverse, widthtitle=910}) => {
  return (
    <div className="ST-backgroun">
        <div className="ST-container white-space">
            <div className="ST-title" style={{ maxWidth: `calc((${widthtitle}*100vw/ 1920))`}}>
                <h1 className=".LexendMedium">
                  <span className={reverse? "whitetitle greenRevers":"whitetitle"}>{titlewhite}</span>
                  <span className={reverse? "greentitle whiteRevers":"greentitle"}>{titlegreen}</span>
                </h1>
                <p className="LexendLight">{paragraph}</p>
            </div>
            <div className={filter?"filter-IB":"hidden"}>
                <button className={filter?"LexendRegular filter-active":"hidden"}>For Individuals</button>
                <button className={filter?"LexendRegular":"hidden"}>For Businesses</button>
            </div>
        </div>
    </div>
  )
}
