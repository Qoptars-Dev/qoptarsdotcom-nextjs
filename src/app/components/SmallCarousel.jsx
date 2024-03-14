'use client'
import Slider from "react-slick";

function SmallCarousel() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    arrows: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"/images/night-1.webp"} />
        </div>
        <div>
          <img src={"/images/gallery-1.webp"} />
        </div>

      </Slider>
    </div>
  );
}

export default SmallCarousel;
