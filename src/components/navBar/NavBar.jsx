import React, { useState } from 'react'
import "./navBar.css"
import logo from "/assets/images/Home/logo.png"
import menu from "/assets/images/Home/Button.png"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    let list  =["Home" , "Carrers" ,"About" , "Security"]
    let LinkList  =["/" , "/careers" ,"/about" , "/security"]
    let buttonsList  =["Sign Up" , "Login" ]
    let buttonsLinksList  =["/signup" , "/login" ]

    let [show , setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <nav>
            <img src={logo} alt="nav-logo" />
            <ul className='ss-navUl'>{list.map((listItem , index) => (<li key={index}><NavLink className= {({isActive}) => isActive? "ss-link-active LexendRegular" : "LexendRegular"} to={`${LinkList[index]}`}>{listItem}</NavLink></li>))}</ul>
            <div className='ss-buttonsDiv'> 
                {buttonsList.map((button , index) => (
                    <button key={index}><NavLink className= {({isActive}) => isActive? "ss-button-active LexendRegular" : "LexendRegular"} to={`${buttonsLinksList[index]}`}>{button}</NavLink></button>
                ))}
            </div>
            <button className='menu' onClick={handleShow}>
                <img src={menu} alt="menu" />
            </button>
            <div className = {`ss-mobile-nav ${show ? " ss-show" : "ss-notShow"}`}>
                <ul className='ss-mobile-navList'>
                    {list.map((listItem , index) => (<li key={index}><NavLink className= {({isActive}) => isActive? "ss-link-active LexendRegular" : "LexendRegular"} to={`${LinkList[index]}`}>{listItem}</NavLink></li>))}
                    {buttonsList.map((button , index) => (
                        <li key={index}><NavLink className= {({isActive}) => isActive? "ss-link-active LexendRegular" : "LexendRegular"} to={`${buttonsLinksList[index]}`}>{button}</NavLink></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
