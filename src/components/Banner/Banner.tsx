import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import style from "./Banner.module.css";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      {/* <Link href="#"> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${style.swiper}`}
      >
        <SwiperSlide className={style.swiper_slide_1}>
          <div className={style.swiper_brightness}>
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
          <div className={style.swiper_brightness}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "423px",
              }}
            >
              {" "}
              <Image
                src="/assets/slider2.png"
                alt="Card image"
                layout="fill"
                objectFit="cover"
              />
            </div>{" "}
          </div>
          <div className={style.swiper_slide_text}>
            <p>
              Segundo <br />
              <span>Slider</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide_3}>
          <div className={style.swiper_brightness}>
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
          </div>
          <div className={style.swiper_slide_text}>
            <p>
              Terceiro <br />
              <span>Slider</span>
            </p>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
      {/* </Link> */}
    </>
  );
}
