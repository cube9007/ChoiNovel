import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Home, FormatListBulleted, CreditCard } from "@mui/icons-material";


function TopBarSM() {
  return (
    <div>
        <Box className="topbarSM">
            <div className="topbar">
                <Link to='/home'>
                    <Home/>
                </Link>
                <Link to='/list'>
                    <FormatListBulleted />
                </Link>
                <Link to ='/card' className="topbar-selected">
                    <CreditCard/>
                </Link>
            </div>
        </Box>
    </div>
  );
}

export default TopBarSM;