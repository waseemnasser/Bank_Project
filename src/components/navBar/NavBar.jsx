import { useState, useEffect } from 'react'
import "./navBar.css"
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    let list = ["Home", "Careers", "About", "Security"]
    let LinkList = ["/", "/careers", "/about", "/security"]
    let buttonsList = ["Sign Up", "Login", "Dashboard"]
    let buttonsLinksList = ["/signup", "/login", "/dashBoard"]

    const [show, setShow] = useState(false);
    const [navShow, setNavShow] = useState(false);

    function handelScroll() {
        if (window.scrollY > 70) {
            setNavShow(true)
        } else {
            setNavShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [navShow])

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <nav className={`${navShow ? "ss-navShow" : "white-space ss-nav"}`}>
            <img className='ss-navLogo' src="assets/images/Home/logo.png" alt="nav-logo" />
            <ul className='ss-navUl'>{list.map((listItem, index) => (<li key={index}><NavLink className={({ isActive }) => isActive ? "ss-link-active LexendRegular" : "LexendRegular"} to={`${LinkList[index]}`}>{listItem}</NavLink></li>))}</ul>
            <div className='ss-buttonsDiv'>
                {buttonsList.map((button, index) => (
                    <button key={index}><NavLink className={({ isActive }) => isActive ? "ss-button-active LexendRegular" : "LexendRegular"} to={`${buttonsLinksList[index]}`}>{button}</NavLink></button>
                ))}
            </div>
            <button className='menu' onClick={handleShow}>
                <img src="assets/images/Home/Button.png" alt="menu" className='ss-menuIcon' />
            </button>
            <div className={`ss-mobile-nav ${show ? " ss-show" : ""}`}>
                <button className='ss-mobile-nav-iconContainer' onClick={handleShow}>
                    <img src="assets/images/Icons/Home-icons/hero-icons/plus.svg" alt="cross" />
                </button>
                <ul className='ss-mobile-navList'>
                    {list.map((listItem, index) => (<li onClick={handleShow} key={index}><NavLink className={({ isActive }) => isActive ? "ss-link-active LexendRegular" : "LexendRegular"} to={`${LinkList[index]}`}>{listItem}</NavLink></li>))}
                    {buttonsList.map((button, index) => (
                        <li onClick={handleShow} key={index}><NavLink className={({ isActive }) => isActive ? "ss-link-active LexendRegular" : "LexendRegular"} to={`${buttonsLinksList[index]}`}>{button}</NavLink></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
