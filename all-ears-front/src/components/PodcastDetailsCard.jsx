import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const PodcastDetailsCard = (props) => {


  // const getEachPod = (props) => {
  //   console.log(props.match)
  //   const apiUrl = `http://localhost:8000/podcasts/${props.match.params.id}`;
  //   fetch(apiUrl)
  //     //should change the id
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     });
  // };

  // useEffect(() => {
  //   getEachPod();
  // }, []);

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div>
            <Card
              hoverable
              style={{ width: 200, height: 100, borderRadius: 10 }}
              cover={
                <img
                  alt='example'
                  src={props.img}
                />
              }></Card>
          </div>
        </div>

        <div className='col'>
          <p>Duration</p>
          <h4>{props.title}</h4>
          <div>
            <p>
              Description:On la reconnaît à l'abondance Description:On la
              reconnaît à l'abondance
            </p>
          </div>

          {/* <i class="far fa-heart"></i> */}
          <HeartTwoTone />
        </div>
        <div className=' col'>
          <div>
            <i class='fas fa-play-circle 7x'></i>
            {/* <PlayCircleOutlined 
                    style={{
                    width: 50,
                    height: 50
                }}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailsCard;
