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
        "https://4kraski.ru/assets/images/products/31139/14101.99-4-1000x1000.jpg",
    },
    {
      imgPath:
        "https://way4you.ua/img/product/96/96455c3c724b8a9f115389488ed646ee/takticheskoe-hudi-tolstovka-kombat-uk-recon-hoodie-l-original-95-4.webp",
    },
    {
      imgPath:
        "https://static.cdek.shopping/images/shopping/af8e74b1f1f446349f3d67ac36d0f6b0.jpg",
    },
    {
      imgPath:
        "https://spinningline.kz/images/products_photo_providers/00257000/00257644/00257644_35675_LARGE.jpg",
    },
    {
      imgPath:
        "https://kkaravaev.com/wa-data/public/shop/products/60/39/13960/images/25469/25469.970.JPG",
    },
    {
      imgPath:
        "https://way4you.ua/img/product/96/96455c3c724b8a9f115389488ed646ee/takticheskoe-hudi-tolstovka-kombat-uk-recon-hoodie-l-original-95-4.webp",
    },
  ];

  const images1 = [
    {
      imgPath:
        "https://tex-print.ru/image/catalog/products/fut/wpremium/2-500x500.png",
    },
    {
      imgPath:
        "https://media.kameron.ua/images/ed/43/a35b655804e4b3996bd8086e5b92.jpg",
    },
    {
      imgPath:
        "https://www.stan.su/upload/resize_cache/iblock/f2c/700_700_140cd750bba9870f18aada2478b24840a/f2c962dc29143880bf0266b55eb02917.png",
    },
    {
      imgPath:
        "https://sport-marafon.ru/upload/files/iblock/elements/900ae28f-3c83-11e3-9fdc-e83935202582/5abbbc79-f73d-11ee-85dc-b42e99c9b482/5abbbc79f73d11ee85dcb42e99c9b482_5b502b3c130b11ef85dcb42e99c9b482.png",
    },
    {
      imgPath:
        "https://goods-photos.static1-sima-land.com/items/4301029/0/700-nw.jpg",
    },
  ];

  const images2 = [
    {
      imgPath:
        "https://elema.by/upload/resize_cache/iblock/e41/6fm83y13tuis0x9gzsw3uma8p16dvh0e/500_750_1/Plate-zhenskoe-5K_1209-siniy-print-_1_.jpg",
    },
    {
      imgPath:
        "https://www.snik.co/system/products/items/images/039/776/408/small/plate-ermanno-firenze?1688376368",
    },
    {
      imgPath:
        "https://www.sashakim.com/upload/resize_cache/iblock/067/370_453_2/9srh632u42qizg1cq9cu8uqgqp3dvfwf.jpg",
    },
    {
      imgPath:
        "https://ae04.alicdn.com/kf/S5631dd067f3d44b394cb39d94217602d5.jpg",
    },
    {
      imgPath:
        "https://cdn1.gum.ru/upload/iblock/678/4d63d349e3b03b83276b9519c6c7c65c.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRlgR-eYZGynfwBHkjXAS2VWtsIVIL3_lDz_SVqN3GwAkBoJ0ChFsO1_ZdMD44w1AKOs&usqp=CAU",
    },
    {
      imgPath:
        "https://krisstel.ua/image/cache/catalog/a-fw2022-2023/sisley-414x591.jpg",
    },
  ];

  const images5 = [
    {
      imgPath:
        "https://fridaywear.ru/upload/resize_cache/webp/iblock/b86/b864d54b71a39795940fdd1af6bf3965.webp",
    },
    {
      imgPath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBb2W5HzzGEQKwf08LrpSu7zA8E9DECrKnmA&s",
    },
  ];

  return (
    <div className="container">
      <div className="catal">
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
      <div className="texp_p">
        <h1>КАТАЛОГ</h1>
      </div>
      <div className="h1">
        <h2>ЧТО МЫ ШЬЕМ</h2>
      </div>
      <div className="slider">
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
                  style={{ width: "390px", height: "370px" }}
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
                  style={{ width: "390px", height: "460px" }}
                  src={el.imgPath}
                  alt={`slide ${id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
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
                  style={{ width: "390px", height: "400px" }}
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
