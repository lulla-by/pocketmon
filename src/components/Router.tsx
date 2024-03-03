import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Detail from './Detail';
import Main from './Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;