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
              <a style={{ color: "black" }} href="tel:+996999417617">
                0999417617
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
              fontSize: "14px",
              letterSpacing: "1px",
              fontWeight: "bold",
            }}
            href="https://wa.me/+996999317517"
          >
            Напишите в WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
