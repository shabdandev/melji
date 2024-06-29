import React from "react";
import "./uslugi.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import shel from "../../components/image/shelko.jpg";
import marki from "../../components/image/marki.jpg";
import birki from "../../components/image/birki.jpg";
import eti from "../../components/image/eti.jpeg";
import kon from "../../components/image/kon.jpeg";

const Uslugi = () => {
  return (
    <>
      <div className="container">
        <div className="uslugi">
          <div className="texttt">
            <h1>НАШИ УСЛУГИ</h1>
          </div>
          <div className="cards">
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  1:
                </Typography>
                <Typography variant="h5" component="div">
                  Ваша модель
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Вы отправляете фотографии желаемой модели.
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  2:
                </Typography>
                <Typography variant="h5" component="div">
                  Разработка лекала
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Конструкторы разрабатывают лекала вашей модели.
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  3:
                </Typography>
                <Typography variant="h5" component="div">
                  Пошив образца
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Отшиваем пробный образец по вашим требованиям.
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  4:
                </Typography>
                <Typography variant="h5" component="div">
                  Отправка образца
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Отправляем пробный образец через авиа карго, сдэк и тд, на
                  ваше усмотрение.
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  5:
                </Typography>
                <Typography variant="h5" component="div">
                  Закупка ткани
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Закупаем ткани, фурнитуры с Вашим онлайн-учатием
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  6:
                </Typography>
                <Typography variant="h5" component="div">
                  Пошив партии
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Запуск производства под контролем наших технологов.
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  7:
                </Typography>
                <Typography variant="h5" component="div">
                  Контроль качества
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Отдел ОТК проверяет на брак и готовит к отправке товар
                </Typography>
              </CardContent>
            </div>
            <div className="card">
              <CardContent className="card_c">
                <Typography
                  sx={{ fontSize: "27px", color: "#000", fontWeight: "bold" }}
                >
                  8:
                </Typography>
                <Typography variant="h5" component="div">
                  Отправка партии
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Партия продукции отправляется клиенту.
                </Typography>
              </CardContent>
            </div>
          </div>
          <div className="P">
            <h2>Что мы предлагаем</h2>
          </div>
          <div className="cards">
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image={shel}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Шелкография
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Шелкография – это разновидность трафаретной печати, в
                    которой в качестве материала для изготовления печатной формы
                    используются специальные полиэфирные, нейлоновые или
                    металлические сетки малой толщины с высокой частотой
                    расположения нитей
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image="https://adv-f1.ru/wp-content/uploads/2020/12/sybl.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Сублимационная печать
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Сублимационная печать — это современный метод перенесения
                    иллюстрации на ткань, который заключается в том, что краска
                    переносится на материал путем воздействия высокой
                    температуры и давления и буквально "впитывается" в волокна
                    ткани.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image="https://www.card-design.ru/pic/termotransfer.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    DTF печать
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Изображение, нанесенное методом DTF, может состоять из
                    нескольких цветов, а может — быть полноцветным. При печати
                    может использоваться и специальная бумага, но мы печатаем
                    именно на прозрачной пленке: это помогает нам правильно
                    позиционировать термотрансфер на изделии.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image="https://tkac.ru/wp-content/uploads/2017/01/krasiteli-dlya-tkani-1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Полная покраска ткани
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Мы специализируемся на профессиональном окрашивании тканей
                    различных типов, выполняя все необходимые работы на
                    собственной производственной базе, Необходимая технология
                    окрашивания подбирается для каждого конкретного заказа
                    индивидуально.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image="https://i0.wp.com/static.insales-cdn.com/images/articles/1/5270/4224150/301_original.jpg?ssl=1"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Подбор и заказ образцов
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Услуга по подбору и заказу образцов ткани и фурнитуры 2 в 1.
                    Сочетает в себе и услугу по подбору ассортимента ткани и
                    фурнитуры и предоставление образцов. Информация и образцы,
                    полученные в результате работы позволяют иметь полную
                    картину о товаре.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{
                  width: "340px",
                  height: "350px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image={marki}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Маркировка товара
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Маркировка — это контрольно-идентификационный знак (КиЗ),
                    который размещают на упаковке, ярлыке, этикетке или таре.
                    Его может создать только единый оператор маркировки — Центр
                    развития перспективных технологий.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image={birki}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Вшивные бирки
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Вшивные бирки из текстильной ленты вшиваются в шов одежды
                    или другого текстильного изделия. Иначе называются вшивники.
                    Информируют покупателя о свойствах товара, предоставляют
                    рекомендации по уходу за продукцией, несут рекламную
                    функцию.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{ width: "340px", height: "350px", borderRadius: "12px" }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image={eti}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Картонные этикетки
                  </Typography>
                  <Typography variant="body2" color="#000">
                    Картонные — такие этикетки переживут любую транспортировку и
                    дойдут до покупателя в лучшем виде. Это самый популярный вид
                    бирок, так как из картона можно изготовить этикетки любого
                    дизайна и формата. Бумажные — подходят для недорогих товаров
                    или для детской одежды.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="cardss">
              <Card
                sx={{
                  width: "340px",
                  height: "350px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              >
                <CardMedia
                  component="img"
                  width="300px"
                  height="146px"
                  image={kon}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Конструктор
                  </Typography>
                  <Typography variant="body2" color="#000">
                    <div>
                      - разработка конструкции одежды; <br />
                      - градация лекал по размерам; <br />
                      - разработка технического эскиза (рисунка) изделия; <br />
                      - разработка дизайна одежды; <br />- разработка
                      технической документации.
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="text22">
          <h2>Остались вопросы?</h2>
          <h4>напишите нам в месенджерах</h4>
        </div>
      </div>
    </>
  );
};

export default Uslugi;
