import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';

import Main from "./page/Main";
import Login from "./page/Login";
import Price from "./page/Price";
import Home from "./page/Home";
import List from "./page/List";
import Novel1 from "./page/novel/Novel1";
import Novel1_1 from "./page/novel/novel1/1";
import Novel1_2 from "./page/novel/novel1/2";
import Novel1_3 from "./page/novel/novel1/3";
import Novel1_4 from "./page/novel/novel1/4";
import Novel1_5 from "./page/novel/novel1/5";
import Novel1_6 from "./page/novel/novel1/6";
import Novel2 from "./page/novel/Novel2";
import Novel3 from "./page/novel/Novel3";
import Novel4 from "./page/novel/Novel4";
import Novel5 from "./page/novel/Novel5";
import Novel6 from "./page/novel/Novel6";
import Novel7 from "./page/novel/Novel7";
import Novel8 from "./page/novel/Novel8";
import Novel9 from "./page/novel/Novel9";
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
          <Route path="/list/novel1" element={<Novel1/>} />
          <Route path="/list/novel1/1" element={<Novel1_1/>} />
          <Route path="/list/novel1/2" element={<Novel1_2/>} />
          <Route path="/list/novel1/3" element={<Novel1_3/>} />
          <Route path="/list/novel1/4" element={<Novel1_4/>} />
          <Route path="/list/novel1/5" element={<Novel1_5/>} />
          <Route path="/list/novel1/6" element={<Novel1_6/>} />
          <Route path="/list/novel2" element={<Novel2/>} />
          <Route path="/list/novel3" element={<Novel3/>} />
          <Route path="/list/novel4" element={<Novel4/>} />
          <Route path="/list/novel5" element={<Novel5/>} />
          <Route path="/list/novel6" element={<Novel6/>} />
          <Route path="/list/novel7" element={<Novel7/>} />
          <Route path="/list/novel8" element={<Novel8/>} />
          <Route path="/list/novel9" element={<Novel9/>} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
