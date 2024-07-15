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
        "https://i.pinimg.com/736x/eb/21/b9/eb21b9554c46bd6de412477ec08d9bea.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/2f/20/f9/2f20f9bb7f7a424e70bcc81592cf25a1.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/c0/2f/c3/c02fc343fe2c49b310c98b4751ac9141.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/c1/c4/b2/c1c4b276c10647c12b6fbcf0289126d0.jpg",
    },
  ];

  const images1 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/50/c4/b8/50c4b835f9f75ffbf377f7b5ab30a23c.jpg",
    },

    {
      imgPath:
        "https://i.pinimg.com/736x/14/e4/eb/14e4ebb8e5908cb460cbd901dcd5842a.jpg",
    },
  ];

  const images2 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/22/9b/cb/229bcb77b0129faa7f4a278d478aa30a.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/4a/b4/08/4ab408893e342785cc988a10f61b978e.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/2b/a2/66/2ba266888e7dbde80db804ffb21e30dc.jpg  ",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/76/ed/6f/76ed6fa17cda73adda57553681f6dd30.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/99/51/f9/9951f9347863b932c73e630495b87fa9.jpg",
    },
  ];

  const images3 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/59/97/4a/59974af6160a6b8ac77707547969a7dc.jpg",
    },

    {
      imgPath:
        "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/t/15/be33f1c8-5c7e-4e7d-a30e-a53f99925b38.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/e7/56/20/e75620111389779ca76fa2aadde9fb85.jpg  ",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/7a/e7/87/7ae787220a166286bc10bc50da91e596.jpg",
    },
    {
      imgPath:
        "https://mynewshirt.ru/image/cache/products/WCPWLS29-A01/WCPWLS29-A01-01-big-400x400.jpg",
    },
  ];

  const images5 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/b8/45/76/b84576fe3e368d8215c72fe6ba9db6d6.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/f6/9c/b2/f69cb2cd7e9cebc3d991495e94f42b10.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/58/ce/23/58ce23917981475351e0112b841de2ad.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/e2/01/0f/e2010fd47b5641f0cd5cff1d28007999.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/59/d0/05/59d005b2efdea166aaac144811904471.jpg",
    },
  ];

  const images6 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/ea/bf/2a/eabf2a1d92c01e1c239bd8e2de1d0af0.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/de/e2/24/dee224748f01ae6f24a4b0c3e04410ea.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/90/78/bb/9078bbe9edb1ac076b062a9eee641d5c.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/53/f6/fd/53f6fd9053a674f2c22cc0474044a6be.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/736x/b9/9d/47/b99d472594525526e0fa16779433bb5d.jpg",
    },
  ];

  const images7 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/54/88/55/5488557d8f31849ead353fe0a45726cd.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/e4/c6/6c/e4c66c5e1fbb05b042db9c4e4fe5f05f.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/736x/61/88/fc/6188fc5415f30b2c97283dad27d6bcc3.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/d0/1e/7e/d01e7e4a435130c4ec53431884c2dbed.jpg",
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
                  style={{
                    width: "390px",
                    height: "400px",
                  }}
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
                  style={{ width: "370px", height: "360px" }}
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
                  style={{
                    width: "360px",
                    height: "400px",
                    objectFit: "fill",
                  }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slidd">
          <Slider {...settings}>
            {images2.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{
                    width: "370px",
                    height: "490px",
                  }}
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
        <div className="slidd">
          <Slider {...settings}>
            {images6.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "370px", height: "430px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slidd">
          <Slider {...settings}>
            {images7.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "390px", height: "400px" }}
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
