import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSec.css";
import { exportedOTSlideData } from "../../data/OurTestimonialsSliderData";

export const SliderSec = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 },
      },
    ],
  };

  return (
    <div className="backgroundSLider">
      <div className="slider-container">
        <Slider {...settings}>
          {exportedOTSlideData.map((item, i) => (
            <div className="card" key={item?.id ?? i}>
              <img
                src="assets/images/Icons/slider-icons/slider-icon.svg"
                alt="Slider icon"
              />
              <p className="LexendRegular">{item.paragraph}</p>
              <h3 className="LexendMedium">{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSec;
