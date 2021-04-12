import { Card } from "antd";

const Thumbnail = (props) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 100, height: 100, borderRadius: 15 }}
        cover={<img alt='example' src={props.image} />}></Card>
    </div>
  );
};

export default Thumbnail;
