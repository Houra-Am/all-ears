import React from "react";
import {
  Layout,
  Menu,
  Dropdown,
  Breadcrumb,
  Image,
  Card,
  Row,
  Col,
  Button,
  Divider,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
// import "../css/Home.css";
import head from "../image/head.png";
import imagination from "../image/imagination.png";
import NavBar from "../components/NavBar";
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

const Home = () => {
  return (
    <div className='main-wrapper'>
      <Layout>
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
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
                  <Button
                    className='listen-now'
                    htmlType='submit'
                    type='primary'>
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
            <Divider />
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
                  <h1>I Want to Listen to [category] While I'm [activity]</h1>
                  <Button
                    className='listen-now'
                    htmlType='submit'
                    type='primary'>
                    LISTEN NOW
                  </Button>
                </Col>
              </Row>
            </Content>

            <Divider />
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
                    cover={<img alt='example' src={head} />}></Card>
                </Col>
                <Col span={12}>
                  <h1>DISCOVER MORE</h1>
                  <p>
                    Useless to say! You can listen to your favorite podcast or
                    find your new passion anytime, anywhere.
                  </p>
                  <Button
                    className='listen-now'
                    htmlType='submit'
                    type='primary'>
                    LISTEN NOW
                  </Button>
                </Col>
              </Row>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
