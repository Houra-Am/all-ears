import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import PodDetailSection from "../components/PodPage/PodDetailSection";
const { Content } = Layout;

const PodcastsPage = (props) => {
  const [onePodImg, setOnePodImg] = useState([]);
  const [podcast, setPodcast] = useState();

  const getEachPod = () => {
    console.log("props param", props.match.params);
    const apiUrl = `http://localhost:8000/podcasts/${props.match.params.id}`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setPodcast(result.body);
      });
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
              <PodDetailSection title={podcast.title} img={podcast.image} />
            )}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default PodcastsPage;
