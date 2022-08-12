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

function LeftArrow() {
    return(
        <Link to='/list/novel1/1'>
            <ArrowBackIosNew style={{width:'40px', height: '60px'}}/>
        </Link>
    )
}

function RightArrow() {
    return(
        <Link to='/list/novel1/2'>
            <ArrowForwardIos style={{width:'40px', height: '60px'}}/>
        </Link>
    )
}


function Reading() {
    return(
        <div>
            <Box className='reading-top'>
                <div>
                    <LeftArrow/>
                    <Box className='reading-top-title'> 
                        <img src={Quotes} alt='quotes'/>
                        <p>1화 해 속성과 달 속성</p>
                        
                        <img src={Quotes} alt='quotes'/>
                    </Box>
                    <RightArrow/>
                </div>
            </Box>
            <Box className="reading-body">
                <pre className="reading-body-pre"> {`
인간의 속성은 해 속성과 달 속성으로 나뉜다. 해 속성 인간은 양의 기운으로 불같고 강한 에너지를 뽐내며 군대를 이루고, 거대한 문명 건축을 이뤄나갔다. 달 속성 인간은 음의 기운으로, 부드럽고 섬세한 모습으로, 기술 발전과 아름다운 미적 가치관을 발전시켰다. 두 속성의 인간은 각기 부족한 점을 서로에게 보완받아 서로 도움을 받고 살아왔다.  그러던 어느날 이 두 속성의 인간 사이에 금이 가게 되는데...

"투둑.. 투두둑"

어디선가 터덜거리는 소리가 들린다.
해 속성의 사람인 것 같다.

                `}</pre>
            </Box>
            <Box className='reading-foot'>
                <LeftArrow/>
                <Link to='/list/novel1'>
                    <p className="reading-foot-list">목록</p>
                </Link>
                <RightArrow/>
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