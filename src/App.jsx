import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';

import Main from "./page/Main";

import './assets/css/style.scss';

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
