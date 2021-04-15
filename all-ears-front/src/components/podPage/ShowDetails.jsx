import React, { useEffect } from "react";

import { Card, Divider, Button, Col, Row } from "antd";
import {
  ShareAltOutlined,
  PlusOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const ShowDetails = (props) => {

  const likePodcast = () => {
    console.log(props.match.params.id)
    fetch(`http://localhost:8000/podcasts/like/${props.match.params.id}`, {
      method: "POST",
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token'),
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src={props.img} />}>
            <h6>{props.title}</h6>
            <p>Created By: </p>
            <p>{props.publisher}</p>
            <Divider />
            <p>Language: {props.language} </p>
            <p>Episodes: {props.total_episodes}</p>
            <Button icon={<ShareAltOutlined />}>Share</Button>
            <Button onClick={props.onClick} icon={<PlusOutlined />}>Follow</Button>
            <Button type='link' href='https://twitter.com/twitter/'>
              <TwitterSquareFilled />
            </Button>
            <Button type='link' href='https://www.facebook.com/facebook/'>
              <FacebookFilled />
            </Button>
            <Button type='link' href='https://www.instagram.com/home/'>
              <InstagramFilled />
            </Button>
          </Card>
        </Col>
        <Col span={16}>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </Col>
      </Row>
    </div>
  );
};

export default ShowDetails;
