import React from "react";
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "./page/Main";
import Login from "./page/Login";

import './assets/css/style.scss';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
