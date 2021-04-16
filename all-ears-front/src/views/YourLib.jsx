import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Card, Col, Row, Divider } from "antd";
import { Link } from "react-router-dom";
import { FaHeadphonesAlt } from "react-icons/fa";
import PodStructure from "../components/podcasts/PodStructure";
import TopicTags from "../components/podcasts/TopicTags";
import LibItems from "../components/Library/LibItems";
import SearchBar from "../components/main/SearchBar";

const { Content } = Layout;
const style = { padding: "30px 0", margin: "auto" };

const YourLib = () => {
  const [noLikes, setNoLikes] = useState(false);
  const [userConnected, setUserConnected] = useState(false);
  const [podcastsLikes, setPodcastsLikes] = useState();

  const getLibrary = () => {
    fetch(`http://localhost:8000/user/likes`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status === 404) {
          setNoLikes(true);
        } else if (response.status === 403) {
          setUserConnected(true);
        } else {
          setPodcastsLikes(response);
        }
      });
  };

  useEffect(() => {
    getLibrary();
  }, []);

  return (
    <div>
      <Layout>
        <PodStructure />
        <Layout style={{ padding: "0 24px 24px" }}>
          <SearchBar />
          <Breadcrumb style={{ margin: "16px 0" }}>
            <div className='demo-nav'>
              <Link to='/podcasts/genre/144'>
                <FaHeadphonesAlt /> Podcasts
              </Link>
            </div>
          </Breadcrumb>

          {noLikes && (
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='Inner Card title'>
              You don't have any saved item in your library
            </Card>
          )}

          {userConnected && (
            <Card
              style={{ marginTop: 16 }}
              type='inner'
              title='Inner Card title'>
              <Link to='/login'>Login</Link> or <Link to='/signup'>create</Link>{" "}
              an account to add podcasts to your library.
              <Divider />
              <p>You can still browse the categories for free! </p>
            </Card>
          )}

          <Card>
            <Row>
              {podcastsLikes &&
                podcastsLikes.map((podcast) => {
                  return (
                    <>
                      <Col className='gutter-row' style={style} span={4}>
                        <Content className='site-card-wrapper'>
                          <Link to={`/podcast/${podcast.body.id}`}>
                            <LibItems
                              title={podcast.body.title}
                              image={podcast.body.image}></LibItems>
                          </Link>
                        </Content>
                      </Col>
                    </>
                  );
                })}
            </Row>
            <Divider />
            <Card id='discover' type='inner' title='Browse By Topic'>
              <Row>
                <TopicTags />
              </Row>
            </Card>
          </Card>
        </Layout>
      </Layout>
    </div>
  );
};

export default YourLib;
