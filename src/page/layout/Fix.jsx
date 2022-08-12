import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Box, Button } from "@mui/material";
import $ from "jquery";


class Fix extends Component {
  
  componentDidMount() {
    $(document).ready(function() {
      $('.fix').hide();
      $(window).scroll(function() {
            if ($(this).scrollTop() > 1200) {
              $('.fix').fadeIn();
            } else {
              $('.fix').fadeOut();
            }
        });
      })
  }
  render() {
    return (
      <>
        <Link to='/price' className="fix-link">
          <Button className="fix f-b30" onClick={() => window.scrollTo(0,0)}>
            <span className="f-b20b">첫 달 무료</span><span className="f-b20">로 독서 시작하기</span>
          </Button>
        </Link>
      </>
    );
  };
}
export default Fix;