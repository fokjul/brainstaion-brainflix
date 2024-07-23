import React from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import VideoUpload from './pages/VideoUpload/VideoUpload.jsx';
import * as Comp from './components/index.js';

function App() {
  return (
    <>
      <Comp.Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='video-upload' element={<VideoUpload />} />
        <Route path=':videoId' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
