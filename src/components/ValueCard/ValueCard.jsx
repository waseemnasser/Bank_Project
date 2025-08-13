import './ValueCard.css';
import { OurValuesData } from "../../data/OurValuesData";
import React, { useState, useEffect } from "react";


function ValueCard() {
    const [ValueCards, setCards] = useState([]);

    useEffect(() => {
        const storageData = localStorage.getItem("OVcards");
        if (storageData) {
            setCards(JSON.parse(storageData))
        } else {
            localStorage.setItem("OVcards", JSON.stringify(OurValuesData));
            setCards(JSON.stringify(localStorage.getItem("OVcards")));
        }
    }, [])
    return (
        <div className='rh-value-Container'>
            {ValueCards.map((item, index) => (
                <div key={index} className='rh-ValueCard'>
                    <h3 className='LexendMedium rh-h3'>{item.title}</h3>
                    <p className='LexendLight rh-p'>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
export default ValueCard;