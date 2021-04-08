import React from "react";
import { Layout, Image, Card } from "antd";
import "../css/Home.css";
import head from "../image/head.png";
const { Content } = Layout;

const Home = () => {
  return (
    <div>
      <h1>ALL EARS</h1>
      <Layout className='site-layout'>
        <Content style={{ margin: "0 16px" }}>
          <Card type='inner'>
            <h1>LET US BLOW YOUR MIND AND SPARK YOUR IMAGINATION</h1>
            <Image width={500} src={head} />
          </Card>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
