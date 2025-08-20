import './Footer.css'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ease = [0.25, 1, 0.5, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="aa-footer" variants={container}>

        <motion.img
          src="assets/images/Home/logo.png"
          alt="logo"
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <motion.ul className="aa-ul aa-general-ul LexendRegular" variants={container}>
          {["Home", "Careers", "About", "Security"].map((link, i) => (
            <motion.li key={i} variants={item}>
              <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>{link}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className='aa-border-bottom'></div>

        <motion.ul className='aa-general-ul aa-ul-gap LexendRegular' variants={container}>
          <motion.li variants={item}>
            <Link to="mailto:hello@skillbirdge.com">
              <img src="assets/images/Icons/footer-icons/email.svg" alt="email" />hello@skillbirdge.com
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="tel:+60326128121">
              <img src="assets/images/Icons/footer-icons/phone.svg" alt="phoneNumber" />+6 03-26128 121
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="#">
              <img src="assets/images/Icons/footer-icons/location.svg" alt="location" />Somewhere in the World
            </Link>
          </motion.li>
        </motion.ul>

        <div className='aa-border-bottom'></div>

        <motion.div className='Terms-of-Service' variants={container}>
          <motion.ul className='aa-general-ul aa-footer-social-ul' variants={container}>
            {[
              { src: "facebook.svg", alt: "facebook", href: "#facebook.com" },
              { src: "twitter.svg", alt: "twitter", href: "#twitter.com" },
              { src: "linked-in.svg", alt: "linkedin", href: "#linkedin.com" }
            ].map((icon, i) => (
              <motion.li
                key={i}
                className='aa-footer-social'
                variants={item}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Link to={icon.href}>
                  <img className='aa-footer-icon' src={`assets/images/Icons/footer-icons/${icon.src}`} alt={icon.alt} />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p className='LexendLight aa-Terms-of-ServiceR' variants={item}>
            YourBank All Rights Reserved
          </motion.p>
          <motion.p className='aa-footer-description LexendLight' variants={item}>
            Privacy Policy <span className='aa-footer-border'></span> Terms of Service
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

