import "./FooterTitle.css"
import { Link } from "react-router-dom"
import Abstract from "/public/assets/images/Abstract Design/Abstract Design.png"
export const FooterTitle = ({title, paragraph}) => {
  return (
    <>
    <div className="aaa">
        <div className="FooterTitle white-space">
          <img src={Abstract} alt="Abstract Design" />
          <div className="title">
              <h3 className="LexendRegular">{title} <span>YourBank today!</span></h3>
              <p className="LexendLight">{paragraph}</p>
          </div>
          {/* <link to={"/pages/SignUp.jsx"}>Open</link> */}
          <button className="LexendRegular"><p>Open Account</p></button>
        </div>
    </div>
    </>
  )
}

