import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './DetailPage';
import MainPage from './MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;