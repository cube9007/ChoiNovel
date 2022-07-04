import React from "react";
import { Box, Button, Stack } from "@mui/material";

import Top from "./layout/Top";
import LoginButton2 from "./component/LoginButton2";

//img
import Section1 from "../assets/img/Section1.png";
import Quotes from "../assets/img/quotes.png"
import Book1 from "../assets/img/book1.png"
import Book2 from "../assets/img/book2.png"
import Book3 from "../assets/img/book3.png"

function Main() {
  
  return (
    <div className="flex column align-center">
      <div className="section-1 justify-center">
        <div className="section-1-bg"></div>
        <Top className='topComponent'/>
        <Box className="banner">
          <p className="banner-small"><span className="banner-middle">무</span>조건 <span className="banner-middle">보</span>는 <span className="banner-middle">작</span>가의 작품</p>
          <p className="banner-big c-f-white"> 초이의 소설 맛집</p>
        </Box>
        <div className="banner-img" >
          <img className="banner-img-png" src={Section1}></img>
        </div>
        <Stack className="banner-desc c-f-white align-center justify-center" spacing='30px'>
          <Box className="banner-desc-box f-b15">
            무조건 보는 작가의 완결 작품
          </Box>
          <ul className="banner-desc-ul flex f-b30b">
            <li>해와 달 </li>
            <li>무적 </li>
            <li>그림자 </li>
          </ul>
        </Stack>
      </div>

      <div className="section section-2">
        <Stack className="section-2-desc" flexDirection='column' alignItems='center' spacing='30px'>
          <div className="section-2-desc-quotes1">
            <img src={Quotes}/>
          </div>
          <Box>
            <p className="f-h1"> 책 고를 시간을 아껴줄 </p>
            <p className="f-h1"> 초이 프리미엄 스릴러 </p>
          </Box>
          <div >
            <img src={Quotes}/>
          </div>
          <div className="section-2-desc-small flex column align-center c-f-c666">
            <p className="f-h3">세계 필력 대회 1위 우승자 작가의 소설</p>
            <p className="f-h3">믿고 보는 초이 프리미엄</p>
          </div>
        </Stack>
        <Stack className="section-2-book" spacing='50px'>
          <Box className="section-2-book-box f-b30b"> 강력 추천 </Box>
          <div className="flex">
            <a href='/' className="section-2-book-exam column align-center">
              <img className="section-2-book-exam-img" src={Book1}/>
              <Stack spacing='15px' className="section-2-book-exam-letter">
                <p className="f-b15"> #초이 프리미엄 로멘스</p>
                <Stack spacing='10px'>
                  <p className="f-b20b">[독점] 해와 달</p>
                  <p className="f-b15">최원호</p>
                  <p className="f-b12">현대와 중세의 결합 <br></br>
                  두 시간 사이 벌어지는 로멘스
                  </p>
                </Stack>
              </Stack>
            </a>
            <a href='/' className="section-2-book-exam column align-center">
              <img className="section-2-book-exam-img" src={Book2}/>
              <Stack spacing='15px' className="section-2-book-exam-letter">
                <p className="f-b15"> #초이 프리미엄 로멘스</p>
                <Stack spacing='10px'>
                  <p className="f-b20b">[독점] 무적</p>
                  <p className="f-b15">최원호</p>
                  <p className="f-b12">현대와 중세의 결합 <br></br>
                  두 시간 사이 벌어지는 로멘스
                  </p>
                </Stack>
              </Stack>
            </a>
            <a href='/' className="section-2-book-exam column align-center">
              <img className="section-2-book-exam-img" src={Book3}/>
              <Stack spacing='15px' className="section-2-book-exam-letter">
                <p className="f-b15"> #초이 프리미엄 로멘스</p>
                <Stack spacing='10px'>
                  <p className="f-b20b">[독점] 그림자</p>
                  <p className="f-b15">최원호</p>
                  <p className="f-b12">현대와 중세의 결합 <br></br>
                  두 시간 사이 벌어지는 로멘스
                  </p>
                </Stack>
              </Stack>
            </a>
           
            
          </div>
        </Stack>
      </div>
    </div>
    );
  };
  export default Main;