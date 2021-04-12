import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../css/component-style/TopicTags.css";

const TopicTags = (props) => {
  const [topics, setTopics] = useState();

  const getTopics = (props) => {
    const apiUrl = `http://localhost:8000/podcasts/genres?best=true`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setTopics(result.body);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className='site-button-ghost-wrapper'>
      <Button ghost>Ghost</Button>
    </div>
  );
};

export default TopicTags;
