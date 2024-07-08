import React from "react";
import "./section.css";

const Clothesed = () => {
  return (
    <div className="container">
      <div className="clothesed_n">
        <h3>ГРУППА БАЗОВОЙ ОДЕЖДЫ</h3>
      </div>
      <div className="clothesed">
        <div className="block">
          <img
            width={125}
            height={130}
            src="https://i.pinimg.com/564x/22/9b/cb/229bcb77b0129faa7f4a278d478aa30a.jpg"
            alt="cl"
          />
          <h6>Платья</h6>
          <h6>от 600 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={150}
            src="https://i.pinimg.com/564x/25/0b/05/250b057ed7dbfa862fd7ed935dc679a0.jpg"
            alt="cl1"
          />
          <h6>Рубашки</h6>
          <h6>от 500 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://melji.kg/images/slider5/IMG_2233.JPG"
            alt="cl2"
          />
          <h6>Лонгслив</h6>
          <h6>от 450 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://main-cdn.sbermegamarket.ru/big2/hlr-system/-93/808/960/115/234/8/100030236082b1.jpg"
            alt="cl3"
          />
          <h6>Брюки</h6>
          <h6>от 650 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://i.pinimg.com/564x/e5/e1/1a/e5e11a472bd8d86135a5d94a8f6d866e.jpg"
            alt="cl4"
          />
          <h6>Худи</h6>
          <h6>от 700 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://i.pinimg.com/564x/a4/48/f5/a448f5a401031dd6a15edf41a8c751f7.jpg"
          />
          <h6>Спортивные двойки</h6>
          <h6>от 1400 сом</h6>
        </div>
      </div>
    </div>
  );
};

export default Clothesed;
