import React, { Component } from "react";
import { Button } from "@mui/material";

class LoginButton extends Component {
  render() {
    return (
      <>
        <Button className="btn-login-white" variant='outlined' color="white">
            로그인    
        </Button>
      </>
    );
  };
}
export default LoginButton;