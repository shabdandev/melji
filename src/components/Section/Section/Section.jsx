import React from "react";
import "./section.css";

const Section = () => {
  return (
    <div className="container">
      <div className="section">
        <h3>
          <span>MELGI</span> ШВЕЙНАЯ ФАБРИКА
        </h3>
        <div className="img1">
          <img
            style={{ objectFit: "cover" }}
            width={360}
            height={130}
            src="https://primamedia.ru/f/big/931/930890.jpg"
            alt="img1"
          />
        </div>
        <div className="section_p">
          <p>
            Швейная фабрика <span>Melji</span> специализируется на пошиве
            женской одежды второго слоя. Мы производим продукцию "под ключ" с
            отправкой во все страны СНГ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
