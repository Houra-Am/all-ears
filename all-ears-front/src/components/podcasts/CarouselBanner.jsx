import React from "react";
import { Carousel, Card } from "antd";
import { Link } from "react-router-dom";
import "../../css/component-style/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselBanner = (props) => {
  return (
    <Card title={props.name}>
      <Carousel afterChange={onChange}>
        {props.podcasts.slice(5, 12).map((podcast) => {
          return (
            <Link to={`/podcast/${podcast.id}`}>
              <div className='slick-slide'>
                <img
                  className='slick-slide-image d-block w-100'
                  alt='carousel'
                  src={podcast.image}
                />
                <img
                  className='position-absolute'
                  alt='carousel'
                  src={podcast.image}
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </Card>
  );
};

export default CarouselBanner;
