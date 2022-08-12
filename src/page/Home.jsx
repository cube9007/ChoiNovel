import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Box, Button, Divider } from '@mui/material';
import { ArrowBackIosNew, ArrowForward, ArrowForwardIos, Map, CreditCard, Cake } from '@mui/icons-material';
import { motion,
        } from 'framer-motion'

//layout
import TopBar1 from './layout/TopBar1';
import TopBar1SM from './layout/TopBar1SM';
import FooterSM from "./layout/FooterSM";
import FooterMD from "./layout/FooterMD";
import FooterLG from "./layout/FooterLG";

//img
import Banner1 from '../assets/img/Home/banner1.png';
import Banner2 from '../assets/img/Section1.png';
import Banner3 from '../assets/img/Home/banner3.png';
import Popular1 from '../assets/img/Home/popular1.png';
import Popular2 from '../assets/img/Home/popular2.png';
import Popular3 from '../assets/img/Home/popular3.png';
import Comfort1 from '../assets/img/Home/comfort1.png';
import Comfort2 from '../assets/img/Home/comfort2.png';
import Comfort3 from '../assets/img/Home/comfort3.png';
import Novel1 from '../assets/img/Home/novel1.png';
import Novel2 from '../assets/img/Home/novel2.png';
import Novel3 from '../assets/img/Home/novel3.png';
import Novel4 from '../assets/img/Home/novel4.png';
import Relation1 from '../assets/img/Home/relation1.png';
import Relation2 from '../assets/img/Home/relation2.png';
import Relation3 from '../assets/img/Home/relation3.png';
import Relation4 from '../assets/img/Home/relation4.png';


let timer = setInterval(HandleRight, 9000);

function HandleLeft() {
    const banner = document.getElementById('bannerBox');
    clearInterval(timer)
    timer = setInterval(HandleRight, 9000)
    if (banner.style.marginLeft == 0) {
        banner.style.marginLeft = '-200%'
    } else if (banner.style.marginLeft == '0px') {
        banner.style.marginLeft = '-200%'
    } else if (banner.style.marginLeft == '-200%') {
        banner.style.marginLeft = '-100%'
    } else if (banner.style.marginLeft == '-100%') {
        banner.style.marginLeft = 0
    }
}

function HandleRight() {
    const banner = document.getElementById('bannerBox');
    
    if (banner.style.marginLeft == 0 ) {
        banner.style.marginLeft = '-100%'
    } else if (banner.style.marginLeft == '0px') {
        banner.style.marginLeft = '-100%'
    } else if (banner.style.marginLeft == '-100%') {
        banner.style.marginLeft = '-200%'
    } else if (banner.style.marginLeft == '-200%') {
        banner.style.marginLeft = 0
    }
}

function HandleRightClick() {
    HandleRight();
    clearInterval(timer);
    timer = setInterval(HandleRight, 9000);
}


