import React from "react";
import { Carousel, Card } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "160px",
  lineHeight: "160px",
  textAlign: "center",
};

const CarouselBanner = (props) => {
  return (
    <div>
      <Card title='Listen Now'>
        <Carousel afterChange={onChange}>
          {props.podcasts.map((podcast) => {
            return (
              <div>
                <img alt='carousel' style={contentStyle} src={podcast.image} />
              </div>
            );
          })}
        </Carousel>
      </Card>
    </div>
  );
};

export default CarouselBanner;
