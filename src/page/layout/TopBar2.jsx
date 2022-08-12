import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Person, Home, FormatListBulleted, CreditCard } from "@mui/icons-material";

import Logo2 from "../../assets/img/Logo2.png";

function TopBar() {
  return (
    <div>
        <Box className="flex justify-space">
            <Link to='/' className="flex align-center top-left">
                <img className="Logo" src={Logo2}/>
                <p className="f-logo c-f-primary">Choi</p>
            </Link>
            <div className="topbar">
                <Link to='/home' >
                    <Home/>
                    <p>홈</p>
                </Link>
                <Link to='/list' className="topbar-selected">
                    <FormatListBulleted />
                    <p>둘러보기</p>
                </Link>
                <Link to ='/card'>
                    <CreditCard/>
                    <p>정액제</p>
                </Link>
            </div>
            <div className="top-right align-center flex ">
                <Button className="btn-circle">
                    <Person style={{width:'30px', height:'30px', color: '#444'}} />
                </Button>
            </div>
        </Box>
    </div>
  );
}

export default TopBar;