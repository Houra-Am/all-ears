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
            <>
           <p><strong>Title</strong> : {podcast.title_original}</p>
           <p><strong>Publisher</strong> : {podcast.publisher_original}</p>
           <p className="description"><strong>Description</strong> :{podcast.description_original}</p>
          
            <Link to={`/podcast/${podcast.id}`}>
              <p>Episodes: {podcast.total_episodes}</p>
              <Card
                hoverable
                style={{ width: 300, height: 300, borderRadius: 30}}
                cover={<img alt='example' src={podcast.image}
                title={podcast.title_original}
                 />}>
                </Card>
            </Link>  
            </>
          );    
        })}    
    </div>
  );
};

export default SearchPage;
