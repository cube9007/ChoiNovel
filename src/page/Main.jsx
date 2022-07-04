import React from "react";
import { Box, Button, duration, Stack } from "@mui/material";

import { motion,
        useAnimationFrame,
         } from 'framer-motion'

//layout
import Top from "./layout/Top";
import Fix from "./layout/Fix";

//img
import Section1 from "../assets/img/Section1.png";
import Quotes from "../assets/img/quotes.png";
import Book1 from "../assets/img/book1.png";
import Book2 from "../assets/img/book2.png";
import Book3 from "../assets/img/book3.png";
import time from "../assets/img/time.png";
import watch from "../assets/img/watch.png";
import Star from "../assets/img/star.png";

function Main() {
  
  return (
    <div className="flex column align-center">

      <div className="section-1 justify-center">
        <div className="section-1-bg"></div>
        <Top className='topComponent'/>
        <Fix />
        <motion.div className="banner"
          initial={{ opacity: 0, 
            y: 40
          }}
          whileInView={{ opacity: 1,
              y: 0,
              transition: {
              type: "spring",
              duration: 2,
              }
          }}
        >
          <p className="banner-small"><span className="banner-middle">무</span>조건 <span className="banner-middle">보</span>는 <span className="banner-middle">작</span>가의 작품</p>
          <p className="banner-big c-f-white"> 초이의 소설 맛집</p>
        </motion.div>
        <motion.div className="banner-img" 
          initial={{ opacity: 0, 
            x: 40
          }}
          whileInView={{ opacity: 1,
              x: 0,
              transition: {
              type: "spring",
              duration: 5,
              }
          }}
        >
          <img className="banner-img-png" src={Section1}></img>
        </motion.div>
        <Stack className="banner-desc c-f-white align-center justify-center" spacing='30px' >
          <Box className="banner-desc-box f-b14">
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
        <motion.div className="section-2-desc" 
          initial={{ opacity: 0, 
            y: 60
          }}
          whileInView={{ opacity: 1,
              y: 0,
              transition: {
              type: "spring",
              duration: 4,
              }
          }}
        >
          <div className="section-2-desc-quotes1">
            <img src={Quotes}/>
          </div>
          <div>
            <p className="f-h1"> 책 고를 시간을 아껴줄 </p>
            <p className="f-h1"> 초이 프리미엄 스릴러 </p>
          </div>
          <div >
            <img src={Quotes}/>
          </div>
        </motion.div>
        <motion.div className="section-2-desc-small flex column align-center c-f-c666"
          initial={{ opacity: 0, 
            y: 40
          }}
          whileInView={{ opacity: 1,
              y: 0,
              transition: {
              type: "spring",
              duration: 4,
              }
          }}
        >
            <p className="f-h3">세계 필력 대회 1위 우승자 작가의 소설</p>
            <p className="f-h3">믿고 보는 초이 프리미엄</p>
        </motion.div>
        <Stack className="section-2-book" spacing='50px'>
          <Box className="section-2-book-box f-b30b"> 강력 추천 </Box>
          <div className="flex">
            <motion.div className="section-2-book-exam column align-center"
              initial={{ opacity: 0, 
                x: 100
              }}
              whileInView={{ opacity: 1,
                  x: 0,
                  transition: {
                  type: "spring",
                  duration: 3,
                  }
              }}
            >
              <img className="section-2-book-exam-img" src={Book1}/>
              <Stack spacing='14px' className="section-2-book-exam-letter">
                <p className="f-b14"> #초이 프리미엄 로멘스</p>
                <Stack spacing='10px'>
                  <p className="f-b20b">[독점] 해와 달</p>
                  <p className="f-b14">최원호</p>
                  <p className="f-b12">현대와 중세의 결합 <br></br>
                  두 시간 사이 벌어지는 로멘스
                  </p>
                </Stack>
              </Stack>
              <img className="section-2-book-exam-star" src={Star} />
            </motion.div>
            <motion.div className="section-2-book-exam column align-center"
              initial={{ opacity: 0, 
                x: 100
              }}
              whileInView={{ opacity: 1,
                  x: 0,
                  transition: {
                  type: "spring",
                  duration: 3,
                  }
              }}
            >
              <img className="section-2-book-exam-img" src={Book2}/>
              <Stack spacing='14px' className="section-2-book-exam-letter">
                <p className="f-b14"> #초이 프리미엄 로멘스</p>
                <Stack spacing='10px'>
                  <p className="f-b20b">[독점] 무적</p>
                  <p className="f-b14">최원호</p>
                  <p className="f-b12">현대와 중세의 결합 <br></br>
                  두 시간 사이 벌어지는 로멘스
                  </p>
                </Stack>
              </Stack>
              <img className="section-2-book-exam-star" src={Star} />
            </motion.div>
            <motion.div className="section-2-book-exam column align-center"
              initial={{ opacity: 0, 
                x: 100
              }}
              whileInView={{ opacity: 1,
                  x: 0,
                  transition: {
                  type: "spring",
                  duration: 3,
                  }
              }}
            >
              <img className="section-2-book-exam-img" src={Book3}/>
              <Stack spacing='14px' className="section-2-book-exam-letter">
                <p className="f-b14"> #초이 프리미엄 로멘스</p>
                <Stack spacing='10px'>
                  <p className="f-b20b">[독점] 그림자</p>
                  <p className="f-b14">최원호</p>
                  <p className="f-b12">현대와 중세의 결합 <br></br>
                  두 시간 사이 벌어지는 로멘스
                  </p>
                </Stack>
              </Stack>
              <img className="section-2-book-exam-star" src={Star} />
            </motion.div>
          </div>
        </Stack>
      </div>

      <Stack className="section section-3" spacing='120px'>
        <motion.div className="section-3-head column align-center"
          initial={{ opacity: 0, 
            y: 20
          }}
          whileInView={{ opacity: 1,
              y: 0,
              transition: {
              type: "spring",
              duration: 2,
              }
          }}
        >
          <p className="f-h1 c-f-white flex"> 하루 평균 155분</p>
          <img src={time} />
        </motion.div>
        <img src={watch} />
        <motion.div className="section-3-desc"
          initial={{ opacity: 0, 
            y: 20
          }}
          whileInView={{ opacity: 1,
              y: 0,
              transition: {
              type: "spring",
              duration: 2,
              }
          }}
        >
          <p >
            <span className="f-h1">독서,</span> 그 이상의 매력 
          </p>
          <p >
            <span className="f-h1">출퇴근</span> 시간의 <span className="f-h1">지루함 끝</span>
          </p>
        </motion.div
        
        >
      </Stack>
    </div>
    );
  };
  export default Main;