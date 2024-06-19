import React, { useState } from 'react';
import './App.scss';
import * as Comp from './components/index.js';
import videos from './data/video-details.json';

function App() {
  const [mainVideoId, setMainVideo] = useState(videos[0].id)

  const video = videos.find(video => video.id === mainVideoId)

  return (
    <>
      <Comp.Header />
      <Comp.VideoPlayer 
        video = {video}
      />
      <div className='contentContainer'>
        <Comp.ContentBlock 
          video = {video}
        />
        <Comp.VideoList 
          mainVideoId = {mainVideoId}
          setMainVideo = {setMainVideo}
        />
      </div>
      
    </> 
  );
}

export default App;
