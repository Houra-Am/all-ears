import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import PodStructure from "../components/podcasts/PodStructure";
import CarouselBanner from "../components/podcasts/CarouselBanner";
import TopSearchedCard from "../components/podcasts/TopSearchedCard";
import BestPods from "../components/podcasts/BestPods";
import TopicTags from "../components/podcasts/TopicTags";
import SearchBar from "../components/main/SearchBar";
import "../css/view-style/Podcasts.css";

const { Content, Footer } = Layout;
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
        <PodStructure />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Row>
            <Col span={8}>
              <Breadcrumb style={{ margin: "19px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Podcasts</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={8} offset={8}>
              <SearchBar />
            </Col>
          </Row>
          <div>
            {podcasts && (
              <CarouselBanner podcasts={podcasts} name={resName.name} />
            )}
          </div>
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
          <Card>
            <Card id='discover' type='inner' title='Browse By Topic'>
              <Row>
                <TopicTags />
              </Row>
            </Card>
          </Card>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        All Ears ©2021 Created by HAA
      </Footer>
    </div>
  );
};

export default Podcasts;
