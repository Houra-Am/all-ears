import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import OnePodThumbnail from "../components/OnePodThumbnail";
const { SubMenu } = Menu;
const { Header, Content } = Layout;

const PodcastsPage = (props) => {
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
            <OnePodThumbnail />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default PodcastsPage;
