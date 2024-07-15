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
              height={95}
              src="https://i.pinimg.com/564x/e7/56/20/e75620111389779ca76fa2aadde9fb85.jpg"
              alt="clothes"
            />
            <h6>Пиджак удлиненный</h6>
            <h6>от 850 сом</h6>
          </div>
          <div className="block">
            <img
              width={68}
              height={91}
              src="https://i.pinimg.com/736x/2e/b3/54/2eb354af6099f70433919d398093a392.jpg"
              alt="clothes1"
            />
            <h6>Пиджак короткий</h6>
            <h6>от 780 сом</h6>
          </div>{" "}
          <div className="block">
            <img
              width={80}
              height={99}
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
