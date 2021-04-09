import React from "react";
import { Layout, Card, Row, Col, Button } from "antd";
import "../CSS/Home.css";
import head from "../image/head.png";
const { Content } = Layout;
const { Meta } = Card;

const HomeBanner = () => {
  return (
    <div>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}>
        <Row>
          <Col span={12}>
            <h1>LET US BLOW YOUR MIND AND SPARK YOUR IMAGINATION</h1>
            <Button className='listen-now' htmlType='submit' type='primary'>
              LISTEN NOW
            </Button>
          </Col>
          <Col span={12}>
            <Card
              className='header-image'
              hoverable
              style={{ width: 400 }}
              cover={<img alt='example' src={head} />}></Card>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default HomeBanner;
