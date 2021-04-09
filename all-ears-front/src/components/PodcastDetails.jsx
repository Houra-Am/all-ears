import React from 'react';
import { Card} from "antd";
import { HeartTwoTone, PlayCircleOutlined } from '@ant-design/icons';


const PodcastDetails = () => {
    return (
      <div>
           <div className= "row">
              <div className= "col">
                 <div>
                    <Card
                         hoverable
                         style={{ width:200, height:100, borderRadius:10}}
                         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                         >
                    </Card>
                 </div>  
             </div>
                 
             <div className= "col">
                   
                    <p>Duration</p>
                    <h4>Title</h4>
                    <div>
                        <p>
                             Description:On la reconnaît à l'abondance 
                             Description:On la reconnaît à l'abondance 
                        </p>
                    </div>
                    
                    {/* <i class="far fa-heart"></i> */}
                    <HeartTwoTone />
                      
             </div>
             <div className=" col">
                  <div> 
                    <i class="fas fa-play-circle 7x"></i>
                    {/* <PlayCircleOutlined 
                    style={{
                    width: 50,
                    height: 50
                }}/> */}
                  </div> 
             </div>
            </div>
        </div>
    )
}

export default PodcastDetails
