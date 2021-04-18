import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Card, Divider, Button, Col, Row } from "antd";
import {
  PlusOutlined,
  CheckOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import "../../css/component-style/ShowDetails.css";

const ShowDetails = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='site-card-wrapper'>
      <Card
        style={{ width: 280 }}
        cover={<img alt='example' src={props.img} />}>
        <h6>{props.title}</h6>
        <p>Created By: </p>
        <p>{props.publisher}</p>
        <Divider />
        <p>Language: {props.language} </p>
        <p>Episodes: {props.total_episodes}</p>

        <Button
          className='add-library-btn'
          onClick={() => {
            props.onClick();
            setIsClicked(true);
          }}
          icon={isClicked ? <CheckOutlined /> : <PlusOutlined />}>
          Add to library
        </Button>
        <Button className='twitter-btn' type='link' href='https://twitter.com'>
          <TwitterSquareFilled style={{ fontSize: 20 }} />
        </Button>
        <Button className='fb-btn' type='link' href='https://www.facebook.com'>
          <FacebookFilled style={{ fontSize: 20 }} />
        </Button>
        <Button
          className='instagram-btn'
          type='link'
          href='https://www.instagram.com'>
          <InstagramFilled style={{ fontSize: 20 }} />
        </Button>
      </Card>

      {/*  <Col span={16}>
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </Col> */}
    </div>
  );
};

export default ShowDetails;
