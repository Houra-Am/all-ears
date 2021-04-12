import React from "react";
import { Layout, Breadcrumb, Divider } from "antd";
import HomeMiddleSection from "../components/homepage/HomeMiddleSection";
import HomeBanner from "../components/homepage/HomeBanner";
import HomeBottom from "../components/homepage/HomeBottom";
import EpisodeCard from "../components/podPage/EpisodeCard";

import "../css/view-style/Home.css";
const { Footer } = Layout;

const Home = () => {
  return (
    <div className='main-wrapper'>
      <Layout>
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <HomeBanner />
            <Divider />
            <HomeMiddleSection />
            <Divider />
            <HomeBottom />
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
