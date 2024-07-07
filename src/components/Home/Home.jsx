import React from "react";
import Clothes from "../Section/Section/Clothes";
import Clothesed from "../Section/Section/Clothesed";
import Last from "../Section/Section/Last";
import Section from "../Section/Section/Section";
import SectionLast from "../Section/Section/SectionLast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CardContent, Typography } from "@mui/material";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
  };

  const images = [
    {
      imgPath:
        "https://unifashion.ru/wp-content/uploads/2019/04/seraya-transformed-300x300.png",
    },
    {
      imgPath:
        "https://giftprime.ru/wp-content/uploads/2023/06/f8499982c409e4371e12d2021747de9d.png",
    },
    {
      imgPath:
        "https://images.prom.ua/4976662917_w640_h640_svitshot-zhenskij-bono.jpg",
    },
    {
      imgPath:
        "https://shop.navi.gg/files/resized/products/navi40884.650x622.png",
    },
    {
      imgPath:
        "https://unifashion.ru/wp-content/uploads/2022/08/9337k-transformed.png",
    },
  ];

  const images1 = [
    {
      imgPath:
        "https://www.stan.su/upload/iblock/313/31347f3a2c6459719dc8c5ed78279f5e.png",
    },
    {
      imgPath:
        "https://www.50kopeek.kiev.ua/upload/xt/go/xtgoyu35qe-ppn6r11gal1m_hpz-dsys.png",
    },
    {
      imgPath:
        "https://www.stan.su/upload/iblock/ac2/ac21c0d75a2b6f70b7365a2110cc0a9c.png",
    },
    {
      imgPath:
        "https://files.toomanygifts.ru/images/media/cache/product_medium/product_image/5dbc/62e1abe63d4a5403995313.png",
    },
  ];

  const images3 = [
    {
      imgPath:
        "https://mynewshirt.ru/image/cache/products/WCPWLS29-A01/WCPWLS29-A01-01-big-400x400.jpg",
    },

    {
      imgPath:
        "https://ae04.alicdn.com/kf/Sda969ff56bf748288b3c6109841d01a44.jpg_480x480.jpg",
    },
  ];

  const images4 = [
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/6e6/lam8wmjy0xpmbc6joo4iqong0o4c8ukl.webp",
    },
    {
      imgPath:
        "https://voentorg.ua/image/cache/catalog/newproducts/58c756d3-6e82-11e6-8134-74d4358b53e8-700x700.png",
    },
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/04a/g07gpzct27dhoumhr0cpv19sp1j05rjg.webp",
    },
    {
      imgPath:
        "https://beastyle.com.ua/content/images/27/480x480l50nn0/52125971069456.png",
    },
  ];

  const images5 = [
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/04a/g07gpzct27dhoumhr0cpv19sp1j05rjg.webp",
    },
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/6e6/lam8wmjy0xpmbc6joo4iqong0o4c8ukl.webp",
    },
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/83c/wh1mnhefootodbxj1x74lb8tjchnm2xd.webp",
    },
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/14b/5puktxofgaxqca4mqdhrnt7crgdwau92.webp",
    },
  ];

  return (
    <div className="container">
      <Section />
      <div className="gl">
        <h2>Наши модели</h2>
      </div>
      <div className="slider">
        <div className="slidd">
          <Slider {...settings}>
            {images3.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "350px", height: "400px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slidd">
          <Slider {...settings}>
            {images.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "350px", height: "360px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slidd">
          <Slider {...settings}>
            {images1.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "350px", height: "370px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="slidd">
          <Slider {...settings}>
            {images4.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "350px", height: "450px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slidd">
          <Slider {...settings}>
            {images5.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "350px", height: "400px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Clothes />
      <Clothesed />

      <div className="ra">
        <h2>Этапы работы</h2>
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
              Отправляем пробный образец через авиа карго, сдэк и тд, на ваше
              усмотрение.
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
              запуск производства под контролем наших технологов.
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

      <Last />
      <SectionLast />
    </div>
  );
};

export default Home;
