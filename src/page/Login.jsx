import React from "react";
import LoginPage from "./layout/LoginPage";
import { Hidden } from '@mui/material';

function Login1920() {
  return (
    <div className="login flex">
      <div className="login-bg">
      </div>
      <div className="login-page">
        <LoginPage />
      </div>
    </div>
  );
}

function Login600() {
  return (
    <div className="sm-login flex">
      <div className="sm-login-page">
        <LoginPage />
      </div>
    </div>
  );
}


function Login() {
  return (
    <div>
      <Hidden smDown >
        <Login1920 />
      </Hidden>
      <Hidden smUp>
        <Login600 />
      </Hidden>
    </div>
  );
}

export default Login;
