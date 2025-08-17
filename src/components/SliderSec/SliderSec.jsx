import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./SliderSec.css"
import { exportedOTSlideData } from "../../data/OurTestimonialsSliderData"

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
    nextArrow: <img src="assets/images/Icons/slider-icons/right-arrow.svg" alt="Previous" /> ,
    prevArrow: <img src="assets/images/Icons/slider-icons/left-arrow.svg" alt="Previous" />,
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
                                    <img src="assets/images/Icons/slider-icons/slider-icon.svg" alt="SliderIco" />
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










