import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const PodStructure = () => {
  return (
    <Sider width={200} className='site-layout-background'>
      <Menu
        mode='inline'
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}>
        <SubMenu key='sub1' icon={<UserOutlined />} title='subnav 1'>
          <Menu.Item key='1'>option1</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<LaptopOutlined />} title='subnav 2'>
          <Menu.Item key='5'>option5</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default PodStructure;
