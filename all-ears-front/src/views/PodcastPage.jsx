import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Divider, Menu, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import ShowDetails from "../components/podPage/ShowDetails";
import EpisodeCard from "../components/podPage/EpisodeCard";
import Player from "../components/podPage/Player";
import HorizontalMenu from "../components/main/HorizontalMenu";
import "../css/view-style/PodcastPage.css";
/* import EllipsisText from "react-ellipsis-text"; */

const { Content, Footer } = Layout;

const PodcastsPage = (props) => {
  //  const [onePodImg, setOnePodImg] = useState([]);
  const [podcast, setPodcast] = useState();
  const [episodes, setEpisodes] = useState();

  const getEachPod = () => {
    const apiUrl = `http://localhost:8000/podcasts/${props.match.params.id}`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("episodes", result.body.episodes);
        setPodcast(result.body);
        setEpisodes(result.body.episodes);
      })
      .catch((error) => console.error(error));
  };

  const likePodcast = () => {
    fetch(`http://localhost:8000/podcasts/like/${props.match.params.id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getEachPod();
  }, [props.match.params.string]);

  return (
    <Layout>
      <HorizontalMenu />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Layout
          className='site-layout-background'
          style={{ padding: "24px 0" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Row>
              <Col span={8}>
                {podcast && (
                  <ShowDetails
                    title={podcast.title}
                    description={podcast.description}
                    img={podcast.image}
                    publisher={podcast.publisher}
                    language={podcast.language}
                    total_episodes={podcast.total_episodes}
                    onClick={likePodcast}
                  />
                )}
              </Col>

              <Col span={16}>
                {podcast && (
                  <Col span={22}>
                    <div
                      className='show-description'
                      dangerouslySetInnerHTML={{
                        __html: podcast.description,
                      }}
                    />
                  </Col>
                )}
                <Card title='Episodes'>
                  <Row>
                    {episodes &&
                      episodes.map((episode) => {
                        return (
                          <>
                            <Row>
                              <Col span={8}>
                                <Player
                                  audio={episode.audio}
                                  thumbnail={episode.thumbnail}
                                />
                              </Col>

                              {podcast && (
                                <Col span={16}>
                                  <h6>{episode.title}</h6>
                                  <div
                                    className='episode-description'
                                    dangerouslySetInnerHTML={{
                                      __html: episode.description,
                                    }}
                                  />

                                  <EpisodeCard
                                    title={episode.title}
                                    thumbnail={episode.thumbnail}
                                    image={episode.image}
                                    description={episode.description}
                                  />
                                </Col>
                              )}
                              <Divider />
                            </Row>
                          </>
                        );
                      })}
                  </Row>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        All Ears ©2021 Created by HAA
      </Footer>
    </Layout>
  );
};

export default PodcastsPage;
