import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Card, Row, Col, Button, Select } from "antd";
import "../../css/component-style/DropDown.css";
import imagination from "../../image/imagination.png";
import DropDown from "./DropDown";

const { Content } = Layout;
const { Option } = Select;

const HomeMiddleSection = () => {
  const history = useHistory();
  const [genres, setGenres] = useState();
  const [value, setValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState()

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
                  defaultValue='Select a genre'
                  genres={genres}
                  onChange={(event) => {
                    const genre = genres.find((genre) => {
                      return (
                        genre.name == event
                      )
                    })
                    setSelectedGenre(genre)
                  }}
                  id={genres.id}
                  text={"Tech podcasts"}></DropDown>
              )}
              While I{" "}
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
