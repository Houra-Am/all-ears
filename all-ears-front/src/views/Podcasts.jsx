import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnePodImg from "../components/OnePodImg";

const Podcasts = (props) => {
  const [podImg, setPodImg] = useState([]);
  const [podDescription, setPodDescription] = useState([]);
  const [podTitle, setPodTitle] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  const getPodInfo = () => {
    console.log("podcasts");
    console.log("podcasts", props.match.params.id);
    let url = `http://localhost:8000/podcasts/best/${props.match.params.id}`;
    console.log(url);

    fetch(`http://localhost:8000/podcasts/best/${props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        console.log("results", results.body.podcasts);
        setPodcasts([results.body.podcasts]);

        // setPodcasts([results.body.podcasts]);
        // setPodTitle([results.body.title]);
        // setPodDescription([results.body.description]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPodInfo();
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
      {podcasts > 0 &&
        podcasts.map((podcast) => {
          return <p>{podcast.id}</p>;
        })}
    </div>
  );
};

export default Podcasts;
