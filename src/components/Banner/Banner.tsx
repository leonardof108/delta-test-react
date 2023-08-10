import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import style from "./Banner.module.css";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${style.swiper}`}
        style={{
          "--swiper-pagination-color": "#FFB300",
          "--swiper-pagination-bullet-inactive-color": "#DEDEDE",
          "--swiper-pagination-bullet-inactive-opacity": "0.7",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide className={style.swiper_slide_1}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "423px",
            }}
          >
            <Image
              src="/assets/slider1.png"
              alt="Card image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.swiper_slide_text}>
            <p>
              Teste da <br />
              <span>Delta</span>
            </p>
          </div>
          <div className={style.swiper_slide_alt_text}>
            <p className={style.swiper_slide_alt_text_qual}>Qual </p> <br />
            <span className={style.swiper_slide_alt_text_teste}>
              teste
            </span>{" "}
            <br />{" "}
            <p className={style.swiper_slide_alt_text_voce}>
              {" "}
              você quer fazer{" "}
            </p>{" "}
            <br />
            <span className={style.swiper_slide_alt_text_hoje}>hoje?</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide_2}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "423px",
            }}
          >
            <Image
              src="/assets/slider2.png"
              alt="Card image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.swiper_slide_text}>
            <p>
              Segundo <br />
              <span>Slider</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide_3}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "423px",
            }}
          >
            <Image
              src="/assets/slider3.png"
              alt="Card image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.swiper_slide_text}>
            <p>
              Terceiro <br />
              <span>Slider</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
