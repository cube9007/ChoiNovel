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
        <Link to='/list/novel1/2'>
            <ArrowBackIosNew style={{width:'40px', height: '60px'}}/>
        </Link>
    )
}

function RightArrow() {
    return(
        <Link to='/list/novel1/4'>
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
                        <p>3화 일방적인 인연 1</p>
                        
                        <img src={Quotes} alt='quotes'/>
                    </Box>
                    <RightArrow/>
                </div>
            </Box>
            <Box className="reading-body">
                <pre className="reading-body-pre"> {`
------ 햇조마을 무역주점 2층 (현재) ------



"어때, 이 붉은 망치를 보니 기억이 나나?"
'취이이이..'

주인장은 붉은 망치를 쿠곰의 눈 앞에 들이밀었다.

"끄악"

쿠곰이 붉은 망치를 보자, 계약 당시의 기억이 흐릿하게 흘러갔다.
무의식이지만, 강렬하게 망치를 찍은 그 순간이 눈 앞에 아른거렸다. 

"혹여나 이 계약을 무시하고 햇빛마을로 도망갈 생각은 말게나, 이 마을 인근은 온통 사막으로 되어있어서, 아무리 태양인이어도, 보통 체력으론 힘들걸세"

"그.. 그럼 이곳에서 뭘 하면 됩니까?"

"앞으로 3년, 태양력 22년 7월까지 내가 시키는 것을 하면 된다네"
"아 그리고 내 이름은 러셀이네, 부르는 건 자유롭게 불러도 좋아!"

주인장은 퉁명스럽게 자기 이름을 말하고는 다시 망치를 내려놓았다.
그러고는 2층 계단 앞으로 걸어갔다.

"저.. 저기 러셀.. 님?"
"왜!"

"지금 당장 일해야되는 겁니까?"
"자넨 살려준 사람한테 고맙지도 않나? 아무리 이유 없이 베푼 호의는 아니라지만, 목숨을 얻은 주제에 일하기 싫은가?"

러셀이 다시 돌아와서 망치를 집어들려고 했다.

"아.. 아닙니다."
'휴.. 성질머리 하고는'

쿠곰의 긴장이 끊이질 않았다.

"크큭. 장난일세, 자넨 그냥 내 시키는 것만 하면되, 너무 긴장할 필요까진 없네, 첫날이라 무게감 잡은 거 뿐이야, 첫날이니 오늘은 술이나 마시자고!"






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