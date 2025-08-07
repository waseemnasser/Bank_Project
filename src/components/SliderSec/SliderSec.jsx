import "./SliderSec.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderIco from "/public/assets/images/Icons/slider-icons/slider-icon.svg"

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
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
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
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
                <div className="card">
                <img src={SliderIco} alt="SliderIco" />
                <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <h3>John</h3>
                </div>
                
            </Slider>
            </div>            
        </div>

  )
}
