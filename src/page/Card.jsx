import React from "react";
import { Hidden } from '@mui/material';
import TopBar3 from './layout/TopBar3';
import TopBar3SM from './layout/TopBar3SM';
import Price from "./Price";

function Card() {
  return (
    <div>
      <Hidden smDown>
        <TopBar3/>
        <Price/>
      </Hidden>
      <Hidden smUp>
        <TopBar3SM/>
        <Price/>
        <div style={{height:'80px'}} />
      </Hidden>
    </div>
  );
}

export default Card;