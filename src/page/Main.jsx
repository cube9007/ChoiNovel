import React from "react";
import { Box, Button, Divider, Stack,
      Accordion, AccordionSummary, AccordionDetails
      } from "@mui/material";

import { ExpandMore
      } from "@mui/icons-material"

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
import Gift from "../assets/img/gift.png"
import Section4Img1 from "../assets/img/section4_img1.png"
import Section4Img2 from "../assets/img/section4_img2.png"
import Section4Img3 from "../assets/img/section4_img3.png"
import Section4Img4 from "../assets/img/section4_img4.png"
import Section4Img5 from "../assets/img/section4_img5.png"
import Section4Img6 from "../assets/img/section4_img6.png"
import manyBooks from "../assets/img/manyBooks.png"
import sns1 from "../assets/img/sns1.png"
import sns2 from "../assets/img/sns2.png"
import sns3 from "../assets/img/sns3.png"
import sns4 from "../assets/img/sns4.png"
import sns5 from "../assets/img/sns5.png"

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
            x: 0
          }}
          whileInView={{ opacity: 1,
              x: 100,
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
        </motion.div>
      </Stack>

      <div className='section section-4'>
        <motion.div className=" section-4-head"
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
          <img src={Gift} />
          <div className=" column align-center">
            <p className="f-h1">라이트 노벨부터 장편까지</p>
            <p className="f-h1">추가 과금 '0원'</p>
          </div>
          <div className="f-h3 c-f-c666 column align-center">
            <p className="f-h3">권수가 많아도 걱정하지 마세요</p>
            <p className="f-h3">초이는 무제한이니까요</p>
          </div>
        </motion.div>

        <div className="section-4-desc">
          <div className="section-4-desc-title">
            <Box className="section-4-desc-title-divider" />
            <Box className="section-4-desc-title-box f-b30b"> 판타지 </Box>
          </div>
          <Stack spacing='50px'>
            <motion.div className="flex align-center"
              initial={{ opacity: 0, 
                y: 20
              }}
              whileInView={{ opacity: 1,
                  y: 0,
                  transition: {
                  type: "spring",
                  duration: 4,
                  }
              }}
            >
              <div className="section-4-desc-wordRight">
                <p className="f-b30b">모니터 안의 세상</p>
                <p className="f-b20 c-f-c666">최원호</p>
                <p className="f-b15 c-f-c666"> 무수히 많은 컴퓨터 속 단 하나, 특별한 모니터. 어느 날 한 남자는 모니터 속을 들어갈 수 있게 되는 능력을 얻게 된다. 
                  막막한 세상 속에서 혼자 떠도는 한 남자. 이 남자는 돈도 없고 집도 없는 빈곤한 형편이다. 마지막 술 한잔을 걸치고 남은 
                  노잣돈으로 피씨방이나 들러서 깽판을 친다. 싸움이 난 현장에서 주인공은 뭔지 모를 몽둥이같은 것에 맞고 모니터에 부딪혀
                   쓰러진다. 그리고 주인공은 그 자리에서 갑자기 사라져 버리고 만다. 정신을 차린 주인공은 어디인지 모를 공간에 오게 되는데..</p>
              </div>
              <img src={Section4Img1} />
            </motion.div>
            <motion.div className="flex align-center"
              initial={{ opacity: 0, 
                y: 20
              }}
              whileInView={{ opacity: 1,
                  y: 0,
                  transition: {
                  type: "spring",
                  duration: 4,
                  }
              }}
            >
              <img src={Section4Img2} />
              <div className="section-4-desc-wordLeft">
                <p className="f-b30b">별빛 조각사</p>
                <p className="f-b20 c-f-c666">최원호</p>
                <p className="f-b15 c-f-c666"> 숨겨진 직업 ‘별빛 조각사', 게이머 ‘위드’의 직업이다. 그는 수없이 많은 게임의 랭커를 따낸 슈퍼 
                 게이머이다. 그런 그가 시작한 게임 ‘제논월드'. 전세계 게임 점유율 1위, 인비저블 하이퍼 필링 슈트 기술이 들어간 최초의 게임, 엄청난 기술력과,
                 그래픽으로 현실적인 몰입도를 자랑하는 게임이다. 많은 게이머들이 이 게임에 도전해서 열을 내고 있으며, 게임 물가가 현실 물가와 맞먹을 정도로 
                 게임의 인기가 높다. 그런 게임 속에서도 독보적인 1위를 달리고 있는 게이머 ‘위드'. 하지만 그에게도 치명적인 단점이 있었으니 바로 직업이 
                 ‘조각사'라는 것...</p>
              </div>
            </motion.div>
            <motion.div className="flex align-center"
              initial={{ opacity: 0, 
                y: 20
              }}
              whileInView={{ opacity: 1,
                  y: 0,
                  transition: {
                  type: "spring",
                  duration: 4,
                  }
              }}
            >
              <div className="section-4-desc-wordRight">
                <p className="f-b30b">픽셀전쟁</p>
                <p className="f-b20 c-f-c666">최원호</p>
                <p className="f-b15 c-f-c666">  어느날 인류는 상상도 못할 괴생명체를 발견하게 된다. 첫 만남은 그렇게 끔찍하지 않았지만, 이는 
                괴물과의 전쟁의 서막을 암시하는 것이었다. 처음으로 발견된 생명체는 바로 ‘슬라임'이었다. 현실에는 없는 생명체이지만, 게임이나 영화 속에 
                존재하는 젤리 상태의 생명체, 이 생명체의 특징은 신체를 구성하는 최소 단위가, 세포나 원자같은 것이 아니라, 픽셀이라는 것. 마치 게임의 
                도트 그래픽 그대로 현실에 데려온 것 같은 존재가 실제로 나타난 것이다. 픽셀 형태의 생명체들이 현실에 점점 나타나기 시작하면서 사람들은 
                이를 ‘픽셀 몬스터'라고 불렀다. 점점 거대하고 강력한 픽셀 몬스터가 나타나면서 인류는 이들과 전쟁을 하게 되는데...</p>
              </div>
              <img className="section-4-desc-wordRight-img3" src={Section4Img3} />
            </motion.div>
          </Stack>
          <div className="section-4-desc-title">
            <Box className="section-4-desc-title-divider" />
            <Box className="section-4-desc-title-box f-b30b"> 무협 </Box>
          </div>
          <Stack spacing='50px'>
            <motion.div className="flex align-center"
              initial={{ opacity: 0, 
                y: 20
              }}
              whileInView={{ opacity: 1,
                  y: 0,
                  transition: {
                  type: "spring",
                  duration: 4,
                  }
              }}
            >
              <img src={Section4Img4} />
              <div className="section-4-desc-wordLeft">
                <p className="f-b30b">워노화신</p>
                <p className="f-b20 c-f-c666">최원호</p>
                <p className="f-b15 c-f-c666"> 무수히 많은 컴퓨터 속 단 하나, 특별한 모니터. 어느 날 한 남자는 모니터 속을 들어갈 수 있게 되는 
                능력을 얻게 된다. 막막한 세상 속에서 혼자 떠도는 한 남자. 이 남자는 돈도 없고 집도 없는 빈곤한 형편이다. 마지막 술 한잔을 걸치고 남은 
                노잣돈으로 피씨방이나 들러서 깽판을 친다. 싸움이 난 현장에서 주인공은 뭔지 모를 몽둥이같은 것에 맞고 모니터에 부딪혀 쓰러진다. 그리고 
                주인공은 그 자리에서 갑자기 사라져 버리고 만다. 정신을 차린 주인공은 어디인지 모를 공간에 오게 되는데..</p>
              </div>
            </motion.div>
            <motion.div className="flex align-center"
              initial={{ opacity: 0, 
                y: 20
              }}
              whileInView={{ opacity: 1,
                  y: 0,
                  transition: {
                  type: "spring",
                  duration: 4,
                  }
              }}
            >
              <div className="section-4-desc-wordRight">
                <p className="f-b30b">왕의 전쟁</p>
                <p className="f-b20 c-f-c666">최원호</p>
                <p className="f-b15 c-f-c666"> 숨겨진 직업 ‘별빛 조각사', 게이머 ‘위드’의 직업이다. 그는 수없이 많은 게임의 랭커를 따낸 슈퍼 
                 게이머이다. 그런 그가 시작한 게임 ‘제논월드'. 전세계 게임 점유율 1위, 인비저블 하이퍼 필링 슈트 기술이 들어간 최초의 게임, 엄청난 기술력과,
                 그래픽으로 현실적인 몰입도를 자랑하는 게임이다. 많은 게이머들이 이 게임에 도전해서 열을 내고 있으며, 게임 물가가 현실 물가와 맞먹을 정도로 
                 게임의 인기가 높다. 그런 게임 속에서도 독보적인 1위를 달리고 있는 게이머 ‘위드'. 하지만 그에게도 치명적인 단점이 있었으니 바로 직업이 
                 ‘조각사'라는 것...</p>
              </div>
              <img src={Section4Img5} />
            </motion.div>
            <motion.div className="flex align-center"
              initial={{ opacity: 0, 
                y: 20
              }}
              whileInView={{ opacity: 1,
                  y: 0,
                  transition: {
                  type: "spring",
                  duration: 4,
                  }
              }}
            >
              <img className="section-4-desc-wordLeft-img6" src={Section4Img6} />
              <div className="section-4-desc-wordLeft">
                <p className="f-b30b">세계 최강</p>
                <p className="f-b20 c-f-c666">최원호</p>
                <p className="f-b15 c-f-c666">  어느날 인류는 상상도 못할 괴생명체를 발견하게 된다. 첫 만남은 그렇게 끔찍하지 않았지만, 이는 
                괴물과의 전쟁의 서막을 암시하는 것이었다. 처음으로 발견된 생명체는 바로 ‘슬라임'이었다. 현실에는 없는 생명체이지만, 게임이나 영화 속에 
                존재하는 젤리 상태의 생명체, 이 생명체의 특징은 신체를 구성하는 최소 단위가, 세포나 원자같은 것이 아니라, 픽셀이라는 것. 마치 게임의 
                도트 그래픽 그대로 현실에 데려온 것 같은 존재가 실제로 나타난 것이다. 픽셀 형태의 생명체들이 현실에 점점 나타나기 시작하면서 사람들은 
                이를 ‘픽셀 몬스터'라고 불렀다. 점점 거대하고 강력한 픽셀 몬스터가 나타나면서 인류는 이들과 전쟁을 하게 되는데...</p>
              </div>
            </motion.div>
          </Stack>
        </div>
      </div>

      <div className="section-5">
        <div className="section-5-desc">
          <motion.div 
            initial={{ opacity: 0, 
              y: 20
            }}
            whileInView={{ opacity: 1,
                y: 0,
                transition: {
                type: "spring",
                duration: 4,
                }
            }}
          >
            <p className="c-f-white f-h1">당신을 기다리는</p>
            <p className="c-f-white f-h1">10,000권의 작품!</p>
          </motion.div>
        </div>
        <motion.div className="section-5-motion"
          animate={{ 
            x: [-70, -1900, -70,]
          }} 
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatDelay: 0
          }}  
        >
          <img className="section-5-motion-img" src={manyBooks} />
        </motion.div>
      </div>

      <div className="section section-6" >
          <p className="c-f-white f-h1">자주 묻는 질문 </p>
          <Stack className="section-6-faq" spacing="30px">
            <Accordion className="section-6-faq-a">
              <AccordionSummary 
                expandIcon={<ExpandMore fontSize='100px' className="section-6-faq-icon"/>}
              >
                <p className="f-b25b"> 안쓰면 정말 환불해 주나요? </p>
              </AccordionSummary>
              <AccordionDetails >
                <p className="f-b20 c-f-c666">물론입니다. 결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액 환불해 드리고 있어요.</p>
                <p className="f-b20 c-f-c666"> <span className='f-b20b'>[밀리 &gt; 관리 &gt; 구독관리 &gt; 결제 내역 확인]</span>에서 직접 환불이 가능하며,</p>
                <p className="f-b20 c-f-c666">해결이 어려운 경우 고객센터로 문의해 주세요.</p>
              </AccordionDetails>
            </Accordion>

            <Accordion className="section-6-faq-a">
              <AccordionSummary 
                expandIcon={<ExpandMore fontSize='100px' className="section-6-faq-icon"/>}
              >
                <p className="f-b25b"> 구독 중 해지 할 수 있나요? 수수료는 없나요? </p>
              </AccordionSummary>
              <AccordionDetails >
                <p className="f-b20 c-f-c666">다음달부터 결제되지 않도록 수수료 없이 언제든지 해지하실 수 있습니다.</p>
                <p className="f-b20 c-f-c666"> <span className='f-b20b'>[밀리 &gt; 관리 &gt; 구독관리 &gt; 자동결제 해지]</span> 메뉴를 통해 기간에 상관없이 직접 가능해요.</p>
              </AccordionDetails>
            </Accordion>

            <Accordion className="section-6-faq-a">
              <AccordionSummary 
                expandIcon={<ExpandMore fontSize='100px' className="section-6-faq-icon"/>}
              >
                <p className="f-b25b"> 무료 혜택은 누구나 받을 수 있나요? </p>
              </AccordionSummary>
              <AccordionDetails >
                <p className="f-b20 c-f-c666">네, 초이 회원이라면 누구나 첫 정기구독 신청 시 1회 제공됩니다.</p>
                <p className="f-b20 c-f-c666"> <span className='f-b20b'>[밀리 &gt; 관리 &gt; 구독관리 &gt; 결제 내역 확인]</span>에서 직접 환불이 가능하며,</p>
                <p className="f-b20 c-f-c666">해결이 어려운 경우 고객센터로 문의해 주세요.</p>
              </AccordionDetails>
            </Accordion>

            <Accordion className="section-6-faq-a">
              <AccordionSummary 
                expandIcon={<ExpandMore fontSize='100px' className="section-6-faq-icon"/>}
              >
                <p className="f-b25b"> 어떤 기기에서 사용할 수 있나요? </p>
              </AccordionSummary>
              <AccordionDetails >
                <p className="f-b20 c-f-c666">휴대폰 / 태블릿 / PC / E Ink 등에서 사용하실 수 있습니다.</p>
              </AccordionDetails>
            </Accordion>
          </Stack>          
      </div>

      <div className='footer' >
        <Stack className="footer-box" spacing='30px'>
          <div className='justify-space flex'>
            <p className='f-b20b'>(주) 초이의 소설맛집 </p>
            <Stack spacing='15px' direction='row'>
              <img className="footer-sns" src={sns1}></img>
              <img className="footer-sns" src={sns2}></img>
              <img className="footer-sns" src={sns3}></img>
              <img className="footer-sns" src={sns4}></img>
              <img className="footer-sns" src={sns5}></img>
            </Stack>
          </div>
          <Stack spacing="10px" className="f-b12 c-f-c666">
            <Stack spacing="30px" direction='row'>
              <p>대표이사 : 최원호</p>
              <p>사업자등록번호 : 000-00-000000 </p>
              <p>호스팅 제공자 : (주) 초이의 소설맛집 </p>
            </Stack>
            <Stack spacing="30px" direction='row'>
              <p>주소 : 서울특별시 금천구 남부순환로 112길 35</p>
              <p>통신판매업 신고번호 : 2022-서울가산-2022호</p>
            </Stack>
            <Stack spacing="30px" direction='row'>
              <p>마케팅 제휴 문의 : cube9007@naver.com</p>
              <p>고객정보보호 책임자 : 최원호(cube9007@naver.com)</p>
            </Stack>
          </Stack>
          <p className="f-b12 c-f-c666">
            Copyright©2022 초이의 소설맛집 All Rights Reserved.
          </p>
        </Stack>
      </div>

    </div>
    );
  };
  export default Main;