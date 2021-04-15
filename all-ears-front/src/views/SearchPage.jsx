import React, { useState, useEffect } from "react";
import "../css/view-style/SearchPage.css";
import { Link } from "react-router-dom";
import { Card } from "antd";

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
        setPodcasts(response.body.results);
      });
  };

  useEffect(() => {
    getResult();
  }, [props.match.params.string]);

  return (
    <div>
      <h3>Your Search Result</h3>
      {podcasts &&
        podcasts.map((podcast, index) => {
          return (
            <div className="container d-flex justify-content-space-around">
              <div className="row">
                <div className="col">
                  <p><strong>Title</strong> : {podcast.title_original}</p>
                  <p><strong>Publisher</strong> : {podcast.publisher_original}</p>
                  <p><strong>Description</strong> : {podcast.description_original}</p>
                </div>
                <div className="col">
                  <Link to={`/podcast/${podcast.id}`}>
                      <p>Episodes: {podcast.total_episodes}</p>
                    <Card className="card"
                      hoverable
                      style={{ width: 300, height: 300}}
                      cover={<img alt='example' src={podcast.image}
                      title={podcast.title_original}
                    />}>
                    </Card>
                  </Link>  
                </div>
              </div>  
            </div>
          );    
        })}    
    </div>
  );
};

export default SearchPage;
