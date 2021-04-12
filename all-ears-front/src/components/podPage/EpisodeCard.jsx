import React from "react";
import { Link } from "react-router-dom";
import { List, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const EpisodeCard = (props) => {
  const listEpisode = [
    {
      data: props.episodes,
    },
  ];

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <List
        itemLayout='vertical'
        dataSource={listEpisode}
        renderItem={(item) => (
          <List.Item
            extra={<img width={150} alt='thumbnail' src={props.image} />}
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text='156'
                key='list-vertical-star-o'
              />,
              <IconText
                icon={LikeOutlined}
                text='156'
                key='list-vertical-like-o'
              />,
              <IconText
                icon={MessageOutlined}
                text='2'
                key='list-vertical-message'
              />,
            ]}>
            <List.Item.Meta description={item.description} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default EpisodeCard;
