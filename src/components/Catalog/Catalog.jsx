import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./catalog.css";

const Catalog = () => {
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
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/04a/g07gpzct27dhoumhr0cpv19sp1j05rjg.webp",
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
      <div className="catal">
        <h1>КАТАЛОГ</h1>
      </div>
      <div className="h1">
        <h2>ЧТО МЫ ШЬЕМ</h2>
      </div>
      <div className="slider">
        <div className="slidd">
          <Slider {...settings}>
            {images3.map((el, id) => (
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
        <div className="slidd">
          <Slider {...settings}>
            {images.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "390px", height: "360px" }}
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
                    height: "370px",
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
            {images4.map((el, id) => (
              <div className="" key={id}>
                <img
                  style={{ width: "390px", height: "450px" }}
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
      <div className="text22">
        <h2>Остались вопросы?</h2>
        <h4>напишите нам в месенджерах</h4>
      </div>
    </div>
  );
};

export default Catalog;
