import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="aa-footer">
        <img src="/Bank_Project/public/assets/images/Home/logo.png" alt="logo" />
        <ul className="aa-ul aa-general-ul LexendRegular">
          <li><link to="./../../pages/Home.jsx">Home</link></li>
          <li><link to="./../../pages/Careers.jsx">Careers</link></li>
          <li><link to="./../../pages/About.jsx">About</link></li>
          <li><link to="./../../pages/Security.jsx">Security</link></li>
        </ul>
                <div className='aa-border-bottom'></div>
        <ul className='aa-general-ul aa-ul-gap LexendRegular'>
          <li><link to="adam1@gmail.com"><img src="/Bank_Project/public/assets/images/Icons/footer-icons/email.svg" alt="email" />hello@skillbirdge.com</link></li>
          <li><link to="tel:+6 03-26128 121"><img src="/Bank_Project/public/assets/images/Icons/footer-icons/phone.svg" alt="phoneNumber" />+6 03-26128 121</link></li>
          <li><link to="#"><img src="/Bank_Project/public/assets/images/Icons/footer-icons/location.svg" alt="location" />Somewhere in the World</link></li>
        </ul>
        <div className='aa-border-bottom'></div>
        <div className='Terms-of-Service'>
          <ul className='aa-general-ul aa-footer-social-ul'>
            <li className='aa-footer-social'><link to="facebook.com"><img className='aa-footer-icon' src="/Bank_Project/public/assets/images/Icons/footer-icons/facebook.svg" alt="facebook" /></link></li>
            <li className='aa-footer-social'><link to="twitter.com"><img className='aa-footer-icon ' src="/Bank_Project/public/assets/images/Icons/footer-icons/twitter.svg" alt="twitter" /></link></li>
            <li className='aa-footer-social'><link to="linkedin.com"><img className='aa-footer-icon' src="/Bank_Project/public/assets/images/Icons/footer-icons/linked-in.svg" alt="linkedIn" /></link></li>
          </ul>
        <div className='aa-descriptions-footer'>
            <p className='LexendLight'>YourBank All Rights Reserved</p>
          <p className='aa-footer-description LexendLight'>Privacy Policy <span className='aa-footer-border'></span> Terms of Service</p>
        </div>

        </div>
      </div>
    </footer>
  )
}