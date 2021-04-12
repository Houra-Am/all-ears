import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import PodStructure from "../components/podcasts/PodStructure";
import CarouselBanner from "../components/podcasts/Carousel";
import PodcastCard from "../components/podcasts/PodcastCard";
import BestPods from "../components/podcasts/BestPods";

const { SubMenu } = Menu;
const { Content } = Layout;

const Podcasts = (props) => {
  //const [podImg, setPodImg] = useState([]);
  //const [podDescription, setPodDescription] = useState([]);
  //const [podTitle, setPodTitle] = useState([]);
  const [podcasts, setPodcasts] = useState();

  const getPodInfo = () => {
    const url = `http://localhost:8000/podcasts/best/${props.match.params.id}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log("results", results.body);
        setPodcasts(results.body.podcasts);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPodInfo();
  }, []);

  return (
    <div>
      <Layout>
        <PodStructure />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <div className='demo-nav'>
              <Link to='/'> Home</Link>
              <Link to='/apps'> Application List</Link>
            </div>
          </Breadcrumb>
          <CarouselBanner />

          <Card>
            <Card title='Popular Podcasts'>
              {podcasts &&
                podcasts.slice(0, 5).map((podcast) => {
                  return (
                    <Content className='site-card-wrapper'>
                      <Link to={`/podcast/${podcast.id}`}>
                        <PodcastCard
                          title={podcast.title}
                          publisher={podcast.publisher}
                          thumbnail={podcast.thumbnail}
                        />
                      </Link>
                    </Content>
                  );
                })}
            </Card>
          </Card>

          <Card>
            <Card type='inner' title='Popular Podcasts'>
              {podcasts &&
                podcasts.slice(5, 10).map((podcast) => {
                  return (
                    <Content className='site-card-wrapper'>
                      <Link to={`/podcast/${podcast.id}`}>
                        <BestPods
                          title={podcast.title}
                          publisher={podcast.publisher}
                          thumbnail={podcast.thumbnail}
                        />
                      </Link>
                    </Content>
                  );
                })}
            </Card>
          </Card>
        </Layout>
      </Layout>
    </div>
  );
};

export default Podcasts;
