import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, List, Space, Layout, Breadcrumb } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { MdLibraryMusic } from "react-icons/md";
import PodStructure from "../components/podcasts/PodStructure";
import "../css/view-style/SearchPage.css";

const { Meta } = Card;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const SearchPage = (props) => {
  const [podcasts, setPodcasts] = useState();

  const getResult = () => {
    fetch(
      `http://localhost:8000/podcasts/search/${props.match.params.string}/0`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPodcasts(response.body.results);
        console.log(response.body.results);
      });
  };

  useEffect(() => {
    getResult();
  }, [props.match.params.string]);

  return (
    <div>
      {podcasts && (
        <Layout>
          <PodStructure />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <div className='demo-nav'>
                <MdLibraryMusic /> Your Library
              </div>
            </Breadcrumb>

            <List
              itemLayout='horizontal'
              dataSource={podcasts}
              renderItem={(item) => (
                <List.Item key={item.title_original}>
                  <Card>
                    <Meta title={item.title_original} />
                    <Link to={`/podcast/${item.id}`}>
                      <Card
                        className='card'
                        hoverable
                        style={{ width: 150, height: 150 }}
                        cover={
                          <img
                            alt='example'
                            src={item.image}
                            title={item.title_original}
                          />
                        }
                      />
                    </Link>

                    <Card
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
                      bordered={false}
                      style={{ width: 300 }}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.description_original,
                        }}></div>
                    </Card>
                  </Card>
                </List.Item>
              )}
            />
          </Layout>
        </Layout>
      )}
      )
    </div>
  );
};

export default SearchPage;