function Home1920() {
    return (
        <div className="overflow-hidden ">
            <TopBar1/>
            <div className="home-con1-arrow">
                <span onClick={HandleLeft}>
                    <ArrowBackIosNew id='arrowLeft' style={{width:'40px', height: '60px', marginLeft: '30px'}} />
                </span>
                <span onClick={HandleRightClick}>
                    <ArrowForwardIos id='arrowRight' style={{width:'40px', height: '60px', marginRight: '30px'}}  />
                </span>
            </div>
            <Box id='bannerBox' className="home-con1">
                <div className="home-con1-banner home-con1-banner1">
                    <motion.div className="home-con1-banner-desc home-con1-banner-desc-1"
                        initial={{ opacity: 0, 
                            y: 50
                        }}
                        whileInView={{ opacity: 1,
                            y: 0,
                            transition: {
                            type: "spring",
                            duration: 2,
                            }
                        }}
                    >
                        <p>초이패스</p>
                        <p>CHOIPASS</p>
                        <p>매월 1일, 15일엔 무료로 Pass</p>
                    </motion.div>
                    <motion.div className="home-con1-banner-desc-1-img"
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 2,
                            }
                        }}
                    >
                        <img src={Banner1} alt='banner1'/>
                    </motion.div>
                </div>
                <div className="home-con1-banner home-con1-banner2">
                    <motion.div className="home-con1-banner-desc home-con1-banner-desc-2"
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
                    <motion.div className="home-con1-banner-desc-2-img"
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 2,
                            }
                        }}
                    >
                        <img src={Banner2} alt='banner2'/>
                    </motion.div>
                </div>
                <div className="home-con1-banner home-con1-banner3">
                    <motion.div className="home-con1-banner-desc home-con1-banner-desc-3"
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
                        <p>기획전</p>
                        <p>돈과 사람</p>
                        <p>Money &amp; Human</p>
                        <p>돈은 정말 인생에서 중요한걸까? <br/>
                            사람은 정말 인생에서 중요한걸까?<br/>
                            돈도 중요하지만 사람도 중요하다...</p>
                    </motion.div>
                    <motion.div className="home-con1-banner-desc-3-img"
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 2,
                            }
                        }}
                    >
                        <img src={Banner3} alt='banner3'/>
                    </motion.div>
                </div>
            </Box>

            <Box className="home-con2">
                <a>
                    <Box>
                        <Map style={{ width:'50px', height: '50px'}}/>
                    </Box>
                    <p>초이패스</p>
                </a>
                <Link to='/card'>
                    <Box>
                        <CreditCard style={{ width:'50px', height: '50px'}}/>
                    </Box>
                    <p>이용권</p>
                </Link>
                <a>
                    <Box>
                        <Cake style={{ width:'50px', height: '50px'}}/>
                    </Box>
                    <p>이벤트</p>
                </a>
            </Box>

            <Box className="home-con3">
                <div>
                    <div className="home-con3-title">
                        <p>이번 달의 인기 책</p>
                        <Button className="btn-circle2" color="black">
                            <ArrowForward style={{ width: '50px', height: '50px'}}/>
                        </Button>
                    </div>
                    <div className="home-con3-content">
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Popular1} alt='왕의 전쟁' />
                            <p className="f-b25b">왕의 전쟁 <span className="f-b20 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.25,
                                }
                            }}
                        >
                            <img src={Popular2} alt='별빛 조각사' />
                            <p className="f-b25b">별빛 조각사 <span className="f-b20 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.5,
                                }
                            }}
                        >
                            <img src={Popular3} alt='픽셀 전쟁' />
                            <p className="f-b25b">픽셀 전쟁 <span className="f-b20 c-f-c666">최원호</span></p>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <div className="home-con3-title">
                        <p>위로가 되는 한마디</p>
                        <Button className="btn-circle2" color="black">
                            <ArrowForward style={{ width: '50px', height: '50px'}}/>
                        </Button>
                    </div>
                    <div className="home-con3-content2">
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Comfort1} alt='마음의 평화' />
                            <p className="f-b25b">마음의 평화 <span className="f-b20 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.25,
                                }
                            }}
                        >
                            <img src={Comfort2} alt='1mm 다이빙' />
                            <p className="f-b25b">1mm 다이빙 <span className="f-b20 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.5,
                                }
                            }}
                        >
                            <img src={Comfort3} alt='하얀 언덕'/>
                            <p className="f-b25b">하얀 언덕 <span className="f-b20 c-f-c666">최원호</span></p>
                        </motion.div>
                    </div>
                </div>
            </Box>

            <Box className="home-con4">
                <Divider />
                <div className="home-con4-title">
                    <div style={{ visibility:'none', width:'70px', height: '70px' }} />
                    <p> 달콤한 소설 이야기 </p>
                    <Button className="btn-circle2">
                        <ArrowForward style={{ width:'50px', height: '50px' }} />
                    </Button>
                </div>
                <div className="home-con4-content">
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Novel1} alt='모니터 안의 세상'/>
                        <p className="f-b25b"> 모니터 안의 세상 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.25,
                            }
                        }}
                    >
                        <img src={Novel2} alt='워노화신'/>
                        <p className="f-b25b"> 워노화신 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.5,
                            }
                        }}
                    >
                        <img src={Novel3} alt='신발을 부탁해'/>
                        <p className="f-b25b"> 신발을 부탁해</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.75,
                            }
                        }}
                    >
                        <img src={Novel4} alt='인비저블'/>
                        <p className="f-b25b"> 인비저블</p>
                    </motion.div>
                </div>

                <div className="home-con4-title">
                    <div style={{ visibility:'none', width:'70px', height: '70px' }} />
                    <p>관계에 스트레스 받지 않는 법 </p>
                    <Button className="btn-circle2">
                        <ArrowForward style={{ width:'50px', height: '50px' }} />
                    </Button>
                </div>
                <div className="home-con4-content">
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Relation1} alt='꼰대중독'/>
                        <p className="f-b25b"> 꼰대중독 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.25,
                            }
                        }}
                    >
                        <img src={Relation2} alt='그 상사의 사정'/>
                        <p className="f-b25b"> 그 상사의 사정 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.5,
                            }
                        }}
                    >
                        <img src={Relation3} alt='요즘 것들을 이해하는 법'/>
                        <p className="f-b25b"> 요즘 것들을 이해하는 법</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.75,
                            }
                        }}
                    >
                        <img src={Relation4} alt='돈과 사람'/>
                        <p className="f-b25b"> 돈과 사람</p>
                    </motion.div>
                </div>
            </Box>

            <FooterLG />
        </div>
    )
}

