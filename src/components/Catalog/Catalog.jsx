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
        "https://4kraski.ru/assets/images/products/29966/8fed8f14240caec958cd8801c7ba7d0a.png",
    },
    {
      imgPath:
        "https://shop.navi.gg/files/resized/products/navi40884.650x622.png",
    },
    {
      imgPath:
        "https://www.stan.su/upload/resize_cache/iblock/c98/700_700_140cd750bba9870f18aada2478b24840a/c98eb419bd393b8aa01062896028babc.png",
    },
    {
      imgPath: "https://www.stan.su/upload/iblock/045/17_20-_1_.png",
    },
    // {
    //   imgPath:
    //     "https://i.pinimg.com/564x/e0/35/a9/e035a957ca0be88020f1ac43fdac2515.jpg",
    // },
    {
      imgPath:
        "https://giftprime.ru/wp-content/uploads/2023/06/f8499982c409e4371e12d2021747de9d.png",
    },
  ];

  const images1 = [
    {
      imgPath:
        "https://tex-print.ru/image/catalog/products/fut/wpremium/2-500x500.png",
    },
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
        "https://i.pinimg.com/736x/94/1f/46/941f4648bbac94b837aba7232d5ec4d2.jpg",
    },
    {
      imgPath:
        "https://images.prom.ua/4911811552_w640_h640_zhiletka-muzhskaya-klassicheskaya.jpg",
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
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/83c/wh1mnhefootodbxj1x74lb8tjchnm2xd.webp",
    },
    {
      imgPath:
        "https://www.stimma.com.ua/upload/resize_cache/iblock/b3a/530_780_1/crvw2pjv01q8sanrft76h7nf3lazfnpt.png",
    },
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/14b/5puktxofgaxqca4mqdhrnt7crgdwau92.webp",
    },
  ];

  return (
    <div className="container">
      <div className="catal">
        <h3>ШВЕЙНЫЙ ДИЗАЙН</h3>
      </div>
      <div className="img1">
        <img
          width={360}
          height={150}
          src="https://kartinki.pics/uploads/posts/2021-07/1626298108_44-kartinkin-com-p-shveinii-fon-krasivo-49.jpg"
          alt="img1"
        />
      </div>
      <div className="texp_p">
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
    </div>
  );
};

export default Catalog;
