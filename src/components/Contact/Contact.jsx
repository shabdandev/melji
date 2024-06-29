import React from "react";
import "./contact.css";
import SectionLast from "../Section/Section/SectionLast";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="con">
          <h1>КОНТАКТЫ</h1>
        </div>
      </div>
      <SectionLast />
      <div className="text22">
        <h2>Остались вопросы?</h2>
        <h4>напишите нам в месенджерах</h4>
      </div>
    </div>
  );
};

export default Contact;
