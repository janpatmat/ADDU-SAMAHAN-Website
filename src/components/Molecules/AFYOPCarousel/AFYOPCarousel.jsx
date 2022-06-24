import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContent } from "../../ComponentIndex";
import styles from "./AFYOPCarousel.module.scss";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 2000,
};

const AFYOPCarousel = ({ carcon }) => {
  return (
    <div>
      <div className={styles["sliderContainer"]}>
        <Slider {...settings}>
          {carcon.content.map((item, index) => {
            return (
              <div key={index} className={styles["slick"]}>
                <CarouselContent imgSrc={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AFYOPCarousel;
