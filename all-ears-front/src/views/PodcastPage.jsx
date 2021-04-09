import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import OnePodThumbnail from "../components/OnePodThumbnail";
const { SubMenu } = Menu;
const { Content } = Layout;

const PodcastsPage = (props) => {
  const [onePodImg, setOnePodImg] = useState([]);

  const getEachPod = () => {
    fetch("http://localhost:8000/podcasts/8f1d7016296040e689b4cd9982ee92c8")
      //should change the id
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setOnePodImg([result.body.image]);
      });
  };

  useEffect(() => {
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
            <OnePodThumbnail
              className='podcasts-thumbnail'
              image={onePodImg}
              hoverable></OnePodThumbnail>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default PodcastsPage;
