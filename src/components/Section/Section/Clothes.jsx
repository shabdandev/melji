import React from "react";
import "./section.css";

const Clothes = () => {
  return (
    <>
      <div className="container">
        <div className="clothes_n">
          <h3>НАША СПЕЦИАЛИЗАЦИЯ</h3>
          <h5>КОСТЮМНАЯ ГРУППА</h5>
        </div>
        <div className="clothes">
          <div className="block">
            <img
              width={125}
              height={135}
              src="https://wosk1147.ru/pictures/product/middle/38267_middle.png"
              alt="clothes"
            />
            <h6>Пиджак удлиненный</h6>
            <h6>от 850 сом</h6>
          </div>
          <div className="block">
            <img
              width={125}
              height={135}
              src="https://wosk1147.ru/pictures/product/big/30396_big.JPG"
              alt="clothes1"
            />
            <h6>Пиджак короткий</h6>
            <h6>от 780 сом</h6>
          </div>{" "}
          {/* <div className="block">
            <img
              width={90}
              height={115}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvY9fZd8vgE8wIWHiN01qfWbc8GruAe5jakw&s"
              alt="clothes2"
            />
            <h6>Жилетка классическая</h6>
            <h6>от 750 сом</h6>
          </div> */}
          {/* <div className="block">
            <img
              width={125}
              height={135}
              src="https://image.made-in-china.com/202f0j00KIrYVLZEYvkP/New-Mens-Military-Shirt-Men-Long-Sleeve-Cargo-Shirts-100-Cotton-Casual-Solid-Shirt-Male-Pocket-Work-Shirt.webp"
              alt="clothes2"
            />
            <h6>Рубашка классическая</h6>
            <h6>от 685 сом</h6>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Clothes;
