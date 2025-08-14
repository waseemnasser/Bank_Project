import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./SliderSec.css"
import SliderIco from "/public/assets/images/Icons/slider-icons/slider-icon.svg"
import { exportedOTSlideData } from "../../data/OurTestimonialsSliderData"
import leftArrow from "/public/assets/images/Icons/slider-icons/left-arrow.svg";
import rightArrow from "/public/assets/images/Icons/slider-icons/right-arrow.svg";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
export const SliderSec = () => {
    var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <img src={rightArrow} alt="Previous" /> ,
    prevArrow: <img src={leftArrow} alt="Previous" />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  }; 
    return (
        <div className="backgroundSLider">
            <div className="slider-container white-space">
            <Slider {...settings}>
              {exportedOTSlideData.map((e, index) => {
                              return (
                                  <div className="card" key={index}>
                                    <img src={SliderIco} alt="SliderIco" />
                                    <p className="LexendRegular">{e.paragraph}</p>
                                    <h3 className="LexendMedium">{e.name}</h3>
                                  </div>
                              )
                          })}
               
            </Slider>
            </div>  
        </div>

  )
}










