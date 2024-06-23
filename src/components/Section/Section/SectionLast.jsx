import { Box, Button, TextField } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SectionLast = () => {
  return (
    <div className="container">
      <div className="sectionLast">
        {/* <div className="text">
          <h4>
            ОСТАВЬТЕ ЗАЯВКУ <br /> И МЫ С ВАМИ СВЯЖЕМСЯ
          </h4>
          <img
            width={250}
            height={80}
            src="https://study-baltic.ru/wp-content/uploads/2017/05/%D0%9E%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80-%D1%82%D1%83%D1%80%D0%B0-1.png"
            alt=""
          />
        </div> */}
        {/* <div className="inputs">
          <TextField id="standard-basic" label="Имя:" variant="standard" />
          <TextField
            id="standard-basic"
            label="Номер телефона:"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Текстовое поле:"
            variant="standard"
          />
          <Button variant="outlined">Отправить</Button>
        </div> */}
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
