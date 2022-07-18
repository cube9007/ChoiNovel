import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";


class LoginButton extends Component {
  render() {
    return (
      <>
        <Link to='/login'>
          <Button className="btn-login-white" variant='outlined' color="white">
              로그인    
          </Button>
        </Link>
      </>
    );
  };
}
export default LoginButton;