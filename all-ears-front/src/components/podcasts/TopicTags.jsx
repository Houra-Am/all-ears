import React, { useState, useEffect, useHistory } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "../../css/component-style/TopicTags.css";

const TopicTags = (props) => {
  const [topics, setTopics] = useState();
  const [genres, setGenres] = useState();
  /*   const history = useHistory(); */

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
        /* history.push(`/podcasts/genre/${genres.id}`); */
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTopics();
  }, []);

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
                  className={"cat-" + index}>
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
