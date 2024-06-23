import React from "react";
import "./section.css";

const Section = () => {
  return (
    <div className="container">
      <div className="section">
        <h3>ШВЕЙНЫЙ ДИЗАЙН</h3>
        <h4>ШВЕЙНАЯ ФАБРИКА</h4>
        <div className="img1">
          <img
            style={{ objectFit: "cover" }}
            width={350}
            height={130}
            src="https://img.freepik.com/premium-photo/fashion-designer-creates-clothes-and-develops-future-wear-collection-in-d-modeling-program-male_662214-382046.jpg"
            alt="img1"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
