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
              width={80}
              height={100}
              src="https://png.pngtree.com/png-vector/20240115/ourmid/pngtree-beige-woman-blazer-png-image_11438644.png"
              alt="clothes"
            />
            <h6>Пиджак удлиненный</h6>
            <h6>от 850 сом</h6>
          </div>
          <div className="block">
            <img
              width={80}
              height={100}
              src="https://wosk1147.ru/pictures/product/big/30396_big.JPG"
              alt="clothes1"
            />
            <h6>Пиджак короткий</h6>
            <h6>от 780 сом</h6>
          </div>{" "}
          <div className="block">
            <img
              width={80}
              height={100}
              src="https://cdn1.gum.ru/upload/iblock/cce/d5125808cb3bcc65cfb9adf44569768d.jpg"
              alt="clothes2"
            />
            <h6>Жилетка классическая</h6>
            <h6>от 750 сом</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clothes;
