import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import { Button, TextField, InputAdornment, IconButton, FormControl, OutlinedInput, InputLabel } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

function LoginPage() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    });
  
  const handleChangePassword = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      };
  
  const handleClickShowPassword = () => {
      setValues({
          ...values,
          showPassword: !values.showPassword,
      });
  };
  
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
    return (
      <div className="loginPage">
        <div >
            <p  className="f-b25b" > 심심할 땐 초이의 소설맛집! </p>
            <p  className="f-b14 c-f-c666"> 초이에서 인생소설을 찾아보세요. </p>
        </div>
        <div className="loginPage-id">
            <TextField className="textField-login" fullWidth placeholder="아이디">  </TextField>
            <FormControl variant="standard" className='textField' >
              <OutlinedInput className="textField-login" fullWidth placeholder="비밀번호" 
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChangePassword('password')}
                endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {values.showPassword ?  <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </InputAdornment>
              }
            />  </FormControl>
        </div>
        <div className="loginPage-login">
            <Button className="loginPage-login-button" fullWidth variant="contained" disableElevation> 로그인 </Button>
        </div>
        <div className="loginPage-bottom f-b14 flex">
            <p>회원가입</p>
            <p>비밀번호 찾기</p>
            <p>기업회원 로그인</p>
        </div>
      </div>
  );
}
export default LoginPage;