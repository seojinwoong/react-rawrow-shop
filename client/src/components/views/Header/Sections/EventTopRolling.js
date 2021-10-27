import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

function EventTopRolling() {
  return (
    <div className="event-top-rolling">
      <Swiper className="mySwiper" centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }}>
        <SwiperSlide>
          <a href="#">가입하면 바로 쓸 수 있는<em className="emphasis">5,000 마일리지</em></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">카카오 친구 추가하면 <em className="emphasis">5% 할인쿠폰</em> 바로지급</a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="#">지금 <em className="emphasis">R EYE</em> 구매하면<em className="emphasis">가방</em>을 선물해드려요</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default EventTopRolling;
