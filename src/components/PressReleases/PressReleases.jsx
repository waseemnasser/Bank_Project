import { pressData } from "../../data/pressData";
import './PressReleases.css'
import { SectionTitle } from "../SectionTitle/SectionTitle"
import React, { useState, useEffect } from "react";

function PressReleases() {
    const [pressCards, setCards] = useState([])

    useEffect(() => {
        const storageData = localStorage.getItem("PYcards");

        if (storageData) {
            setCards(JSON.parse(storageData))
        } else {
            localStorage.setItem("PYcards", JSON.stringify(pressData));
            setCards(JSON.stringify(localStorage.getItem("PYcards")));
        }
    }, [])

    return (
        <section className="WN-press-releases white-space section-MarginBottom">
            <SectionTitle
                widthtitle={1296}
                titlegreen="Press Releases"
                paragraph="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
            />
            <div className="WN-press-cards">
                {pressCards.map(item => (
                    <div key={item.id} className="WN-press-card">
                        <img src={item.image} alt="card-img" />
                        <h4 className="pressCardTitle LexendRegular">{item.title}</h4>
                        <div className="presssCardDateAndLocation LexendLight">
                            <p className="pressCardLocation">{item.location}</p>
                            <p className="pressCardDate">{item.date}</p>
                        </div>
                        <p className="pressCardDescribe LexendLight">{item.decribe}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default PressReleases;
