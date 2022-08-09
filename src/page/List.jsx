import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Box } from '@mui/material';
import TopBar2 from './layout/TopBar2';
import TopBar2SM from './layout/TopBar2SM';

//img
import Today1 from "../assets/img/List/today1.png";
import Today2 from "../assets/img/List/today2.png";
import Today3 from "../assets/img/List/today3.png";

function List() {
    return (
        <div>
          <div className="list-section1-bg">
            <Box className='list-section1'>
              <p className="list-section1-title">오늘의 책</p>
              <div className="list-section1-con">
                <Link to="해와달">
                  <img className="list-section1-con-img" src={Today1} />
                  <p>1위</p>
                  <p>해와 달</p>
                </Link>
                <div style={{width: '100px'}}/>
                <Link to="해와달">
                  <img className="list-section1-con-img" src={Today2} />
                  <p>2위</p>
                  <p>돈과 사람</p>
                </Link>
                <div style={{width: '100px'}}/>
                <Link to="해와달">
                  <img className="list-section1-con-img" src={Today3} />
                  <p>3위</p>
                  <p>픽셀전쟁</p>
                </Link>
              </div>
            </Box>
          </div>
          <Box className='list-section list-section2'>
            <p className="list-section2-title">장르별 책</p>
          </Box>
        </div>
    )
}



function ListAll() {
  return (
    <div>
      <Hidden smDown>
        <TopBar2/>
        <List/>
      </Hidden>
      <Hidden smUp>
        <TopBar2SM/>
        <List/>
        <div style={{height:'80px'}} />
      </Hidden>
    </div>
  );
}

export default ListAll;