import { Card } from "antd";

const Thumbnail = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 70, height: 70, borderRadius: 15 }}
        cover={
          <img
            style={{ width: 150 }}
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }></Card>
    </div>
  );
};

export default Thumbnail;
