import { Box, Button, TextField } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SectionLast = () => {
  return (
    <div className="container">
      <div className="sectionLast">
        <div className="text22">
          <h2>Остались вопросы?</h2>
          <h4>напишите нам в месенджерах</h4>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Button
            className="tele"
            sx={{
              width: "180px",
              height: "40px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            <div
              className=""
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <a
                style={{ color: "black", letterSpacing: "2px" }}
                href="https://t.me/+996999317517"
              >
                TELEGRAM
              </a>
              <button
                style={{
                  color: "blue",
                  background: "none",
                  fontSize: "8px",
                }}
              >
                <TelegramIcon />
              </button>
            </div>
          </Button>
          <Button
            sx={{
              width: "180px",
              height: "40px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            <div
              className=""
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <a
                style={{ color: "black", letterSpacing: "2px" }}
                href="https://www.instagram.com/shveinyi_kg/"
              >
                INSTAGRAM
              </a>
              <button
                style={{
                  color: "rgba(211, 6, 115, 0.966)",
                  background: "none",
                  fontSize: "8px",
                }}
              >
                <InstagramIcon />
              </button>
            </div>
          </Button>
          <Button
            sx={{
              width: "180px",
              height: "40px",
            }}
            variant="outlined"
          >
            <div
              className=""
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <a
                style={{
                  color: "black",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
                href="https://wa.me/+996999317517"
              >
                WHATSAPP
              </a>
              <button
                style={{ color: "green", background: "none", fontSize: "8px" }}
              >
                <WhatsAppIcon />
              </button>
            </div>
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SectionLast;
