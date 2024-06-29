import React from "react";
import "./footer.css";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="textt">
          <div className="tag">
            <div className="btnn">
              <button>
                <AddIcCallIcon />
              </button>
              <a style={{ color: "black" }} href="tel:+996500661260">
                0500661260
              </a>
            </div>
            <div className="btnn">
              <button style={{ color: "black" }}>
                <AddIcCallIcon />
              </button>
              <a style={{ color: "black" }} href="tel:+996999317517">
                0999317517
              </a>
            </div>
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
                href="https://wa.me/+996999317517"
              >
                WHATSAPP
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="addres">
        <h3>Наш адрес:</h3>
        <a href="">г.Бишкек</a>
      </div>
    </div>
  );
};

export default Footer;
