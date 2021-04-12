import React from "react";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

const BestPods = (props) => {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BestPods;
