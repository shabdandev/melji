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
          <h4>напишите нашему менеджеру</h4>
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
            sx={{
              width: "180px",
              height: "40px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
            variant="contained"
            color="success"
            endIcon={<TelegramIcon />}
          >
            <a
              style={{ color: "white", letterSpacing: "2px" }}
              href="https://t.me/+996999317517"
            >
              TELEGRAM
            </a>
          </Button>
          <Button
            sx={{
              width: "180px",
              height: "40px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
            variant="contained"
            color="success"
            endIcon={<InstagramIcon />}
          >
            <a
              style={{ color: "white", letterSpacing: "2px" }}
              href="https://www.instagram.com/cross01kg/"
            >
              INSTAGRAM
            </a>
          </Button>
          <Button
            sx={{
              width: "180px",
              height: "40px",
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
        </Box>
      </div>
    </div>
  );
};

export default SectionLast;
