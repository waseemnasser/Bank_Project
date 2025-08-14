import React from 'react'
import "./homeHero.css"
import {NavLink} from "react-router-dom"


const HomeHero = () => {
    let list = [{
        icon: "assets/images/Icons/Home-icons/hero-icons/Transaction.svg",
        title: "Transaction",
        name:"Joel Kenley",
        amount: "-$68.00"
    },
    {
        icon:"assets/images/Icons/Home-icons/hero-icons/Transaction.svg",
        title: "Transaction",
        name:"Mark Smith",
        amount: "-$68.00"
    },
    {
        icon:"assets/images/Icons/Home-icons/hero-icons/Transaction.svg",
        title: "Transaction",
        name:"Lenen Roy",
        amount: "-$68.00"
    },
    ]
    let exchange = [{
        icon : "assets/images/Icons/Home-icons/hero-icons/indian-flag.svg",
        countryName:"IND",
        curncy : "Indian Rupees",
        amount: "5,000"
    },
    {
        icon : "assets/images/Icons/Home-icons/hero-icons/US-flag.svg",
        countryName:"USA",
        curncy : "United States Dollar",
        amount: "12,000"
    }
    ]
    let currencyIcons = [ {icon:"assets/images/Icons/Home-icons/hero-icons/s-dollar.svg"}
        ,{icon:"assets/images/Icons/Home-icons/hero-icons/euro.svg"}
        ,{icon:"assets/images/Icons/Home-icons/hero-icons/Bitcoin.svg"},
        {icon:"assets/images/Icons/Home-icons/hero-icons/daimond.svg"}];
    return (
    <div className='ss-homeHero white-space'>
        <div className='ss-descriptionDiv'>
            <div className='LexendLight ss-firstDiv'>
                <img src="assets/images/Icons/Home-icons/hero-icons/check-badge.svg" alt="check-badge"/>
                <p>No LLC Required, No Credit Check.</p>
            </div>
            <div className='ss-headingContainer'>
                <h1 className='LexendMedium'>Welcome to YourBank Empowering Your <span>Financial Journey </span></h1>
            </div>
            <p className='LexendLight'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
            <button className='LexendRegular'><NavLink to="/signUp">Open Account</NavLink></button>
        </div>
        <div className='ss-exchangeContainer'>
            <div className='ss-exchange'> 
                <p className='LexendMedium ss-title'>Your Transactions</p>
                <div className='ss-transactions'>
                    <div className='ss-transactionsContainer'>
                        {list.map((trans , index) => (
                        <div className='ss-transaction' key={index}>
                        <div className='ss-transaction-info'>
                            <div className='ss-iconContainer'>
                                <img src={trans.icon} alt="transaction-icon"/>
                            </div>
                            <div className='ss-transaction-info-des'>
                                <p className='LexendLight ss-transaction-info-des-title'>{trans.title}</p>
                                <p className='LexendRegular ss-transaction-info-des-name'>{trans.name}</p>
                            </div>
                        </div>
                        <span className='LexendMedium '>{trans.amount}</span>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='ss-abstractImg'>
                    <div className='ss-abstractImg-container'>
                        <img src="assets/images/AbstractDesign/AbstractArrows.png" alt="abstract-img" />
                    </div>
                </div>
                <div className='ss-income'>
                    <div className='ss-iconContainer'>
                        <img src="assets/images/Icons/Home-icons/hero-icons/plus.svg" alt="plus-icon"/>
                    </div>
                    <div className='ss-income-info'>
                        <p className='LexendRegular ss-income-info-amount'>+ $5000,00</p>
                        <p className='LexendLight ss-p'>Monthly Income</p>
                    </div>
                </div>
                <div className='ss-moneyExchange'>
                <p className='LexendMedium ss-title'>Money Exchange</p>
                <div className='ss-exchangeTable'>
                    {exchange.map((c,index) => (
                        <div className='ss-exchangeTable-item' key={index}>
                            <div className={`ss-exchangeTable-item-info ${index == 0 ? "ss-first" : ""}`}>
                                <div className='ss-contry'>
                                    <img src={c.icon} alt="indian flag" className='ss-flag'/>
                                    <span className='LexendRegular ss-contryName'>{c.countryName}</span>
                            </div>
                            <p className='LexendLight ss-cruncy'>{c.curncy}</p>
                        </div>
                        <p className={`LexendMedium ss-amount ${index == 0? " ss-first" : ""}`}>{c.amount}</p>
                    </div>
                    ))}
                </div>
                <button className='LexendRegular ss-exchangeButton'>Exchange</button>
                </div>
            </div>
            <div className='ss-supportedCurrencyContainer'>
                <div className='ss-supportedCurrency'>
                <p className='LexendRegular ss-supportedCurrencyTitle'>Supported Currency</p>
                <div className='ss-currContainer'>{currencyIcons.map((curr, index) => (
                    <div className='ss-currIconContainer' key={index}>
                        <img src={curr.icon} alt={`icon-${index}`} className='ss-currIconContainerIcon'/>
                    </div>
                ))}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero
