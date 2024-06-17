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
          <h3>
            <span>MELGI</span> ШВЕЙНАЯ ФАБРИКА
          </h3>
        </div>
        <div className="img1">
          <img
            width={360}
            height={150}
            src="https://kartinki.pics/uploads/posts/2021-07/1626298108_44-kartinkin-com-p-shveinii-fon-krasivo-49.jpg"
            alt="img1"
          />
        </div>
        <div className="texpp">
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>КАК МНЕ УЗНАТ СТОИМОСТЬ ПОШИВА</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  {" "}
                  Для уточнения стоимости конечной продукции, вам необходимо
                  отправить несколько качественных фотографий желаемой модели и
                  количество для первой партии. Далее наши менеджеры смогут вам
                  сделать расчёт.
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
            <Typography>СПОСОБЫ И УСЛОВИЯ ОПЛАТЫ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="acc">
                <h3>
                  Существует множество вариантов оплаты со стран СНГ. При
                  оформлении заказа, мы обязательно проинструктируем вас какой
                  вариант для вас оптимальный.
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
                  <br />- Срок пошива партии продукции занимает в среднем от 3
                  до 7 дней (при партии 1000 ед.)
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
                  сдачи продукции в транспортную компанию. Стоимость доставки
                  40-50 руб за 1 кг.
                  <br />- Авиа доставка, cрок доставки 1-2 дня. Стоимость
                  доставки 200 руб за 1 кг.
                </h3>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="text222">
          <h2>Остались вопросы?</h2>
          <h4>напишите нашему менеджеру</h4>
        </div>
        <div className="btn">
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
              href="https://wa.me/+996708171232"
            >
              WHATSAPP
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
            endIcon={<TelegramIcon />}
          >
            <a
              style={{ color: "white", letterSpacing: "2px" }}
              href="https://t.me/+996708171232"
            >
              TELEGRAM
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
