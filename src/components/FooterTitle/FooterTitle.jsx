import "./FooterTitle.css"
import  {Link}  from "react-router-dom"

const FooterTitle = ({title, paragraph}) => {
  return (
    <div className="FT-background white-space section-MarginBottom"> 
      <div className="FooterTitle">
        <img src="./assets/images/AbstractDesign/AbstractDesign.png"/>
          <div className="title">
            <h3 className="LexendRegular">{title} <span>YourBank today!</span></h3>
            <p className="LexendLight">{paragraph}</p>
          </div>
          <Link className="LexendRegular linkFooterTitle" to={"/signUp.jsx"}><p>Open Account</p></Link>
        </div>
    </div>
  )
}

export default FooterTitle