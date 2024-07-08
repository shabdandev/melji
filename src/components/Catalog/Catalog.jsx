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
        "https://i.pinimg.com/736x/eb/21/b9/eb21b9554c46bd6de412477ec08d9bea.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/736x/8d/9a/95/8d9a954654754a2642240e1bd7292235.jpg",
    },
    {
      imgPath:
        "https://giftprime.ru/wp-content/uploads/2023/06/f8499982c409e4371e12d2021747de9d.png",
    },
    {
      imgPath:
        "https://unifashion.ru/wp-content/uploads/2022/08/9337k-transformed.png",
    },
    {
      imgPath: "https://ir.ozone.ru/s3/multimedia-r/wc1000/6806735307.jpg",
    },
  ];

  const images1 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/50/c4/b8/50c4b835f9f75ffbf377f7b5ab30a23c.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/71/ff/08/71ff086b8732bb7b7ee6c309bfb881d7.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/736x/14/e4/eb/14e4ebb8e5908cb460cbd901dcd5842a.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/78/0b/b5/780bb5c7ed4cfa6c18276cbda3c230f0.jpg",
    },
  ];

  const images2 = [
    {
      imgPath:
        "https://i.pinimg.com/564x/22/9b/cb/229bcb77b0129faa7f4a278d478aa30a.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/5c/17/50/5c17503baa29c45216eb6591d94672f0.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/fb/c8/38/fbc838f662692c9eed369a8e342631e2.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/2b/08/42/2b08422c04820b8dd7b09b1bf2dec678.jpg",
    },
  ];

  const images3 = [
    {
      imgPath:
        "https://roseville.ru/cdn/shop/files/0231214RosevilleAlenushka_01692.jpg?v=1706117748&width=1445",
    },

    {
      imgPath:
        "https://cdn1.gum.ru/upload/iblock/cce/d5125808cb3bcc65cfb9adf44569768d.jpg",
    },
    {
      imgPath:
        "https://png.pngtree.com/png-vector/20240115/ourmid/pngtree-beige-woman-blazer-png-image_11438644.png",
    },
    {
      imgPath:
        "https://mynewshirt.ru/image/cache/products/WCPWLS29-A01/WCPWLS29-A01-01-big-400x400.jpg",
    },
    {
      imgPath:
        "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/t/15/be33f1c8-5c7e-4e7d-a30e-a53f99925b38.jpg",
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
    {
      imgPath:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-93/808/960/115/234/8/100030236082b1.jpg",
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
        "https://i.pinimg.com/564x/b0/c6/f3/b0c6f38fa8e8bcdec77a35124c22ebce.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/0c/2a/f3/0c2af3a6906056e24e2b7791b59105f8.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/25/0b/05/250b057ed7dbfa862fd7ed935dc679a0.jpg",
    },
    {
      imgPath:
        "https://i.pinimg.com/564x/7e/b5/b4/7eb5b4d122b16d1d89ce8c672044b0c1.jpg",
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
                  style={{
                    width: "390px",
                    height: "400px",
                    // objectFit: "cover",
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
        <div className="slidd">
          <Slider {...settings}>
            {images6.map((el, id) => (
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
            {images7.map((el, id) => (
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
      </div>
      <div className="text22">
        <h2>Остались вопросы?</h2>
        <h4>напишите нам в месенджерах</h4>
      </div>
    </div>
  );
};

export default Catalog;
