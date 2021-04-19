import { Card } from "antd";

const Thumbnail = (props) => {
  return (
    <img
      className='thumbnail-pictures'
      alt='thumbnails'
      style={{
        width: " 100%",
        height: " 100%",
        borderRadius: 10,
        objectFit: "cover",
      }}
      src={props.thumbnail}
    />
  );
};

export default Thumbnail;
