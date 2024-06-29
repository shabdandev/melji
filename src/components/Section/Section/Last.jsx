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
        <h4>
          У нас швейное производство полного цикла. Специализируемся на пошиве
          одежды второго слоя.
        </h4>
        <hr style={{ width: "300px" }} />
        <div className="last_bb">
          <h4>
            Заказывая пошив одежды на нашей фабрике, вы получаете качественную
            продукцию по конкурентоспособным ценам. Мы занимаемся производством
            полного цикла от изготовления лекала до отправки готовой партии
            продукции.
          </h4>
        </div>
        <hr style={{ width: "300px" }} />
        <div className="last_gg">
          <h4>Швейный дизайн: ваш бизнец-партнер в швейной индустрии</h4>
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
                  Конечная цена изделия будет известна после пошива образца. Мы
                  сможем посчитать расход ткани и фурнитуры, а также просчитать
                  количество операций по пошиву изделия! <br />
                  <p className="span">
                    Разработка: <br />
                    -Изготовление лекал <br /> -Пошив образца <br /> -Ткань +
                    фурнитура
                    <br /> -Конструирование изделия (доработка)
                  </p>
                  <p className="span"> 5000₽ </p> Далее, градация каждого
                  размера от 1000₽ до 2500₽ (в зависимости от модели){" "}
                  <p className="span">
                    Оплату возможно произвести на банковскую карту
                  </p>
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
