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
import Novel6 from '../../assets/img/List/novel6.png';

function Chapter(props) {
    return (
        <Link to={props.chapter} >
            <p> {props.title}</p>
            <p> {props.date} </p>
        </Link>
    )
}

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
                    <p className="index-top-title">신발을 부탁해</p>
                    <div className="index-top-con">
                        <img src={Novel6} alt="신발을 부탁해"/>
                        <div>
                            <p>작품 소개</p>
                            <p>
                            준비중입니다.
                            </p>
                        </div>
                    </div> 
                </motion.div>
            </Box>
            
            <Box className='index-body'>
                <Divider style={{border: '1px solid #666'}}/>
                <Chapter chapter={`1`} title='준비중입니다.' date='2022.08.11'/>
                <Divider />
                <Chapter chapter={`2`} title='준비중입니다.' date='2022.08.11'/>
                <Divider />
                <Chapter chapter={`3`} title='준비중입니다.' date='2022.08.11'/>
                <Divider />
                <Chapter chapter={`4`} title='준비중입니다.' date='2022.08.11'/>
                <Divider />
                <Chapter chapter={`5`} title='준비중입니다.' date='2022.08.11'/>
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