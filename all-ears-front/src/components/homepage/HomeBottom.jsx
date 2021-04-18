import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Layout, Card } from "antd";
import Thumbnail from "../../components/homepage/Thumbnail";
import { SELECTION_NONE } from "antd/lib/table/hooks/useSelection";

const { Content } = Layout;

const HomeBottom = () => {
  const [podcastThumbnail, setPodcastThumbnail] = useState();

  const getRandomPodcast = () => {
    fetch("http://localhost:8000/podcasts/best/144?number=6")
      .then((response) => {
        return response.json();
      })
      .then((results) => {
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
        marginTop: 0,
        minHeight: 300,
      }}>
      <Row>
        <Col span={12}>
          <h1 className='discover-title'>DISCOVER MORE</h1>
          <p className='discover-text'>
            Useless to say! You can listen to your favourite podcast or find
            your new passion anytime, anywhere.
          </p>
          <Link to='/podcasts/genre/127'>
            <Button
              className='listen-now'
              id='discover-more-btn'
              htmlType='submit'
              type='primary'>
              LISTEN NOW
            </Button>
          </Link>
        </Col>

        <Col span={12}>
          {/* <Row justify='end' style={{ width: 500, margin: 0 }} gutter={[40, 8]}> */}
          <Row gutter={[40, 48]}>
            {podcastThumbnail &&
              podcastThumbnail.map((podThumb) => {
                return (
                  <Col
                    className='gutter-row home-bottom-thumbnail'
                    style={{ padding: 0 }}
                    span={8}>
                    <Thumbnail
                      className='podcast-thumbnail'
                      thumbnail={podThumb.thumbnail}></Thumbnail>
                  </Col>
                );
              })}
          </Row>

          {/* </Card> */}
        </Col>
      </Row>
    </Content>
  );
};

export default HomeBottom;
