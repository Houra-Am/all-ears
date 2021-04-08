import { Card } from 'antd';

const PodcastCard = (props) => {
  return (
  <div>
        <Card
          hoverable
          style={{ width:200, height:200, borderRadius:30}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          {/* <Img>{}</Img>
          <P>{props.title}</P>
          <P>{props.creator}</P> */}
          <p>Title: Houra</p>
          <p>Subtitle: Houra</p>
       </Card>  
  </div>     
  )
   
};

export default PodcastCard;
