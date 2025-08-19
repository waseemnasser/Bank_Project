import React, { useState } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import IconShape from "../iconShape/IconShape";
import "./ProductsSection.css";
import { productsForBusinesses } from '../../data/OurProducts';
import { productsForIndividuals } from '../../data/OurProducts';

const ProductsSection = () => {
  const [userType, setUserType] = useState('Individuals');

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