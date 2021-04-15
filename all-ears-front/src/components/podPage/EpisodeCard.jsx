import React from "react";
import { List, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const EpisodeCard = (props) => {
  const listEpisode = [{ data: props.episodes }];

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const getRandomNum = () => {
    const rand = Math.floor(Math.random() * 100) + 1;
    return rand;
  };

  return (
    <div>
      <List
        itemLayout='vertical'
        dataSource={listEpisode}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text={getRandomNum()}
                key='list-vertical-star-o'
              />,
              <IconText
                icon={LikeOutlined}
                text={getRandomNum()}
                key='list-vertical-like-o'
              />,
              <IconText
                icon={MessageOutlined}
                text={getRandomNum()}
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
