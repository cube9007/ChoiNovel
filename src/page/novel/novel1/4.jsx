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
        <Link to='/list/novel1/3'>
            <ArrowBackIosNew style={{width:'40px', height: '60px'}}/>
        </Link>
    )
}

function RightArrow() {
    return(
        <Link to='/list/novel1/5'>
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
                        <p>4화 일방적인 인연 2</p>
                        
                        <img src={Quotes} alt='quotes'/>
                    </Box>
                    <RightArrow/>
                </div>
            </Box>
            <Box className="reading-body">
                <pre className="reading-body-pre"> {`
------ 햇조마을 무역주점 앞마당 (약 20년 전) ------



평화로운 어느 오후
햇빛이 쨍쨍하게 마을을 비췬다.

"꺄르르깔깔"

한 어린 아이가 주점 앞마당에서 뛰어 놀고 있다.
대여섯살정도 되어보이는 아이는, 앞마당에 있는 나무 앞에서 비행기장난감을 가지고 놀고 있다.
날라다니는 비행기가 마치 자신인듯 몰입하고 있다.
아이의 손에 들린 비행기는 오두막 앞마당의 나무에 매달려있는 타이어그네를 통과한다.

"부우웅~"

아이는 그 상태로 타이어 그네에 들어가 메달린다.

"헤헤에에"

러셀이 오두막에 앉아 멀리감찌 쳐다본다.
앉아있는 러셀은 흐믓하게 미소를 짓는다.

"루소! 그만 놀고 아빠랑 밥먹어야지!~"
"싫어! 더 놀거야"

어린 아이 루소는 아빠가 부르는데도, 싫다며 돌아가려하지 않는다.

"안 들어오면 아빠가 혼내줄거야~"

러셀이 루소를 타이른다.

"싫어 싫어! 더 놀거야!"

러셀이 미소를 머금고는 루소를 향해 다가간다.

'성큼 성큼'

러셀이 루소를 향해 다가오더니 루소를 하늘을 향해 두손으로 번쩍 들어올린다.

"아 아빠!"

루소가 아기장거리며 떼를 쓴다
햇빛 사이로 비추는 루소의 얼굴을 보는 러셀
러셀의 눈이 반짝반짝 빛나며 루소를 쳐다본다.
그러고는 들어올린 루소를 자신의 품에 껴앉는다.

"루소. 하나뿐인 내 사랑스러운 아들"
"이잉 숨막혀.."

루소는 러셀에 품에 안긴채 손을 움켜진다.
러셀은 루소를 안은 채로 나무 밑 그늘에 눕는다.

'끼익 끼익'

나무에 매달린 타이어 그네가 바람에 흔들리며 소리를 냈다.

'짹 쨱 짹 쨱'

근처의 참새들도 몰려와 오후의 바람을 맛본다.
평화로운 오후 햇살의 비치며 러셀과 루소는 서로의 온기를 느낀다.
나무잎 사이로 빛이 새며들어와 러셀에 얼굴에 비친다.
루소는 어느새 새근새근 잠이 들었다.

'새근 새근'



------ 햇조마을 무역주점 1층 (현재) ------



"자 먹고 죽자고!~"
"짠!"

러셀은 쿠곰을 불러 환영회를 했다.
이른 저녁 햇조마을 무역주점에서 환영회 겸 술파티가 벌여졌다
대낮에 먹은 술은 어디갔는지, 사람들이 모여 또 술을 마시고 있다.

"이름이 쿠곰이라고 했나? 러셀한테 이야기는 들었네"
"네 반갑습니다."

한 총잡이가 인사를 했다. 
그는 러셀의 오랜 친구라고 했다.

"나는 러셀 30년지기 친구 크롬이라네 잘부탁하네"





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