import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Button, Select } from "antd";
import "../../css/component-style/DropDown.css";
import activity from "../../image/activity.png";
import DropDown from "./DropDown";

const { Content } = Layout;
const { Option } = Select;

const HomeMiddleSection = () => {
  const history = useHistory();
  const [genres, setGenres] = useState();
  const [value, setValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState();

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

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div>
      <Content
        className='site-layout-background'
        style={{
          margin: 0,
          minHeight: 380,
        }}>
        <Row>
          <Col span={12}>
            <img
              className='header-image'
              alt='activities'
              src={activity}
              style={{ width: 550 }}
            />
          </Col>
          <Col span={12}>
            <h1 className='middle-sec-title'>
              I WANT TO LISTEN TO{" "}
              {genres && (
                <DropDown
                  defaultValue='Select a genre'
                  genres={genres}
                  onChange={(event) => {
                    const genre = genres.find((genre) => {
                      return genre.name == event;
                    });
                    setSelectedGenre(genre);
                  }}
                  id={genres.id}
                  text={"Tech podcasts"}></DropDown>
              )}
              WHILE I{" "}
              <Select defaultValue='Select an activity' style={{ width: 170 }}>
                <Option value='Cook'>Cook</Option>
                <Option value='Run'>Run</Option>
                <Option value='Do Laundry'>Do Laundry</Option>
                <Option value='Drive'>Drive</Option>
              </Select>
            </h1>

            {genres && (
              <Button
                onClick={() => {
                  history.push(`/podcasts/genre/${selectedGenre.id}`);
                }}
                className='listen-now'
                id='listen-now-btn'
                style={{ marginLeft: 40 }}
                htmlType='submit'
                type='primary'>
                LISTEN NOW
              </Button>
            )}
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default HomeMiddleSection;
