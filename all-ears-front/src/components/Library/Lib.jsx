import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { MdLibraryMusic } from "react-icons/md";
import PodStructure from "../podcasts/PodStructure";
import TopicTags from "../podcasts/TopicTags";
import "../../css/view-style/Podcasts.css";

const { Content } = Layout;
const style = { padding: "30px 0", margin: "auto" };

const Lib = () => {
  return (
    <div>
      <Layout>
        {/* Vertical menu */}
        <PodStructure />
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* Breadcrumb */}
          <Breadcrumb style={{ margin: "16px 0" }}>
            <div className='demo-nav'>
              <MdLibraryMusic /> Your Library
            </div>
          </Breadcrumb>
        </Layout>
      </Layout>
    </div>
  );
};

export default Lib;
