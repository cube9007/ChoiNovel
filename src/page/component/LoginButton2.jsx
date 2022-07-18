import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

class LoginButton2 extends Component {
  render() {
    return (
      <>
        <Link to='/login'>
          <Button className="btn-login-primary" variant='outlined'>
              로그인    
          </Button>
        </Link>
      </>
    );
  };
}
export default LoginButton2;