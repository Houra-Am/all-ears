import React from "react";
import { Layout, Card, Row, Col, Button } from "antd";
import "../css/Home.css";
import imagination from "../image/imagination.png";
import DropDown from "../components/DropDown";
const { Content } = Layout;

const HomeMiddleSection = () => {
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
            <Card
              className='header-image'
              hoverable
              style={{ width: 400 }}
              cover={<img alt='example' src={imagination} />}></Card>
          </Col>
          <Col span={12}>
            <h1>
              I Want to Listen to{" "}
              <DropDown
                category={{
                  optionOne: "Star Wars",
                  optionTwo: "Tech Podcasts",
                  optionThree: "True Crime",
                }}></DropDown>{" "}
              While I{" "}
              <DropDown
                category={{
                  optionOne: "Run",
                  optionTwo: "Do Laundry",
                  optionThree: "Drive",
                }}></DropDown>
            </h1>
            <Button className='listen-now' htmlType='submit' type='primary'>
              LISTEN NOW
            </Button>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default HomeMiddleSection;
