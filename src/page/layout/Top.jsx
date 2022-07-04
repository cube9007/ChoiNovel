import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import $ from "jquery";

import LoginButton from "../component/LoginButton";
import LoginButton2 from "../component/LoginButton2";

//img
import Logo from "../../assets/img/Logo.png";
import Logo2 from "../../assets/img/Logo2.png";

class Top extends Component {
  // componentDidUpdate() {
  //   window.scrollX
  // }
  componentDidMount() {
    $(document).ready(function() {
      $('.top2').hide();
      $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
              $('.top').fadeOut();
              $('.top2').fadeIn();
            } else {
              $('.top').fadeIn();
              $('.top2').fadeOut();
            }
        });
      })
  }
  render() {
    return (
      <>
        <Box className="flex justify-space top">
            <div className="flex align-center top-left">
                <img className="Logo" src={Logo}/>
                <p className="f-logo c-f-white">Choi</p>
            </div>
            <div className="top-right align-center flex ">
                <LoginButton/>
            </div>
        </Box>
        <Box className="flex justify-space top2">
            <div className="flex align-center top-left">
                <img className="Logo" src={Logo2}/>
                <p className="f-logo c-f-primary">Choi</p>
            </div>
            <div className="top-right align-center flex ">
                <LoginButton2/>
            </div>
        </Box>
      </>
    );
  };
}
export default Top;