import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Places from '../containers/Places';
import Place from '../containers/Place';
import Login from '../containers/Login';
import Admin from '../containers/Admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='lugares' element={<Places />} />
        <Route path='lugares/:slug' element={<Place />} />
        <Route path='admin' element={<Admin />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