function Home1200() {
    return (
        <div className="overflow-hidden ">
            <TopBar1/>
            <div className="home1200-con1-arrow">
                <span onClick={HandleLeft}>
                    <ArrowBackIosNew id='arrowLeft' style={{width:'40px', height: '60px', marginLeft: '30px'}} />
                </span>
                <span onClick={HandleRightClick}>
                    <ArrowForwardIos id='arrowRight' style={{width:'40px', height: '60px', marginRight: '30px'}}  />
                </span>
            </div>
            <Box id='bannerBox' className="home1200-con1">
                <div className="home1200-con1-banner home1200-con1-banner1">
                    <motion.div className="home1200-con1-banner-desc home1200-con1-banner-desc-1"
                        initial={{ opacity: 0, 
                            y: 50
                        }}
                        whileInView={{ opacity: 1,
                            y: 0,
                            transition: {
                            type: "spring",
                            duration: 2,
                            }
                        }}
                    >
                        <p>초이패스</p>
                        <p>CHOIPASS</p>
                        <p>매월 1일, 15일엔 무료로 Pass</p>
                    </motion.div>
                </div>
                <div className="home1200-con1-banner home1200-con1-banner2">
                    <motion.div className="home1200-con1-banner-desc home1200-con1-banner-desc-2"
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
                        <p className="md-banner-small"><span className="md-banner-middle">무</span>조건 <span className="md-banner-middle">보</span>는 <span className="md-banner-middle">작</span>가의 작품</p>
                        <p className="md-banner-big c-f-white"> 초이의 소설 맛집</p>
                    </motion.div>
                </div>
                <div className="home1200-con1-banner home1200-con1-banner3">
                    <motion.div className="home1200-con1-banner-desc home1200-con1-banner-desc-3"
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
                        <p>기획전</p>
                        <p>돈과 사람</p>
                        <p>Money &amp; Human</p>
                        <p>돈은 정말 인생에서 중요한걸까? <br/>
                            사람은 정말 인생에서 중요한걸까?<br/>
                            돈도 중요하지만 사람도 중요하다...</p>
                    </motion.div>
                </div>
            </Box>

            <Box className="home1200-con2">
                <a>
                    <Box>
                        <Map style={{ width:'50px', height: '50px'}}/>
                    </Box>
                    <p>초이패스</p>
                </a>
                <Link to='/card'>
                    <Box>
                        <CreditCard style={{ width:'50px', height: '50px'}}/>
                    </Box>
                    <p>이용권</p>
                </Link>
                <a>
                    <Box>
                        <Cake style={{ width:'50px', height: '50px'}}/>
                    </Box>
                    <p>이벤트</p>
                </a>
            </Box>

            <Box className="home1200-con3">
                <div>
                    <div className="home1200-con3-title">
                        <p>이번 달의 인기 책</p>
                        <Button className="btn-circle2" color="black">
                            <ArrowForward style={{ width: '50px', height: '50px'}}/>
                        </Button>
                    </div>
                    <div className="home1200-con3-content">
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Popular1} alt='왕의 전쟁' />
                            <p className="f-b20b">왕의 전쟁 <span className="f-b16 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.25,
                                }
                            }}
                        >
                            <img src={Popular2} alt='별빛 조각사' />
                            <p className="f-b20b">별빛 조각사 <span className="f-b16 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.5,
                                }
                            }}
                        >
                            <img src={Popular3} alt='픽셀 전쟁' />
                            <p className="f-b20b">픽셀 전쟁 <span className="f-b16 c-f-c666">최원호</span></p>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <div className="home1200-con3-title">
                        <p>위로가 되는 한마디</p>
                        <Button className="btn-circle2" color="black">
                            <ArrowForward style={{ width: '50px', height: '50px'}}/>
                        </Button>
                    </div>
                    <div className="home1200-con3-content2">
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Comfort1} alt='마음의 평화' />
                            <p className="f-b20b">마음의 평화 <span className="f-b16 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.25,
                                }
                            }}
                        >
                            <img src={Comfort2} alt='1mm 다이빙' />
                            <p className="f-b20b">1mm 다이빙 <span className="f-b16 c-f-c666">최원호</span></p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                delay: 0.5,
                                }
                            }}
                        >
                            <img src={Comfort3} alt='하얀 언덕'/>
                            <p className="f-b20b">하얀 언덕 <span className="f-b16 c-f-c666">최원호</span></p>
                        </motion.div>
                    </div>
                </div>
            </Box>

            <Box className="home1200-con4">
                <Divider />
                <div className="home1200-con4-title">
                    <div style={{ visibility:'none', width:'50px', height: '50px' }} />
                    <p> 달콤한 소설 이야기 </p>
                    <Button className="btn-circle">
                        <ArrowForward style={{ width:'35px', height: '35px', color: 'black' }} />
                    </Button>
                </div>
                <div className="home1200-con4-content">
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Novel1} alt='모니터 안의 세상'/>
                        <p className="f-b16b"> 모니터 안의 세상 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.25,
                            }
                        }}
                    >
                        <img src={Novel2} alt='워노화신'/>
                        <p className="f-b16b"> 워노화신 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.5,
                            }
                        }}
                    >
                        <img src={Novel3} alt='신발을 부탁해'/>
                        <p className="f-b16b"> 신발을 부탁해</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.75,
                            }
                        }}
                    >
                        <img src={Novel4} alt='인비저블'/>
                        <p className="f-b16b"> 인비저블</p>
                    </motion.div>
                </div>

                <div className="home1200-con4-title">
                    <div style={{ visibility:'none', width:'50px', height: '50px' }} />
                    <p>관계에 스트레스 받지 않는 법 </p>
                    <Button className="btn-circle">
                        <ArrowForward style={{ width:'35px', height: '35px', color: 'black' }} />
                    </Button>
                </div>
                <div className="home1200-con4-content">
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Relation1} alt='꼰대중독'/>
                        <p className="f-b16b"> 꼰대중독 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.25,
                            }
                        }}
                    >
                        <img src={Relation2} alt='그 상사의 사정'/>
                        <p className="f-b16b"> 그 상사의 사정 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.5,
                            }
                        }}
                    >
                        <img src={Relation3} alt='요즘 것들을 이해하는 법'/>
                        <p className="f-b16b"> 요즘 것들을 이해하는 법</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            delay: 0.75,
                            }
                        }}
                    >
                        <img src={Relation4} alt='돈과 사람'/>
                        <p className="f-b16b"> 돈과 사람</p>
                    </motion.div>
                </div>
            </Box>

            <FooterMD />
        </div>
    )
}

