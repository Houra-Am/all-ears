import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        console.log(response.body.results);
        setPodcasts(response.body.results);
      });
  };

  useEffect(() => {
    getResult();
  }, [props.match.params.string]);

  return (
    <div>
      <h3>Tour Search Result</h3>
      {podcasts &&
        podcasts.map((podcast, index) => {
          return (
            <Link to={`/podcast/${podcast.id}`}>
              <p>{podcast.title_original}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchPage;
