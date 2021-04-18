import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, List, Space, Layout, Breadcrumb, Divider, Row, Col } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import PodStructure from "../components/podcasts/PodStructure";
import SearchBar from "../components/main/SearchBar";
import TopicTag from "../components/podcasts/TopicTags";
import "../css/view-style/SearchPage.css";

const { Meta } = Card;
const { Footer } = Layout;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const SearchPage = (props) => {
  const [podcasts, setPodcasts] = useState([]);

  const getResult = () => {
    fetch(
      `http://localhost:8000/podcasts/search/${props.match.params.string}/0`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.statusCode == 200) {
          setPodcasts(response.body.results);
        } else {
          setPodcasts([]);
        }
      });
  };

  useEffect(() => {
    getResult();
  }, [props.match.params.string]);

  return (
    <div>
      <Layout>
        <PodStructure />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Row>
            <Col span={8}>
              <Breadcrumb style={{ margin: "19px 0" }}>
                <Breadcrumb.Item>Search</Breadcrumb.Item>
                <Breadcrumb.Item>Podcasts</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={8} offset={8}>
              <SearchBar />
            </Col>
          </Row>

          <Card type='inner' title='Search result'>
            {podcasts.length > 0 ? (
              <List
                itemLayout='horizontal'
                dataSource={podcasts}
                renderItem={(item) => (
                  <div className='site-card-wrapper'>
                    <Row gutter={16}>
                      <Col span={6}>
                        <Link to={`/podcast/${item.id}`}>
                          <img
                            alt='example'
                            src={item.image}
                            title={item.title_original}
                            style={{
                              width: 200,
                              height: 200,
                              borderRadius: 10,
                            }}
                          />
                        </Link>
                      </Col>
                      <Col span={18}>
                        <Card bordered={false}>
                          <h6>{item.title_original}</h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description_original,
                            }}></div>

                          <List.Item
                            key={item.title_original}
                            actions={[
                              <IconText
                                icon={StarOutlined}
                                text='156'
                                key='list-vertical-star-o'
                              />,
                              <IconText
                                icon={LikeOutlined}
                                text='156'
                                key='list-vertical-like-o'
                              />,
                              <IconText
                                icon={MessageOutlined}
                                text='2'
                                key='list-vertical-message'
                              />,
                            ]}
                            style={{ float: "left" }}></List.Item>
                        </Card>
                      </Col>
                    </Row>
                    <Divider />
                  </div>
                )}
              />
            ) : (
              <div>
                <p>No result</p>
              </div>
            )}
          </Card>
          <Divider />
          <Card id='discover' type='inner' title='Browse By Topic'>
            <Row>
              <TopicTag />
            </Row>
          </Card>
          <Footer style={{ textAlign: "center" }}>
            All Ears ©2021 Created by HAA
          </Footer>
        </Layout>
      </Layout>
      )
    </div>
  );
};

export default SearchPage;
