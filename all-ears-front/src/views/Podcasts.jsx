import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnePodImg from "../components/OnePodImg";

const Podcasts = (props) => {
  const [podImg, setPodImg] = useState([]);
  const [podDescription, setPodDescription] = useState([]);
  const [podTitle, setPodTitle] = useState([]);
  const [podcasts, setPodcasts] = useState();

  const getPodInfo = () => {

    const url = `http://localhost:8000/podcasts/best/${props.match.params.id}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log("results", results.body);
        setPodcasts(results.body.podcasts);

        // setPodcasts([results.body.podcasts]);
        // setPodTitle([results.body.title]);
        // setPodDescription([results.body.description]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPodInfo();
    console.log("podcasts", podcasts)
  }, []);

  return (
    <div>
      <h1>Podcasts</h1>
      {/*
      {podcasts.length > 0 &&
        podcasts.map((podcasts) => {
          console.log("podcasts list", podcasts[0]);
          return (
            <>
              <Link to={`/Podcast/${podcasts.id}`}>
                <p>{podcasts[0].title}</p>
              </Link>
            </>
          );
          
      })}*/}
      {podcasts &&
        podcasts.map((podcast) => {
          return (
            <>
              <Link to={`/podcast/${podcast.id}`}>
                <p>{podcast.title}</p>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default Podcasts;
