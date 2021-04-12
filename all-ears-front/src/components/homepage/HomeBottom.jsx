import React, { useState, useEffect } from "react";
import { Row, Col, Button, Layout } from "antd";
import Thumbnail from "../../components/homepage/Thumbnail";
const { Content } = Layout;

const HomeBottom = () => {
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
            Useless to say! You can listen to your favorite podcast or find your
            new passion anytime, anywhere.
          </p>
          <Button className='listen-now' htmlType='submit' type='primary'>
            LISTEN NOW
          </Button>
        </Col>
        <Col span={4}>
          {podcastThumbnail && (
            <Thumbnail
              className='podcast-thumbnail'
              image={podcastThumbnail}
              hoverable></Thumbnail>
          )}
          {podcastThumbnail && (
            <Thumbnail
              className='podcast-thumbnail'
              image={podcastThumbnail}
              hoverable></Thumbnail>
          )}
        </Col>
        <Col span={4}>
          {podcastThumbnail && (
            <Thumbnail
              className='podcast-thumbnail'
              image={podcastThumbnail}
              hoverable></Thumbnail>
          )}
          {podcastThumbnail && (
            <Thumbnail
              className='podcast-thumbnail'
              image={podcastThumbnail}
              hoverable></Thumbnail>
          )}
        </Col>
        <Col span={4}>
          {podcastThumbnail && (
            <Thumbnail
              className='podcast-thumbnail'
              image={podcastThumbnail}
              hoverable></Thumbnail>
          )}
          {podcastThumbnail && (
            <Thumbnail
              className='podcast-thumbnail'
              image={podcastThumbnail}
              hoverable></Thumbnail>
          )}
        </Col>
      </Row>
    </Content>
  );
};

export default HomeBottom;
