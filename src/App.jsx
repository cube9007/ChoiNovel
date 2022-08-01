import React from "react";
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "./page/Main";
import Login from "./page/Login";
import Price from "./page/Price";

import './assets/css/style.scss';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/price" element={<Price/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
