import React from "react";
import { Hidden } from '@mui/material';
import TopBar2 from './layout/TopBar2';

function List1920() {
    return (
        <div>
            <TopBar2/>
        </div>
    )
}

function List1200() {
    return (
        <div>
            asd
        </div>
    )
}

function List600() {
    return (
        <div>
            asdasda
        </div>
    )
}

function List() {
  return (
    <div>
      <Hidden lgDown>
        <List1920 />
      </Hidden>
      <Hidden smDown lgUp>
        <List1200 />
      </Hidden>
      <Hidden smUp>
        <List600 />
      </Hidden>
    </div>
  );
}

export default List;