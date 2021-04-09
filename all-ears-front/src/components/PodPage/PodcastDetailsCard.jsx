import { Card } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const PodcastDetailsCard = (props) => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div>
            <Card
              hoverable
              style={{ width: 200, height: 100, borderRadius: 10 }}
              cover={<img alt='example' src={props.img} />}></Card>
          </div>
        </div>

        <div className='col'>
          <p>Duration</p>
          <h4>{props.title}</h4>
          <div>
            <p>
              Description: On la reconnaît à l'abondance Description:On la
              reconnaît à l'abondance
            </p>
          </div>

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
