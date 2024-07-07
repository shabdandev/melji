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
            src="https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5-eyelet-trim--FRDR23G72900_PM2_Front%20view.jpg"
            alt="cl"
          />
          <h6>Платья</h6>
          <h6>от 600 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://www.timeout.ru/wp-content/uploads/2021/09/hmgoepprod.png"
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
            src="https://melji.kg/images/banner2.png"
            alt="cl3"
          />
          <h6>Брюки</h6>
          <h6>от 650 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://britanshop.ru/upload/iblock/5e3/v75r7fqajkkkl9udeddgaja8s6fb8jw1.png"
            alt="cl4"
          />
          <h6>Худи</h6>
          <h6>от 700 сом</h6>
        </div>
        <div className="block">
          <img
            width={125}
            height={120}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3zidwHM2DUOUHRSqx5tGXH0nkO805zq85RPKuauAfIUMyqy-dG3HveN8jKxBWK-WMG8&usqp=CAU"
            alt="cl5"
          />
          <h6>Спортивные двойки</h6>
          <h6>от 1400 сом</h6>
        </div>
      </div>
    </div>
  );
};

export default Clothesed;
