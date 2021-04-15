import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const LibItems = (props) => {
  return (
    <div>
      <Card
        hoverable
        className='card-element'
        style={{ width: 150, borderRadius: 10 }}
        cover={
          <img
            alt='example'
            style={{ width: 150, borderRadius: 10 }}
            src={props.image}
          />
        }>
        <Meta title={props.title} />
      </Card>
    </div>
  );
};

export default LibItems;
