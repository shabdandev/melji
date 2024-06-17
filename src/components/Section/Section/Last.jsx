import React from "react";
import "./section.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Last = () => {
  return (
    <div className="container">
      <div className="last">
        <h3>Наше производство</h3>
        <div className="last_img">
          <img
            src="https://avatars.dzeninfra.ru/get-zen_doc/4355093/pub_60afa2157c719a6cb26489d7_60afa3dad606f666c45a8ef2/scale_1200"
            alt="last_img"
          />
        </div>
      </div>
      <div className="last_section">
        <h3>Частые вопросы</h3>
      </div>
      <div className="ht">
        <Accordion sx={{ width: "330px" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>МИНИМАЛЬНАЯ ПАРТИЯ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  500 ЕД <br />
                  ‌ПИДЖАКИ, БРЮКИ, ПЛАТЬЯ, РУБАШКИ <br />
                  1000 ЕД <br />
                  ‌ФУТБОЛКИ, ЛОНГСЛИВЫ, ТОПЫ
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "330px" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>ОПЛАТА</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="acc">
              <h3>Мы работаем наличными и безналичному расчету</h3>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "330px" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>НАШИ УСЛОВИЯ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  Конечная цена изделия будет известна после пошива образца Мы
                  сможем посчитать предварительную стоимость изделия.
                  -Изготовление лекало -Пошив образца бесплатно Есть гарантная
                  сумма 10 000₽, это сумма потом добавляется в вашу основную
                  сумму Оплату возможно произвести на банковскую карту или р/с
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Last;
