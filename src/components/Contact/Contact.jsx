import React from "react";
import "./contact.css";
import SectionLast from "../Section/Section/SectionLast";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="con">
          <h3>ШВЕЙНЫЙ ДИЗАЙН</h3>
        </div>
        <div className="img1">
          <img
            width={360}
            height={150}
            src="https://kartinki.pics/uploads/posts/2021-07/1626298108_44-kartinkin-com-p-shveinii-fon-krasivo-49.jpg"
            alt="img1"
          />
        </div>
        <div className="texppp">
          <h1>КОНТАКТЫ</h1>
        </div>
      </div>
      <SectionLast />
    </div>
  );
};

export default Contact;
