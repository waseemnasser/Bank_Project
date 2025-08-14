import  { useState } from "react";
import IconShape from "../iconShape/IconShape";
import "./ProductsSection.css";
import archiveIcon from "/assets/images/Icons/archive-box.svg";
import banknoticeIcon from "/assets/images/Icons/banknotice.svg";
import briefcaseIcon from "/assets/images/Icons/briefcase.svg";
const ProductsSection = () => {
  const [filter, setFilter] = useState("individuals");

  const individualCards = [
    {
      title: "Checking Accounts",
      description:
        "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
      icon: briefcaseIcon,
    },
    {
      title: "Savings Accounts",
      description:
        "Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
      icon: archiveIcon,
    },
    {
      title: "Loans and Mortgages",
      description:
        "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
      icon: banknoticeIcon,
    },
  ];

  const businessCards = [
    {
      title: "Business Accounts",
      description:
        "Manage your company finances efficiently with our tailored business accounts.",
      icon: briefcaseIcon,
    },
    {
      title: "Business Loans",
      description:
        "Get the capital you need to grow your business with flexible terms.",
      icon: archiveIcon,
    },
    {
      title: "Merchant Services",
      description:
        "Accept payments and streamline your transactions with ease.",
      icon: banknoticeIcon,
    },
  ];

  const displayedCards =
    filter === "individuals" ? individualCards : businessCards;

  return (
    <section className="rh-products-section">
      <h2 className="rh-products-title LexendMedium">
        Our <span>Products</span>
      </h2>
      <p className="rh-products-description LexendLight">
        Discover a range of comprehensive and customizable banking products at
        YourBank, designed to suit your unique financial needs and aspirations
      </p>
      <div className="rh-products-filter LexendRegular" >
        <button
          className={filter === "individuals" ? "rh-active" : ""}
          onClick={() => setFilter("individuals")}
        >
          For Individuals
        </button>
        <button
          className={filter === "businesses" ? "rh-active" : "" }
          onClick={() => setFilter("businesses")}
        >
          For Businesses
        </button>
      </div>
      <div className="rh-products-cards">
        {displayedCards.map((card, index) => (
          <div key={index} className="rh-product-card">
            <IconShape icon={card.icon} size={80} className="rh-icon-center" />
            <h3 className="LexendRegular">{card.title}</h3>
            <p className="LexendLight">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
