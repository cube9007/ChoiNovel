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
                <Link to='6'>
                    <p>6화 : 태양의 운명2</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='5'>
                    <p>5화 : 태양의 운명1</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='4'>
                    <p>4화 : 헤어짐의 운명3</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='3'>
                    <p>3화 : 헤어짐의 운명2</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='2'>
                    <p>2화 : 헤어짐의 운명1</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='1'>
                    <p>1화 : 해 속성과 달 속성</p>
                    <p>2022.08.11</p>
                </Link>
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