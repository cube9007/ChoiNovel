import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Home, FormatListBulleted, CreditCard } from "@mui/icons-material";


function TopBarSM() {
  return (
    <div>
        <Box className="flex justify-center">
            <div className="topbar">
                <Link to='/home' className="topbar-selected">
                    <Home/>
                    <p>홈</p>
                </Link>
                <Link to='/list'>
                    <FormatListBulleted />
                    <p>둘러보기</p>
                </Link>
                <Link to ='/card'>
                    <CreditCard/>
                    <p>정액제</p>
                </Link>
            </div>
        </Box>
    </div>
  );
}

export default TopBarSM;