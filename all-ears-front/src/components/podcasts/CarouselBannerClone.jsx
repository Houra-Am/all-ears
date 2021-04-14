import React from "react";
import { Carousel } from "antd";
import "../../css/component-style/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselBannerClone = (props) => {
  return <Carousel afterChange={onChange}>{props.image}</Carousel>;
};

export default CarouselBannerClone;
