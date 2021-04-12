import { Card } from "antd";

const OnePodImg = (props) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300, height: 300, borderRadius: 30 }}
        cover={<img alt='example' src={props.image} />}></Card>
    </div>
  );
};

export default OnePodImg;
