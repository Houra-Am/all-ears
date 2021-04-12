import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../css/component-style/TopicTags.css";

const TopicTags = (props) => {
  const [topics, setTopics] = useState();
  const [genres, setGenres] = useState();

  const getTopics = (props) => {
    const apiUrl = `http://localhost:8000/podcasts/genres?best=true`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        console.log("genres: ", result.body.genres);
        setTopics(result.body);
        setGenres(result.body.genres);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <>
      {genres &&
        genres.map((genre) => {
          return (
            <div className='category' type='primary'>
              <Button>{genre.name}</Button>
            </div>
          );
        })}
    </>
  );
};

export default TopicTags;
