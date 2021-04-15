import React, { useEffect, useState } from "react";

const YourLib = () => {

  const [noLikes, setNoLikes] = useState(false)
  const [userConnected, setUserConnected] = useState(false)
  const [podcastsLikes, setPodcastsLikes] = useState()

  const getLibrary = () => {
    fetch(`http://localhost:8000/user/likes`, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.status === 404) {
          setNoLikes(true)
        } else if (response.status === 403) {
          setUserConnected(true)
        } else {
          setPodcastsLikes(response)
        }
      })
  }

  useEffect(() => {
    getLibrary()
  }, [])

  return (
    <div>
      {noLikes &&
        <h4>You don't have any item saved in your library</h4>
      }
      {userConnected &&
        <h4>Connectez-vous ou crée un compte pour ajouter des podcast à votre librairie</h4>
      }
      {
        podcastsLikes &&
        podcastsLikes.map((podcast) => {
          return (
            <>
              <img src={podcast.body.image}></img>
              <p>{podcast.body.title}</p>
            </>
          )
        })
      }
    </div>
  );
};

export default YourLib;
