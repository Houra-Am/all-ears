import React from "react";
import { Card } from "antd";
import "../../css/component-style/BestPods.css";

const { Meta } = Card;

const BestPods = (props) => {
  return (
    <div className='site-card-wrapper'>
      <Card
        hoverable
        className='card-element'
        style={{ width: 150, borderRadius: 10 }}
        cover={
          <img
            alt='example'
            style={{ width: 150, borderRadius: 10 }}
            src={props.thumbnail}
          />
        }>
        <Meta title={props.title} />
      </Card>
    </div>
  );
};

export default BestPods;
