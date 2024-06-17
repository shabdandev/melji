import React from "react";
import "./footer.css";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="textt">
          <h3>
            Наши менеджеры всегда на связи с Заказчиками во всех этапах
            сотрудничества с нами.
          </h3>
          <div className="tag">
            <a href="tel:+996708171232">+996708171232</a>
            <a href="tel:+996708171232">+996708171232</a>
          </div>
          <div className="wh">
            <Button
              sx={{
                width: "180px",
                height: "40px",
                borderRadius: "8px",
              }}
              variant="contained"
              color="success"
              endIcon={<WhatsAppIcon />}
            >
              <a
                style={{
                  color: "white",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
                href="https://wa.me/+996708171232"
              >
                WHATSAPP
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="addres">
        <h3>Наш адрес:</h3>
        <a href="">г.Бишкек ул.Ч.Айтматова 59</a>
      </div>
    </div>
  );
};

export default Footer;
