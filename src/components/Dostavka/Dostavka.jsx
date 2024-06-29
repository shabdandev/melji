import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./dostav.css";
import { Button } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Dostavka() {
  return (
    <div className="container">
      <div className="dostav">
        <div className="dos">
          <h1>ОПЛАТА И ДОСТАВКА</h1>
        </div>
        <div className="text_p">
          <h3>ЧАСТЫЕ ВОПРОСЫ</h3>
        </div>
        <Accordion>
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
                </h3>
                <h3 style={{ paddingTop: "20px" }}>
                  {" "}
                  1000 ЕД <br />
                  ‌ФУТБОЛКИ, ЛОНГСЛИВЫ, ТОПЫ
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
        <Accordion>
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
                  Конечная цена изделия будет известна после пошива образца.{" "}
                  <p style={{ padding: "20px 0" }}>
                    Мы сможем посчитать расход <br /> ткани и фурнитуры, а также
                    просчитать количество <br /> операций по пошиву изделия!
                  </p>
                  <p>
                    Разработка: <br />
                    -Изготовление лекал <br /> -Пошив образца <br /> -Ткань +
                    фурнитура
                    <br /> -Конструирование изделия (доработка)
                  </p>
                  <p style={{ padding: "20px 0" }}> 5000₽ </p> Далее, градация
                  каждого размера от 1000₽ до 2500₽ (в зависимости от модели){" "}
                  <p style={{ paddingTop: "20px" }}>
                    Оплату возможно произвести на банковскую карту
                  </p>
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              КАК МНЕ УЗНАТ СТОИМОСТЬ <br /> ПОШИВА ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  Для уточнения стоимости конечной продукции, вам необходимо
                  отправить несколько качественных фотографий желаемой модели и
                  количество для первой партии.{" "}
                  <p style={{ paddingTop: "20px" }}>
                    Далее наши менеджеры смогут вам сделать расчёт.
                  </p>
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>СПОСОБЫ И УСЛОВИЯ ОПЛАТЫ ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  Существует множество вариантов оплаты со стран СНГ.
                  <p style={{ paddingTop: "15px" }}>
                    При оформлении заказа, мы обязательно проинструктируем вас
                    какой вариант для вас оптимальный.
                  </p>
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>СРОК ПОШИВА ПРОДУКЦИИ ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  - Изготовление лекала и пошив образца занимает в среднем около
                  3-4 рабочих дней;
                  <br />
                  <p style={{ paddingTop: "15px" }}>
                    - Срок пошива партии продукции занимает в среднем от 3 до 7
                    дней (при партии 1000 ед.)
                  </p>
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>СПОСОБЫ И СТОИМОСЬ ДОСТАВКИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  - Авто доставка (карго), средний срок 5-10 дней с момента
                  сдачи продукции в транспортную компанию.
                  <p style={{ padding: "15px 0" }}>
                    Стоимость доставки 40-50 руб за <br /> 1 кг.
                  </p>
                  - Авиа доставка, cрок доставки 1-2 дня. Стоимость доставки 200
                  руб за 1 кг.
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="text22">
        <h2>Остались вопросы?</h2>
        <h4>напишите нам в месенджерах</h4>
      </div>
    </div>
  );
}
