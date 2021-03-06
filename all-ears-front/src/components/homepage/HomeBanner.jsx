import React from "react";
import { Link } from "react-router-dom";
import { Layout, Card, Row, Col, Button } from "antd";
import imagination from "../../image/imagination.png";
const { Content } = Layout;

const HomeBanner = () => {
  return (
    <div>
      <Content
        className='site-layout-background'
        style={{
          marginTop: 60,
          minHeight: 380,
        }}>
        <Row>
          <Col span={12}>
            <h1 className='banner-title'>
              LET US BLOW YOUR MIND AND SPARK YOUR IMAGINATION
            </h1>

            <Link to='/podcasts/genre/127'>
              <Button className='listen-now' htmlType='submit' type='primary'>
                LISTEN NOW
              </Button>
            </Link>
          </Col>
          <Col span={12} className='banner-image'>
            {/* <Card className='header-image' bordered={false}> */}
            <img
              className='header-image'
              alt='example'
              src={imagination}
              style={{ height: 546, width: 546 }}></img>
            {/*  </Card> */}
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default HomeBanner;
