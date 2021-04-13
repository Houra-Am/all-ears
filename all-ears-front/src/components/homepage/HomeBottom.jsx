import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Layout } from "antd";
import Thumbnail from "../../components/homepage/Thumbnail";
const { Content } = Layout;

const HomeBottom = () => {
  const [podcastThumbnail, setPodcastThumbnail] = useState();

  const getRandomPodcast = () => {
    fetch("http://localhost:8000/podcasts/best/144?number=6")
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log("result of 6 random pod:", results);
        setPodcastThumbnail(results);
      })
      .catch((error) => console.error(error));
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
          <Link to='/podcasts/genre/127'>
            <Button className='listen-now' htmlType='submit' type='primary'>
              LISTEN NOW
            </Button>
          </Link>
        </Col>

        <Col span={4}>
          {podcastThumbnail &&
            podcastThumbnail.map((podThumb) => {
              return (
                <Thumbnail
                  className='podcast-thumbnail'
                  thumbnail={podThumb.thumbnail}
                  hoverable></Thumbnail>
              );
            })}
        </Col>
      </Row>
    </Content>
  );
};

export default HomeBottom;
