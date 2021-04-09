import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Row, Col, Button, Divider } from "antd";
import Thumbnail from "../components/Thumbnail";
import HomeMiddleSection from "../components/HomeMiddleSection";
import HomeBanner from "../components/HomeBanner";
import "../css/Home.css";
const { Footer, Content } = Layout;

const Home = () => {
  const [podcastThumbnail, setPodcastThumbnail] = useState([]);

  const getRandomPodcast = () => {
    fetch("http://localhost:8000/podcasts/random")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setPodcastThumbnail([result.body.image]);
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
            <HomeBanner />
            <Divider />
            <HomeMiddleSection />
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
                <Col span={4}>
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
                <Col span={4}>
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
                <Col span={4}>
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
