import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import $ from "jquery";

import LoginButton from "../component/LoginButton";
import LoginButton2 from "../component/LoginButton2";

class Top extends Component {
  // componentDidUpdate() {
  //   window.scrollX
  // }
  componentDidMount() {
    $(document).ready(function() {
      $('.top2').hide();
      $(window).scroll(function() {
            if ($(this).scrollTop() > 900) {
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
                <img className="Logo" src="img/Logo.png"/>
                <p className="f-logo c-f-white">Choi</p>
            </div>
            <div className="top-right align-center flex ">
                <LoginButton/>
            </div>
        </Box>
        <Box className="flex justify-space top2">
            <div className="flex align-center top-left">
                <img className="Logo" src="img/Logo2.png"/>
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