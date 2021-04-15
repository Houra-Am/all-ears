import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import PodStructure from "../components/podcasts/PodStructure";
import CarouselBanner from "../components/podcasts/CarouselBanner";
import TopSearchedCard from "../components/podcasts/TopSearchedCard";
import BestPods from "../components/podcasts/BestPods";
import TopicTags from "../components/podcasts/TopicTags";
import "../css/view-style/Podcasts.css";

const { Content } = Layout;
const style = { padding: "30px 0", margin: "auto" };

const Podcasts = (props) => {
  const [resName, setResName] = useState();
  const [podcasts, setPodcasts] = useState();

  const getPodInfo = () => {
    const url = `http://localhost:8000/podcasts/best/${props.match.params.id}?page=2`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setResName(results.body);
        setPodcasts(results.body.podcasts);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPodInfo();
  }, [props.match.params.id]);

  return (
    <div>
      <Layout>
        {/* Vertical menu */}
        <PodStructure />
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* Breadcrumb */}
          <Breadcrumb style={{ margin: "16px 0" }}>
            <div className='demo-nav'>
              <Link to='/library'>
                <MdLibraryMusic /> Your Library
              </Link>
            </div>
          </Breadcrumb>
          {/* Carousel */}

          <div>
            {podcasts && (
              <CarouselBanner podcasts={podcasts} name={resName.name} />
            )}
          </div>

          {/* Top Searched podcasts */}
          <Card>
            <Card type='inner' title='Top Search'>
              <Row>
                {podcasts &&
                  podcasts.slice(0, 5).map((podcast) => {
                    return (
                      <Col className='gutter-row' style={style} span={4}>
                        <Content className='site-card-wrapper'>
                          <Link to={`/podcast/${podcast.id}`}>
                            <TopSearchedCard
                              title={podcast.title}
                              publisher={podcast.publisher}
                              thumbnail={podcast.thumbnail}
                            />
                          </Link>
                        </Content>
                      </Col>
                    );
                  })}
              </Row>
            </Card>
          </Card>
          {/* Popular podcasts */}
          <Card>
            <Card type='inner' title='Popular Podcasts'>
              <Row>
                {podcasts &&
                  podcasts.slice(5, 10).map((podcast) => {
                    return (
                      <Col className='gutter-row' style={style} span={4}>
                        <Content className='site-card-wrapper'>
                          <Link to={`/podcast/${podcast.id}`}>
                            <BestPods
                              title={podcast.title}
                              publisher={podcast.publisher}
                              thumbnail={podcast.thumbnail}
                            />
                          </Link>
                        </Content>
                      </Col>
                    );
                  })}
              </Row>
            </Card>
          </Card>
          {/* Topic Tags */}
          <Card>
            <Card id='discover' type='inner' title='Browse By Topic'>
              <Row>
                <TopicTags />
              </Row>
            </Card>
          </Card>
        </Layout>
      </Layout>
    </div>
  );
};

export default Podcasts;
