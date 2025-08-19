import React, { useState } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import IconShape from "../iconShape/IconShape";
import "./ProductsSection.css";

const ProductsSection = () => {
  const [userType, setUserType] = useState('Individuals');


  const productsForIndividuals = [
    {
      title: "Checking Accounts",
      description:
        "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
      icon: "assets/images/Icons/briefcase.svg"
    },
    {
      title: "Savings Accounts",
      description:
        "Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
      icon: "assets/images/Icons/archive-box.svg"
    },
    {
      title: "Loans and Mortgages",
      description:
        "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
      icon: "assets/images/Icons/banknotice.svg"
    },
  ];

  const productsForBusinesses = [
    {
      title: 'Business Checking Accounts',
      description: 'Access your business funds with ease through our business checking account options. Enjoy features like online banking, mobile access, and customized business solutions.',
      icon: "assets/images/Icons/briefcase.svg"
    },
    {
      title: 'Business Savings Accounts',
      description: 'Grow your business with our tailored savings solutions and competitive interest rates. Flexible options to suit your business’s financial needs.',
      icon: "assets/images/Icons/archive-box.svg"
    },
    {
      title: 'Business Loans and Mortgages',
      description: 'Expand your business with our loan and mortgage solutions. Get the financing you need with personalized terms and expert advice from our loan officers.',
      icon: "assets/images/Icons/banknotice.svg"
    },
  ];


  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="rh-products-section white-space section-MarginBottom">
      <SectionTitle
        titlewhite="Our"
        titlegreen=" Products"
        filter={true}
        paragraph="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations."
        reverse={false}
        userType={userType}
        handleUserTypeChange={handleUserTypeChange}
      />

      <div className="rh-products-cards">
        {(userType === 'Individuals' ? productsForIndividuals : productsForBusinesses).map((product) => (
          <div key={product.title} className="rh-product-card">
            <IconShape icon={product.icon} size={80} className="rh-icon-center" />
            <h2 className='LexendRegular'>{product.title}</h2>
            <p className='LexendLight'>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;