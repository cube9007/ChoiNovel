import React from "react";
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "./page/Main";
import Login from "./page/Login";
import Price from "./page/Price";
import Home from "./page/Home";
import List from "./page/List";
import Card from "./page/Card";

import './assets/css/style.scss';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/price" element={<Price/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
