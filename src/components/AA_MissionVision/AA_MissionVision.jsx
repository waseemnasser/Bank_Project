import "./AA_MissionVision..css"

export default function AA_MissionVision({AaimageSrc,Aareverse,MvTitle,Mvdes}) {
  return (
    <div className="aa-Mv-cotainer-aa">
     <div  className={`aa-Mv-section  ${Aareverse ? 'aa-row-reversed': "aa-flex-row"} `}> 
      <div className={`aa-image-mission-vision ${Aareverse ? 'row-image-reversed offset-up': "flex-row offset-down"}`} >
        <div className={`aa-image-wrapper `}>
          <img className="aa-image-mv" src={AaimageSrc} alt="mission-image" />
        </div>
    {Aareverse ? <span className="aa-left aa-line-down"></span> : <span className="aa-right aa-line-down"></span>}
      </div>
      <div className="AA-des-MV">
        <h3 className="LexendMedium">{MvTitle}</h3>
        <p className="LexendLight">{Mvdes}</p>
      </div>
      </div>

      
    </div>
  )
}
