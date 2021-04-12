import { Card } from "antd";

const { Meta } = Card;

const PodcastCard = (props) => {
  return (
    <Card
      hoverable
      className='card-element'
      style={{ width: 150, borderRadius: 10 }}
      cover={
        <img
          alt='example'
          style={{ width: 150, borderRadius: 10 }}
          src={props.thumbnail}
        />
      }>
      <Meta title={props.title} />
    </Card>
  );
};

export default PodcastCard;
