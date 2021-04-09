import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import OnePodImg from "../components/OnePodImg";
import PodDetailSection from "../components/PodDetailSection";
const { Content } = Layout;

const PodcastsPage = (props) => {
  const [onePodImg, setOnePodImg] = useState([]);

  const getEachPod = () => {
    console.log("coucou");
    //const apiUrl = `http://localhost:8000/podcasts/4d3fe717742d4963a85562e9f84d8c79`;
    const apiUrl = `http://localhost:8000/podcasts/${props.match.params.id}`;
    fetch(apiUrl)
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
            <PodDetailSection />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default PodcastsPage;
