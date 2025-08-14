import './LogSignHero.css'
import {Link} from 'react-router-dom' 
import facebookIcon from '/assets/images/Icons/footer-icons/facebook.svg'
import googleIcon from '/assets/images/Icons/google-icon.svg'
import AppleIcon from '/assets/images/Icons/Apple-icon.svg'
import IconShape from '../iconShape/IconShape'
const LogSignHero = ({ title , description , isSignUp}) => {
  return (
    <>
     <div className="rh_containr ">
      <img src="assets/images/logeIn-signUp/login-background.png" alt="background" className='rh-LS-background'/>
      <img src="assets/images/AbstractDesign/heroDesign.png" alt="heroDesign" className='rh-LS-background-TopRight'/>
      <div className="rh_titelPart">
        <h1 className="LexendMedium">{title}</h1>
        <p className="LexendLight">{description}</p>
      </div>
      <div className="rh_inputPart">
          <form>
            {isSignUp && (
              <>
                <input type="text" placeholder="Enter First Name" className='LexendLight '/>
                <input type="text" placeholder="Enter Last Name" className='LexendLight '/>
              </>
            )}
            <input type="email" placeholder="Enter your Email"className='LexendLight ' />
            <input type="password" placeholder="Enter your Password"className='LexendLight ' />
          </form>
          {!isSignUp && (
            <div className="rh_forgotPart LexendRegular">
              <Link to="#">Forgot Password?</Link>
            </div>
          )}
          <button type="submit" className="rh_logBtn LexendRegular ">
            {isSignUp ? "Sign Up" : "Login"}
          </button>

          <Link to={isSignUp ? "/login" : "/signup"}>
            <button type="button" className="rh_sinBtn LexendRegular ">
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </Link>
        <div className="rh_comment">
          <div className="rh_Line"></div>
          <span className="rh_text LexendRegular">Or Continue with</span>
          <div className="rh_Line"></div>
        </div>
        <div className="rh_social">
          
            <IconShape icon ={googleIcon} className="logSignPageIcon" size={94}/>
         
           <IconShape icon ={facebookIcon} className="logSignPageIcon" size={94}/>
          
        
            <IconShape icon ={AppleIcon} className="logSignPageIcon" size={94}/>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default LogSignHero