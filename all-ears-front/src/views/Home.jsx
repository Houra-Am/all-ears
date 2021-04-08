import React, { useState, useEffect } from "react";
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
import "../css/Home.css";
import head from "../image/head.png";
import imagination from "../image/imagination.png";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";
import Thumbnail from "../components/Thumbnail";
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

const Home = () => {
  const [podcastThumbnail, setPodcastThumbnail] = useState([]);

  const getRandomPodcast = () => {
    fetch("http://localhost:8000/podcasts/random")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setPodcastThumbnail([
          result.body.image,
          result.body.image,
          result.body.image,
          result.body.image,
          result.body.image,
          result.body.image,
        ]);
      });
  };

  useEffect(() => {
    getRandomPodcast();
  }, []);

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
                <Col span={12}>
                  {podcastThumbnail && (
                    <Thumbnail
                      className='podcats-thumbnail'
                      image={podcastThumbnail}
                      hoverable></Thumbnail>
                  )}
                  {podcastThumbnail && (
                    <Thumbnail
                      className='podcats-thumbnail'
                      image={podcastThumbnail}
                      hoverable></Thumbnail>
                  )}
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
