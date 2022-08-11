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
import Novel5 from '../../assets/img/List/novel5.png';

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
                    <p className="index-top-title">왕의 전쟁</p>
                    <div className="index-top-con">
                        <img src={Novel5} alt="왕의 전쟁"/>
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
                <Link to='5'>
                    <p>준비중입니다.</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='4'>
                    <p>준비중입니다.</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='3'>
                    <p>준비중입니다.</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='2'>
                    <p>준비중입니다.</p>
                    <p>2022.08.11</p>
                </Link>
                <Divider />
                <Link to='1'>
                    <p>준비중입니다.</p>
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