import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Divider } from "antd";
import ShowDetails from "../components/podPage/ShowDetails";
import EpisodeCard from "../components/podPage/EpisodeCard";
import Player from "../components/podPage/Player";
import EllipsisText from "react-ellipsis-text";

const { Content } = Layout;

const PodcastsPage = (props) => {
  //  const [onePodImg, setOnePodImg] = useState([]);
  const [podcast, setPodcast] = useState();
  const [episodes, setEpisodes] = useState();

  const getEachPod = () => {
    console.log("props param", props.match.params);
    const apiUrl = `http://localhost:8000/podcasts/${props.match.params.id}`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        console.log(result.body);
        console.log(result.body.episodes);
        setPodcast(result.body);
        setEpisodes(result.body.episodes);
      })
      .catch((error) => console.error(error));
  };

  const test = () => {
    console.log("coucou");
  };

  useEffect(() => {
    test();
    getEachPod();
  }, []);

  return (
    <Layout>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className='site-layout-background'
          style={{ padding: "24px 0" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {podcast && (
              <ShowDetails
                title={podcast.title}
                description={podcast.description}
                img={podcast.image}
                publisher={podcast.publisher}
                language={podcast.language}
                total_episodes={podcast.total_episodes}
              />
            )}
            <h2>Episodes</h2>
            {episodes &&
              episodes.map((episode) => {
                return (
                  <>
                    <h6>{episode.title}</h6>
                    <Player />
                    <EpisodeCard
                      title={episode.title}
                      thumbnail={episode.thumbnail}
                      image={episode.image}
                      description={episode.description}
                    />
                    <EllipsisText text={episode.description} length={"120"} />

                    <Divider />
                  </>
                );
              })}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default PodcastsPage;
