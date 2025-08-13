import './Footer.css'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="aa-footer">
        <img src="assets/images/Home/logo.png" alt="logo" />
        <ul className="aa-ul aa-general-ul LexendRegular">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/security">Security</Link></li>
        </ul>
        <div className='aa-border-bottom'></div>
        <ul className='aa-general-ul aa-ul-gap LexendRegular'>
          <li><Link to="adam1@gmail.com"><img src="assets/images/Icons/footer-icons/email.svg" alt="email" />hello@skillbirdge.com</Link></li>
          <li><Link to="tel:+6 03-26128 121"><img src="assets/images/Icons/footer-icons/phone.svg" alt="phoneNumber" />+6 03-26128 121</Link></li>
          <li><Link to="#"><img src="assets/images/Icons/footer-icons/location.svg" alt="location" />Somewhere in the World</Link></li>
        </ul>
        <div className='aa-border-bottom'></div>
        <div className='Terms-of-Service'>
          <ul className='aa-general-ul aa-footer-social-ul'>
            <li className='aa-footer-social'><Link to="#facebook.com"><img className='aa-footer-icon' src="assets/images/Icons/footer-icons/facebook.svg" alt="facebook" /></Link></li>
            <li className='aa-footer-social'><Link to="#twitter.com"><img className='aa-footer-icon ' src="assets/images/Icons/footer-icons/twitter.svg" alt="twitter" /></Link></li>
            <li className='aa-footer-social'><Link to="#linkedin.com"><img className='aa-footer-icon' src="assets/images/Icons/footer-icons/linked-in.svg" alt="linkedIn" /></Link></li>
          </ul>
          <p className='LexendLight aa-Terms-of-ServiceR'>YourBank All Rights Reserved</p>
          <p className='aa-footer-description LexendLight'>Privacy Policy <span className='aa-footer-border'></span> Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer