import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Box, Divider } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion,
} from 'framer-motion';

//layout
import TopBar2 from '../../layout/TopBar2';
import TopBar2SM from '../../layout/TopBar2SM';
import FooterLG from "../../layout/FooterLG";
import FooterSM from "../../layout/FooterSM";

//img
import Quotes from "../../../assets/img/quotes.png";


function Reading() {
    return(
        <div>
            <Box className='reading-top'>
                <div>
                    <Link to='/list/novel1/4'>
                        <ArrowBackIosNew style={{width:'40px', height: '60px'}}/>
                    </Link>
                    <Box className='reading-top-title'> 
                        <img src={Quotes} alt='quotes'/>
                        <p>5화 태양의 운명1</p>
                        
                        <img src={Quotes} alt='quotes'/>
                    </Box>
                    <Link to='/list/novel1/6'>
                        <ArrowForwardIos style={{width:'40px', height: '60px'}}/>
                    </Link>
                </div>
            </Box>
            <Box className="reading-body">
                <pre className="reading-body-pre"> {`
준비중입니다.

                `}</pre>
            </Box>
        </div>
    )
}


function ReadingAll() {
    return (
      <div>
        <Hidden smDown>
          <TopBar2/>
          <Reading/>
          <FooterLG/>
        </Hidden>
        <Hidden smUp>
          <TopBar2SM/>
          <Reading/>
          <FooterSM/>
          <div style={{height:'80px'}} />
        </Hidden>
      </div>
    );
  }
  
  export default ReadingAll;