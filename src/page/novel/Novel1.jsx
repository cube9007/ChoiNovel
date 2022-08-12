import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Box, Divider } from '@mui/material';
import { motion,
} from 'framer-motion';
//layout
import TopBar2 from '../layout/TopBar2';
import TopBar2SM from '../layout/TopBar2SM';
import FooterLG from "../layout/FooterLG";
import FooterSM from "../layout/FooterSM";

//img
import Novel1 from '../../assets/img/List/novel1.png';

function Chapter(props) {
    return (
        <Link to={props.chapter} >
            <p> {props.title}</p>
            <p> {props.date} </p>
        </Link>
    )
}

// function ChapterAll() {
//     let title = [
//         '해 속성과 달 속성',
//         '헤어짐의 운명1',
//         '헤어짐의 운명2',
//         '헤어짐의 운명3',
//         '태양의 운명1',
//         '태양의 운명2',
//     ]
    
//     let i = 0
//     while ( i < title.length ) {
//         document.write('<Link to=' + (i+1) + 'onClick={' + scrollTop + '}>' + '<p>' + (i+1) + '화 : ' + title[i] + '</p>' + '<p>' + '</p>' + '</Link>' );
//         i = i + 1
        
//     }
// }

function Index() {
    return(
        <div>
            <Box className='index-top'>
                <motion.div
                initial={{ opacity: 0, 
                    x: -50
                }}
                whileInView={{ opacity: 1,
                    x: 0,
                    transition: {
                    type: "spring",
                    duration: 2,
                    }
                }}
                >
                    <p className="index-top-title">해와 달</p>
                    <div className="index-top-con">
                        <img src={Novel1} alt="해와 달"/>
                        <div>
                            <p>작품 소개</p>
                            <p>
                            두 속성으로 나뉘어진 인간 <br/>
                            서로의 장점으로 단점을 보완해주지만, <br/>
                            그들 사이의 균열이 가게 되는데...
                            </p>
                        </div>
                    </div> 
                </motion.div>
            </Box>
            
            <Box className='index-body'>
                <Divider style={{border: '1px solid #666'}}/>

                <Chapter chapter='1' title='1화 : 해 속성과 달 속성' date='2022.08.11'/>
                <Divider />
                <Chapter chapter='2' title='2화 : 헤어짐의 운명1' date='2022.08.22'/>
                <Divider />
                <Chapter chapter='3' title='3화 : 헤어짐의 운명2' date='2022.08.22'/>
                <Divider />
                <Chapter chapter='4' title='4화 : 헤어짐의 운명3' date='2022.08.22'/>
                <Divider />
                <Chapter chapter='5' title='5화 : 태양의 운명1' date='2022.08.22'/>
                <Divider />
                <Chapter chapter='6' title='6화 : 태양의 운명2' date='2022.08.22'/>
                
                <Divider style={{border: '1px solid #666'}}/>
            </Box>
        </div>
    )
}


function IndexAll() {
    return (
      <div>
        <Hidden smDown>
          <TopBar2/>
          <Index/>
          <FooterLG/>
        </Hidden>
        <Hidden smUp>
          <TopBar2SM/>
          <Index/>
          <FooterSM/>
          <div style={{height:'80px'}} />
        </Hidden>
      </div>
    );
  }
  
  export default IndexAll;