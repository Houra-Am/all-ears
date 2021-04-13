import React from "react";
import { Carousel, Card } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "160px",
  color: "#364d79",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselBanner = (props) => {
  return (
    <div>
      <Card title='Listen Now'>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default CarouselBanner;