function Home600() {
    return (
        <div className="overflow-hidden ">
            <TopBar1SM/>
            <div className="home600-con1-arrow">
                    <span onClick={HandleLeft}>
                        <ArrowBackIosNew id='arrowLeft' style={{width:'40px', height: '60px', marginLeft: '30px'}} />
                    </span>
                    <span onClick={HandleRightClick}>
                        <ArrowForwardIos id='arrowRight' style={{width:'40px', height: '60px', marginRight: '30px'}}  />
                    </span>
            </div>
            <Box id='bannerBox' className="home600-con1">
                <div className="home600-con1-banner home600-con1-banner1">
                    <motion.div className="home600-con1-banner-desc home600-con1-banner-desc-1"
                        initial={{ opacity: 0, 
                            y: 50
                        }}
                        whileInView={{ opacity: 1,
                            y: 0,
                            transition: {
                            type: "spring",
                            duration: 2,
                            }
                        }}
                    >
                        <p>초이패스</p>
                        <p>CHOIPASS</p>
                        <p>매월 1일, 15일엔 무료로 Pass</p>
                    </motion.div>
                </div>
                <div className="home600-con1-banner home600-con1-banner2">
                    <motion.div className="home600-con1-banner-desc home600-con1-banner-desc-2"
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
                        <p className="sm-banner-small"><span className="sm-banner-middle">무</span>조건 <span className="sm-banner-middle">보</span>는 <span className="sm-banner-middle">작</span>가의 작품</p>
                        <p className="sm-banner-big c-f-white"> 초이의 소설 맛집</p>
                    </motion.div>
                </div>
                <div className="home600-con1-banner home600-con1-banner3">
                    <motion.div className="home600-con1-banner-desc home600-con1-banner-desc-3"
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
                        <p>기획전</p>
                        <p>돈과 사람</p>
                        <p>Money &amp; Human</p>
                    </motion.div>
                </div>
            </Box>

            <Box className="home600-con2">
                <a>
                    <Box>
                        <Map style={{ width:'30px', height: '30px'}}/>
                    </Box>
                    <p>초이패스</p>
                </a>
                <Link to='/card'>
                    <Box>
                        <CreditCard style={{ width:'30px', height: '30px'}}/>
                    </Box>
                    <p>이용권</p>
                </Link>
                <a>
                    <Box>
                        <Cake style={{ width:'30px', height: '30px'}}/>
                    </Box>
                    <p>이벤트</p>
                </a>
            </Box>

            <Box className="home600-con3">
                <div>
                    <div className="home600-con3-title">
                        <p>이번 달의 인기 책</p>
                        <Button className="btn-circle2" color="black">
                            <ArrowForward style={{ width: '35px', height: '35px'}}/>
                        </Button>
                    </div>
                    <div className="home600-con3-content">
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Popular1} alt='왕의 전쟁' />
                            <p className="f-b20b">왕의 전쟁 </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Popular2} alt='별빛 조각사' />
                            <p className="f-b20b">별빛 조각사 </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Popular3} alt='픽셀 전쟁' />
                            <p className="f-b20b">픽셀 전쟁 </p>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <div className="home600-con3-title">
                        <p>위로가 되는 한마디</p>
                        <Button className="btn-circle2" color="black">
                            <ArrowForward style={{ width: '35px', height: '35px'}}/>
                        </Button>
                    </div>
                    <div className="home600-con3-content2">
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Comfort1} alt='마음의 평화' />
                            <p className="f-b20b">마음의 평화 </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Comfort2} alt='1mm 다이빙' />
                            <p className="f-b20b">1mm 다이빙 </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, 
                                x: -40
                            }}
                            whileInView={{ opacity: 1,
                                x: 0,
                                transition: {
                                type: "spring",
                                duration: 5,
                                }
                            }}
                        >
                            <img src={Comfort3} alt='하얀 언덕'/>
                            <p className="f-b20b">하얀 언덕 </p>
                        </motion.div>
                    </div>
                </div>
            </Box>

            <Box className="home600-con4">
                <Divider />
                <div className="home600-con4-title">
                    <p> 달콤한 소설 이야기 </p>
                    <Button className="btn-circle">
                        <ArrowForward style={{ width:'35px', height: '35px', color: 'black' }} />
                    </Button>
                </div>
                <div className="home600-con4-content">
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Novel1} alt='모니터 안의 세상'/>
                        <p className="f-b20b"> 모니터 안의 세상 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Novel2} alt='워노화신'/>
                        <p className="f-b20b"> 워노화신 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Novel3} alt='신발을 부탁해'/>
                        <p className="f-b20b"> 신발을 부탁해</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Novel4} alt='인비저블'/>
                        <p className="f-b20b"> 인비저블</p>
                    </motion.div>
                </div>

                <div className="home600-con4-title">
                    <p>관계에 스트레스 <br/> 받지 않는 법 </p>
                    <Button className="btn-circle">
                        <ArrowForward style={{ width:'35px', height: '35px', color: 'black' }} />
                    </Button>
                </div>
                <div className="home600-con4-content">
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Relation1} alt='꼰대중독'/>
                        <p className="f-b20b"> 꼰대중독 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Relation2} alt='그 상사의 사정'/>
                        <p className="f-b20b"> 그 상사의 사정 </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Relation3} alt='요즘 것들을 이해하는 법'/>
                        <p className="f-b20b"> 요즘 것들을 이해하는 법</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, 
                            x: -40
                        }}
                        whileInView={{ opacity: 1,
                            x: 0,
                            transition: {
                            type: "spring",
                            duration: 5,
                            }
                        }}
                    >
                        <img src={Relation4} alt='돈과 사람'/>
                        <p className="f-b20b"> 돈과 사람</p>
                    </motion.div>
                </div>
            </Box>

            <FooterSM />
        </div>
    )
}

function Home() {
  return (
    <div>
      <Hidden lgDown>
        <Home1920 />
      </Hidden>
      <Hidden smDown lgUp>
        <Home1200 />
      </Hidden>
      <Hidden smUp>
        <Home600 />
      </Hidden>
    </div>
  );
}

export default Home;