import React from "react";
import { Layout, Breadcrumb, Divider } from "antd";
import HorizontalMenu from "../components/main/HorizontalMenu";
import HomeMiddleSection from "../components/homepage/HomeMiddleSection";
import HomeBanner from "../components/homepage/HomeBanner";
import HomeBottom from "../components/homepage/HomeBottom";

import "../css/view-style/Home.css";
const { Footer } = Layout;

const Home = () => {
  return (
    <>
      <HorizontalMenu />
      <div className='main-wrapper'>
        <Layout style={{ padding: "0 24px 24px" }}>
          <HomeBanner />
          <Divider />
          <HomeMiddleSection />
          <Divider />
          <HomeBottom />
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    </>
  );
};

export default Home;
