import "./ProtectYou.css";
import { protectData } from "../../data/protectData";
import IconShape from "../iconShape/IconShape"
import React, { useState, useEffect } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

function ProtectYou() {
    const [protectCards, setCards] = useState([])

    useEffect(() => {
        const storageData = localStorage.getItem("PRcards");

        if (storageData) {
            setCards(JSON.parse(storageData))
        } else {
            localStorage.setItem("PRcards", JSON.stringify(protectData));
            setCards(JSON.stringify(localStorage.getItem("PRcards")));
        }
    }, [])
    return (
        <section className="WNprotectYou white-space ProtectYou-MarginBottom">
            <SectionTitle
                titlewhite="How We"
                titlegreen=" Protect You"
                paragraph="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
                widthtitle={1306}
            />
            <div className="protectYouCardsContainer">
                <div className="WNprotectCards">
                    {protectCards.map((item) => (
                        <div key={item.id} className="WNprotectCard">
                            <div className="protectFlex">
                                <IconShape
                                    icon={item.icon}
                                    size={98}
                                    className="protectIcon"
                                />
                                <h4 className="protectYouCardTitle LexendRegular">{item.title}</h4>
                            </div>
                            <p className="protectYouCardDesc LexendLight">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProtectYou
