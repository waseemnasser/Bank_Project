import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderSec.css";
import { exportedOTSlideData } from "../../data/OurTestimonialsSliderData";


export const SliderSec = () => {
  return (
    <section className="backgroundSLider">
      <div className="slider-container">
      <Swiper
  modules={[Navigation, A11y]}
  loop={true}
  speed={500}
  slidesPerView={3}
  slidesPerGroup={1}
  initialSlide={0}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  breakpoints={{
    0:   { slidesPerView: 1, slidesPerGroup: 1, initialSlide: 2 },
    992: { slidesPerView: 3, slidesPerGroup: 1, initialSlide: 0 },
    1440:{ slidesPerView: 3, slidesPerGroup: 1 },
  }}
>
  {exportedOTSlideData.map((item, i) => (
    <SwiperSlide key={item?.id ?? i}>
      <div className="card">
        <img
          src="assets/images/Icons/slider-icons/slider-icon.svg"
          alt="Quote"
        />
        <p className="LexendRegular">{item.paragraph}</p>
        <h3 className="LexendMedium">{item.name}</h3>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* arrows live OUTSIDE */}
<button className="custom-prev"></button>
<button className="custom-next"></button>

      </div>
    </section>
  );
};

export default SliderSec;
