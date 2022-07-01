import React, { Component } from "react";
import { Button } from "@mui/material";

class LoginButton2 extends Component {
  render() {
    return (
      <>
        <Button className="btn-login-primary" variant='outlined'>
            로그인    
        </Button>
      </>
    );
  };
}
export default LoginButton2;