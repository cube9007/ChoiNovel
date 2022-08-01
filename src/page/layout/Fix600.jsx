import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Box, Button } from "@mui/material";
import $ from "jquery";


class Fix extends Component {
  
  componentDidMount() {
    $(document).ready(function() {
      $('.fix600').hide();
      $(window).scroll(function() {
            if ($(this).scrollTop() > 1200) {
              $('.fix600').fadeIn();
            } else {
              $('.fix600').fadeOut();
            }
        });
      })
  }
  render() {
    return (
      <>
        <Link to='/price' className="fix600-link">
          <Button className="fix600 f-b30">
            <span className="f-b20b">첫 달 무료</span><span className="f-b20">로 독서 시작하기</span>
          </Button>
        </Link>
      </>
    );
  };
}
export default Fix;