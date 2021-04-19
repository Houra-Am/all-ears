import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
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
        setTopics(result.body);
        setGenres(result.body.genres);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTopics();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {genres &&
        genres.map((genre, index) => {
          return (
            <div className='category' type='primary' key={index}>
              <Link to={`/podcasts/genre/${genre.id}`}>
                <Button
                  id={"categoryBtn"}
                  style={{
                    borderRadius: "10px",
                    height: "50px",
                    color: "white",
                  }}
                  className={"cat-" + index}
                  onClick={scrollToTop}>
                  {genre.name}
                </Button>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default TopicTags;
