import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Card, Row, Col, Button, Select } from "antd";
import "../../css/component-style/DropDown.css";
import imagination from "../../image/imagination.png";
import DropDown from "./DropDown";

const { Content } = Layout;
const { Option } = Select;

const HomeMiddleSection = () => {
  const [genres, setGenres] = useState();

  const getGenre = (props) => {
    const apiUrl = `http://localhost:8000/podcasts/genres?best=true`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setGenres(result.body.genres);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getGenre();
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}>
        <Row>
          <Col span={12}>
            <Card
              className='header-image'
              hoverable
              style={{ width: 400 }}
              cover={<img alt='example' src={imagination} />}></Card>
          </Col>
          <Col span={12}>
            <h1>
              I Want to Listen to{" "}
              {genres && (
                <DropDown
                  genres={genres}
                  onChange={handleChange}
                  value={"Select a category"}
                  text={"Tech podcasts"}
                  category={genres.name}></DropDown>
              )}
              While I{" "}
              <Select defaultValue='Select an activity' style={{ width: 170 }}>
                <Option value='Cook'>Cook</Option>
                <Option value='Run'>Run</Option>
                <Option value='Do Laundry'>Do Laundry</Option>
                <Option value='Drive'>Drive</Option>
              </Select>
            </h1>

            <Link to={`/podcasts/genre/127}`}>
              <Button className='listen-now' htmlType='submit' type='primary'>
                LISTEN NOW
              </Button>
            </Link>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default HomeMiddleSection;
