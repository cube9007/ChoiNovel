import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';

import Main from "./page/Main";
import Login from "./page/Login";
import Price from "./page/Price";
import Home from "./page/Home";
import List from "./page/List";
import NovelOne from "./page/novel/Novel1";
import NovelOne1 from "./page/novel/novel1/1";
import NovelOne2 from "./page/novel/novel1/2";
import NovelOne3 from "./page/novel/novel1/3";
import NovelOne4 from "./page/novel/novel1/4";
import NovelOne5 from "./page/novel/novel1/5";
import NovelOne6 from "./page/novel/novel1/6";
import NovelTwo from "./page/novel/Novel2";
import NovelThree from "./page/novel/Novel3";
import NovelFour from "./page/novel/Novel4";
import NovelFive from "./page/novel/Novel5";
import NovelSix from "./page/novel/Novel6";
import NovelSeven from "./page/novel/Novel7";
import NovelEight from "./page/novel/Novel8";
import NovelNine from "./page/novel/Novel9";
import Card from "./page/Card";
import ScrollTop from "./ScrollTop";

import './assets/css/style.scss';

function App() {
  return (
    <>
      <HashRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/price" element={<Price/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/list/novel1" element={<NovelOne/>} />
          <Route path="/list/novel1/1" element={<NovelOne1/>} />
          <Route path="/list/novel1/2" element={<NovelOne2/>} />
          <Route path="/list/novel1/3" element={<NovelOne3/>} />
          <Route path="/list/novel1/4" element={<NovelOne4/>} />
          <Route path="/list/novel1/5" element={<NovelOne5/>} />
          <Route path="/list/novel1/6" element={<NovelOne6/>} />
          <Route path="/list/novel2" element={<NovelTwo/>} />
          <Route path="/list/novel3" element={<NovelThree/>} />
          <Route path="/list/novel4" element={<NovelFour/>} />
          <Route path="/list/novel5" element={<NovelFive/>} />
          <Route path="/list/novel6" element={<NovelSix/>} />
          <Route path="/list/novel7" element={<NovelSeven/>} />
          <Route path="/list/novel8" element={<NovelEight/>} />
          <Route path="/list/novel9" element={<NovelNine/>} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
