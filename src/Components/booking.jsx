import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../Design/Booking.css";
import Stjosephp from ".././assets/stjoseph.jpg";


import { FreeMode, Navigation, Thumbs } from "swiper";
import Navheader from "./Navheader";
import Footer from "./Footer";

export default function Bookingooking() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Navheader />
      <div className="bkg-cntr">
        <div className="swip-contr card">
          <div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Stjosephp} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <span>Content goes here</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
