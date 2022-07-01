import React from "react";
import { Box, Button } from "@mui/material";

import Top from "./layout/Top";
import LoginButton2 from "./component/LoginButton2";

function Main() {
  
    return (
      <>
      <div className="section section-1 justify-center">
        <div className="section-1-bg"></div>
        <Top className='topComponent'/>
        <Box className="banner">
          <p className="banner-small"><span className="banner-middle">무</span>조건 <span className="banner-middle">보</span>는 <span className="banner-middle">작</span>가의 작품</p>
          <p className="banner-big c-f-white"> 초이의 소설 맛집</p>
        </Box>
        <div className="banner-img" >
          <img className="banner-img-png" src="img/Section1.png"></img>
        </div>
      </div>
      <div className="section section-2">

      </div>
    </>
    );
  };
export default Main;