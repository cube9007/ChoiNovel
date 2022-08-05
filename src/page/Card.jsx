import React from "react";
import { Hidden } from '@mui/material';
import TopBar3 from './layout/TopBar3';

function Card1920() {
    return (
        <div>
            <TopBar3/>
        </div>
    )
}

function Card1200() {
    return (
        <div>
            asd
        </div>
    )
}

function Card600() {
    return (
        <div>
            asdasda
        </div>
    )
}

function Card() {
  return (
    <div>
      <Hidden lgDown>
        <Card1920 />
      </Hidden>
      <Hidden smDown lgUp>
        <Card1200 />
      </Hidden>
      <Hidden smUp>
        <Card600 />
      </Hidden>
    </div>
  );
}

export default Card;